import "dotenv/config";
import "./database";
import "express-async-errors";
import express from "express";
import cors from "cors";
import { setUpRoutes } from "./routes";
import { httpException, requestInfo } from "./middlewares";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.app.use(requestInfo);
    this.app.use(
      cors({
        origin: "*",
        allowedHeaders: "*",
      })
    );
    this.app.use(express.json());
  }

  routes() {
    setUpRoutes(this.app);
  }
  exceptionHandler() {
    this.app.use(httpException);
  }
}

export default new App().app;
