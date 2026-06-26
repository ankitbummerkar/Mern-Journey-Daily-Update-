import { Activity } from "react";

// for installation
// npm i wiston

//  difference between console.log & logger
logger.info("hello world");
console.log("hello world");

console.log(error.message);
logger.error(error.message);

logger.info("hello world");
logger.warn("hello world");
logger.error("hello world");
logger.debug("hello world");

// key points----

// save log to File

// coloured console output
// timestamp
// production ready
// seperate files for normal logs and error logs

// efficiently handle Application  activity and errors

// format to write---

const winston = require("winston");

const logger = winston.createLogger({
  level: "info",

  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => {
      return `${timestamp} [${level}] ${message}`;
    }),
  ),

  transports: [
    new winston.transports.Console(),

    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
    }),

    new winston.transports.File({
      filename: "logs/combined.log",
    }),
  ],
});

module.exports = logger;
