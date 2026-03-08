type LogLevel = "DEBUG" | "INFO" | "WARN" | "ERROR";

const development =  true; // Troque para `false` quando for produto final

function format(level: LogLevel, message: string) {
  const date = new Date().toISOString();
  return `[${level}] ${message}`;
}

export const logger = {

  debug(message: string) {
    if (development) {
      console.debug(format("DEBUG", message));
    }
  },

  info(message: string) {
    console.info(format("INFO", message));
  },

  warn(message: string) {
    console.warn(format("WARN", message));
  },

  error(message: string) {
    console.error(format("ERROR", message));
  }

};