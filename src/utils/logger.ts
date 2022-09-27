import { showLogger } from "@/constants/env";

/**
 * A logger function that will only log on development
 * @param object - The object to log
 * @param comment - Autogenerated with `lg` snippet
 */
const logger = (object: unknown, comment?: string): void => {
  if (!showLogger) return;

  // eslint-disable-next-line no-console
  console.log(
    "%c ============== INFO LOG ============== \n",
    "color: #22D3EE",
    `${comment ?? "Value"}: ${object}`
  );
};

export default logger;
