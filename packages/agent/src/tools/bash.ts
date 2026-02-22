import type { Tool } from "./tool.js";
import { execSync } from "child_process";

export class BashTool implements Tool {
  name = "bash";
  description = "Execute short running bash commands";
  schema = {
    type: "object",
    properties: {
      command: {
        type: "string",
        description: "The command to run",
      },
      required: ["command"],
    },
  };
  async execute(input: any): Promise<string> {
    return execSync(input.command, { encoding: "utf-8" });
  }
}
