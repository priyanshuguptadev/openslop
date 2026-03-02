import type { Tool } from "./tool.js";
import fs from "fs/promises";
import path from "path";

export class WriteFileTool implements Tool {
  name = "write_file";
  description = "Create and write into file";

  schema = {
    type: "object",
    properties: {
      file_path: {
        type: "string",
        description: "Path relative to project root",
      },
      content: {
        type: "string",
        description: "Content to write into the file",
      },
      overwrite: {
        type: "boolean",
        description: "Allow overwriting existing file",
        default: false,
      },
    },
    required: ["file_path", "content"],
  };

  async execute(input: any): Promise<string> {
    const root = process.cwd();
    const resolvedPath = path.resolve(root, input.file_path);

    if (!resolvedPath.startsWith(root + path.sep)) {
      throw new Error("Path escapes project root");
    }

    const stat = await fs.stat(resolvedPath).catch(() => null);
    if (stat?.isDirectory()) {
      throw new Error("Cannot overwrite a directory with a file");
    }

    const dir = path.dirname(resolvedPath);
    await fs.mkdir(dir, { recursive: true });

    await fs.writeFile(resolvedPath, input.content, {
      encoding: "utf-8",
      flag: input.overwrite ? "w" : "wx",
    });

    return `File written: ${path.relative(root, resolvedPath)}`;
  }
}
