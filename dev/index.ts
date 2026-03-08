import { handleCommand } from "@controllers/command-controller.js";

const args = process.argv.slice(2);

const command = args[0] || null;
const message = args[1] || null;

handleCommand(command, message);