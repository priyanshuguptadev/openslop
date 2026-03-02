import type { Tool } from "./tool.js";
import { execFile } from "child_process";

export class RunCommandTool implements Tool {
  name = "run_command";
  description = "Execute a system command without shell parsing";

  schema = {
    type: "object",
    properties: {
      command: {
        type: "string",
        description: "Executable name (e.g. npm, node, git)",
      },
      args: {
        type: "array",
        items: { type: "string" },
        description: "Arguments passed to the command",
      },
      timeout_ms: {
        type: "number",
        description: "Execution timeout in milliseconds",
        default: 15000,
      },
    },
    required: ["command"],
  };

  async execute(input: any): Promise<string> {
    const root = process.cwd();
    const timeout = input.timeout_ms ?? 15000;
    const args = Array.isArray(input.args) ? input.args : [];
    const ALLOWED = new Set(["npm", "node", "git", "npx"]);
    if (!ALLOWED.has(input.command)) {
      throw new Error(`Command not allowed: ${input.command}`);
    }

    return new Promise((resolve, reject) => {
      const child = execFile(
        input.command,
        args,
        {
          cwd: root,
          timeout,
          maxBuffer: 1024 * 1024,
          windowsHide: true,
        },
        (error, stdout, stderr) => {
          if (error) {
            if ((error as any).killed) {
              return reject(new Error("Command timed out"));
            }

            return reject(
              new Error(
                `Command failed with code ${(error as any).code}\n${stderr || stdout}`,
              ),
            );
          }

          const output = (stdout || stderr).trim();
          const MAX_OUTPUT = 200_000;
          const finalOutput =
            output.length > MAX_OUTPUT
              ? output.slice(0, MAX_OUTPUT) + "\n[Output truncated]"
              : output;

          resolve(finalOutput || "Command executed successfully");
        },
      );
    });
  }
}
