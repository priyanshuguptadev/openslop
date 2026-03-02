import type { Tool } from "./tool.js";
import fs from "fs/promises";
import path from "path";

export class DeleteFileTool implements Tool {
  name = "delete_file";
  description = "Delete a file or directory within project root";

  schema = {
    type: "object",
    properties: {
      file_path: {
        type: "string",
        description: "Path relative to project root",
      },
      recursive: {
        type: "boolean",
        description: "Allow recursive deletion for directories",
        default: false,
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

    if (resolvedPath === root) {
      throw new Error("Refusing to delete project root");
    }

    const stat = await fs.stat(resolvedPath).catch(() => null);
    if (!stat) {
      throw new Error("Path does not exist");
    }

    if (stat.isDirectory()) {
      if (!input.recursive) {
        throw new Error("Directory deletion requires recursive=true");
      }
      await fs.rm(resolvedPath, { recursive: true, force: false });
      return `Directory deleted: ${path.relative(root, resolvedPath)}`;
    }

    await fs.unlink(resolvedPath);
    return `File deleted: ${path.relative(root, resolvedPath)}`;
  }
}
