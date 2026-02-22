import type { ChatCompletionMessageParam } from "openai/resources";

export class Memory {
  private messages: ChatCompletionMessageParam[] = [];
  add(message: ChatCompletionMessageParam) {
    this.messages.push(message);
  }
  all() {
    return this.messages;
  }
}
