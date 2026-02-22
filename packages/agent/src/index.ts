import { Agent } from "./agent.js";
import type { AgentConfig } from "./types/config.js";

export function createAgent(config: AgentConfig) {
  return new Agent(config);
}
