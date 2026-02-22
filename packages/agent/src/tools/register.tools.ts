import { BashTool } from "./bash.js";
import { ReadFileTool } from "./read.js";
import type { ToolRegistry } from "./registry.js";
import { WriteFileTool } from "./write.js";

export async function registerTools(registry: ToolRegistry) {
  registry.register(new ReadFileTool());
  registry.register(new WriteFileTool());
  registry.register(new BashTool());
}
