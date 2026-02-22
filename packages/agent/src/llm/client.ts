import OpenAI from "openai";
import type { AgentConfig } from "../types/config.js";
import type {
  ChatCompletionMessage,
  ChatCompletionMessageParam,
  ChatCompletionTool,
} from "openai/resources";
import type { Tool } from "../tools/tool.js";

export class Client {
  private openai: OpenAI;
  private model: string;
  private tools: ChatCompletionTool[];
  constructor(config: AgentConfig, tools: Tool[]) {
    this.openai = new OpenAI({
      apiKey: config.apiKey,
      baseURL: config.baseUrl,
    });
    this.model = config.model;
    this.tools = tools.map((t) => ({
      type: "function",
      function: {
        name: t.name,
        description: t.description,
        parameters: t.schema,
      },
    }));
  }
  async complete(
    messages: ChatCompletionMessageParam[],
  ): Promise<ChatCompletionMessage | undefined> {
    const response = await this.openai.chat.completions.create({
      model: this.model,
      messages: messages,
      tools: this.tools,
    });
    const choice = response.choices[0];
    return choice?.message;
  }
}
