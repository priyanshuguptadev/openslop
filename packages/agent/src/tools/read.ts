import type { Tool } from "./tool.js";
import fs from "fs/promises";
import path from "path";

export class ReadFileTool implements Tool {
  name = "read_file";
  description = "Read content of a file";
  schema = {
    type: "object",
    properties: {
      file_path: {
        type: "string",
        description: "Absolute or relative path to file",
      },
      required: ["file_path"],
    },
  };
  async execute(input: any): Promise<string> {
    const file_path = path.resolve(process.cwd(), input.file_path);
    const content = await fs.readFile(file_path, { encoding: "utf-8" });
    return content;
  }
}
