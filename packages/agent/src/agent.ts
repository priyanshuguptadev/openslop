import { Client } from "./llm/client.js";
import { Memory } from "./memory/memory.js";
import { SYSTEM_PROMPT } from "./prompts/system.js";
import { registerTools } from "./tools/register.tools.js";
import { ToolRegistry } from "./tools/registry.js";
import type { AgentConfig } from "./types/config.js";

export class Agent {
  private memory = new Memory();
  private tools = new ToolRegistry();
  private llm: Client;
  constructor(config: AgentConfig) {
    registerTools(this.tools);
    this.llm = new Client(config, this.tools.list());
    this.memory.add({
      role: "system",
      content: SYSTEM_PROMPT,
    });
  }
  async send(input: string): Promise<string> {
    this.memory.add({ role: "user", content: input });
    return this.loop();
  }
  private async loop(): Promise<string> {
    try {
      while (true) {
        const response = await this.llm.complete(this.memory.all());
        if (!response) throw new Error("Response not generated");
        this.memory.add(response);
        if (response.tool_calls && response.tool_calls.length) {
          const call = response.tool_calls[0];
          if (call && call.type == "function") {
            const name = call.function.name;
            const tool = this.tools.get(name);
            let content = "";
            if (!tool) {
              content = `Error: Tool ${name} does not exits. Please check available tools.`;
            } else {
              try {
                let args;
                try {
                  args = JSON.parse(call.function.arguments);
                } catch (parseError) {
                  throw new Error(`Invalid JSON args`);
                }
                content = await tool.execute(args);
              } catch (error: any) {
                content = `Error: ${error.message || String(error)}`;
              }
            }
            this.memory.add({
              role: "tool",
              tool_call_id: call.id,
              content: content,
            });
            continue;
          }
        }
        this.memory.add(response);
        return response.content || "";
      }
    } catch (error) {
      console.error("Critical Agent Error", error);
      throw error;
    }
  }
}
