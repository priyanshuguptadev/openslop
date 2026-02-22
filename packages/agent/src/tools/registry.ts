import type { Tool } from "./tool.js";

export class ToolRegistry {
  private tools = new Map<string, Tool>();

  register(tool: Tool) {
    this.tools.set(tool.name, tool);
  }
  get(toolname: string) {
    return this.tools.get(toolname);
  }
  list(): Tool[] {
    return Array.from(this.tools.values());
  }
}
