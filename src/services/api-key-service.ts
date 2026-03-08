import path from "path";
import fs from "fs";

import { writeEnvFile } from "@infrastructure/filesystem/create-env.js";
import { LENA_PATH } from "@config/get-api-key.js";
import { logger } from "@utils/logger.js";

const ENV_FILE = path.join(LENA_PATH, "api.env");

export function createApiKey(apiKey: string) {
  if (!apiKey) {
    throw new Error("API_KEY não pode ser vazia.");
  }

  writeEnvFile("api.env", `API_KEY=${apiKey}\n`);
}

export function checkApiKey(): string | null {
  if (!fs.existsSync(ENV_FILE)) {
    logger.debug("API_KEY não encontrada, use o comando: set-api-key <KEY>");
    return null;
  }

  const content = fs.readFileSync(ENV_FILE, "utf-8");

  const match = content.match(/^API_KEY=(.+)/m);

  if (!match) {
    logger.debug("API_KEY não encontrada, use o comando: set-api-key <KEY>");
    return null;
  }

  return match[1].trim();
}