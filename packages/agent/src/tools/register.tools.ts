import { RunCommandTool } from "./command.js";
import { DeleteFileTool } from "./delete.js";
import { ReadFileTool } from "./read.js";
import type { ToolRegistry } from "./registry.js";
import { WriteFileTool } from "./write.js";

export async function registerTools(registry: ToolRegistry) {
  registry.register(new ReadFileTool());
  registry.register(new WriteFileTool());
  registry.register(new RunCommandTool());
  registry.register(new DeleteFileTool());
}
