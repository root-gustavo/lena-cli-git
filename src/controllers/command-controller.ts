import { showHelp } from "@utils/command-show-help.js";
import { createApiKey } from "@services/api-key-service.js"
import { runCommit } from "./use-cases/commit-controller.js";
import { runBranch } from "./use-cases/branch-controller.js";
import { runPr } from "./use-cases/pr-controller.js";
import { logger } from "@utils/logger.js";

export function handleCommand(
  command: string | null,
  message: string | null
) {
  switch (command) {
    case "commit":
        runCommit()
        logger.info("commit usado")
      return;

    case "branch":
        runBranch()
        logger.info("branch usado")
      return;

    case "pr":
        runPr()
        logger.info("PR usado")
      return;

    case "set-api-key":
        if (message == null){
            logger.error("Valor da API não definido - help: set-api-key `valor`")
            return;
        }
        createApiKey(message);
        return;

    case "--help":
    case "-h":
    case null:
      return showHelp();

    default:
      console.error(`Comando desconhecido: ${command}`);
      showHelp();
  }
}