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
        description: "Absolute or relative path to file",
      },
      content: {
        type: "string",
        description: "Content to write into the file",
      },
      required: ["file_path", "content"],
    },
  };
  async execute(input: any): Promise<string> {
    const file_path = path.resolve(process.cwd(), input.file_path);
    const content = input.content;
    await fs.writeFile(file_path, content, "utf-8");
    return "File is written successfully";
  }
}
