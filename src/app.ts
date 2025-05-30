import express, { Express } from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";

import { corsOptions, rateLimiter, initializeDatabase, customEnvs, Logger } from "./lib";

const app: Express = express();
const PORT = customEnvs.port || 5000;

// Middleware
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true, limit: "50kb" }));
app.use(express.json({ limit: "15mb", type: "application/json" }));
app.use(helmet());
app.use(morgan("combined"));
app.use(cookieParser());
app.use(express.json());
app.use(rateLimiter);

// Handle synchronous errors
process.on("uncaughtException", (err) => {
  // Log error only in development environment
  customEnvs.env === "development" && Logger.error(`${["API UNCAUGHTEXCEPTION ERROR: "]} ${err.message} ${"\n\nERROR STACK: "} ${err.stack}`);
});

// Asynchronous error handler
// app.use(errorHandler);

/** Start Server only after successful connection to database */
const startServer = async () => {
  try {
    await initializeDatabase();
    app.listen(PORT, () => Logger.success(`Server is listening on port: ${PORT}`));
  } catch (error) {
    Logger.error("Something went wrong, please try again :::");
  }
};

startServer();
