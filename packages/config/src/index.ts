import fs from "fs";
import os from "os";
import path from "path";

export interface OpenSlopConfig {
  baseUrl: string | null;
  apiKey: string | null;
  model: string | null;
}

const CONFIG_DIR = path.join(os.homedir(), ".openslop");
const CONFIG_PATH = path.join(CONFIG_DIR, "config.json");

export function getConfigPath() {
  return CONFIG_PATH;
}

export function configExists(): boolean {
  return fs.existsSync(CONFIG_PATH);
}

export function loadConfig(): OpenSlopConfig {
  if (!configExists()) {
    return { apiKey: null, baseUrl: null, model: null };
  }

  const raw = fs.readFileSync(CONFIG_PATH, "utf-8");

  try {
    return JSON.parse(raw);
  } catch {
    throw new Error("Config file is corrupted.");
  }
}

export function saveConfig(config: OpenSlopConfig) {
  if (!fs.existsSync(CONFIG_DIR)) {
    fs.mkdirSync(CONFIG_DIR, { recursive: true });
  }

  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), {
    mode: 0o600,
  });
}
