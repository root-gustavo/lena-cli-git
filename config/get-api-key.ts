import os from "os";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { logger } from "@utils/logger.js";

const homeDir = os.homedir();
export const LENA_PATH = path.join(homeDir, ".lena");

const projectEnv = path.resolve(process.cwd(), "api.env");
const lenaEnv = path.join(LENA_PATH, "api.env");

let cachedApiKey: string | null = null;

function loadEnv() {
  if (fs.existsSync(projectEnv)) {
    dotenv.config({ path: projectEnv, quiet: true });
    logger.debug("ENV iniciada (raiz)");
  } else if (fs.existsSync(lenaEnv)) {
    dotenv.config({ path: lenaEnv, quiet: true });
    logger.debug("ENV iniciada (.lena/)")
  }
}

export function getApiKey(): string {
  if (cachedApiKey) {
    return cachedApiKey;
  }

  loadEnv();

  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    throw new Error("API_KEY não encontrada no .env");
  }

  cachedApiKey = apiKey;

  return apiKey;
}