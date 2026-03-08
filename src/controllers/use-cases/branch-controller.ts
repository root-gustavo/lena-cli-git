import { checkApiKey } from "@services/api-key-service.js";
import { getApiKey } from "@config/get-api-key.js";

export function runBranch() {
    const apiKey = checkApiKey();
    getApiKey()
    if (!apiKey) {
        return;
    }

  // lógica de branch
}