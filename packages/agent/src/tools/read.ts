import type { Tool } from "./tool.js";
import fs from "fs/promises";
import path from "path";

export class ReadFileTool implements Tool {
  name = "read_file";
  description = "Read content of a text file within project root";

  schema = {
    type: "object",
    properties: {
      file_path: {
        type: "string",
        description: "Path relative to project root",
      },
    },
    required: ["file_path"],
  };

  async execute(input: any): Promise<string> {
    const root = process.cwd();
    const resolvedPath = path.resolve(root, input.file_path);

    if (!resolvedPath.startsWith(root + path.sep)) {
      throw new Error("Path escapes project root");
    }

    const stat = await fs.stat(resolvedPath).catch(() => null);

    if (!stat) {
      throw new Error("File does not exist");
    }

    if (!stat.isFile()) {
      throw new Error("Path is not a file");
    }

    const MAX_BYTES = 200_000;
    if (stat.size > MAX_BYTES) {
      throw new Error("File too large to read");
    }

    const content = await fs.readFile(resolvedPath, "utf-8");

    return content;
  }
}
