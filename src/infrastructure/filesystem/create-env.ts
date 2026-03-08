import fs from "fs";
import path from "path";
import { LENA_PATH } from "@config/get-api-key.js";

export function writeEnvFile(fileName: string, content: string): void {
  const filePath = path.join(LENA_PATH, fileName);

  fs.mkdirSync(LENA_PATH, { recursive: true });

  fs.writeFileSync(filePath, content, "utf-8");
}