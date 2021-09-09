import "dotenv/config";
import "./database";
import express from "express";
import cors from "cors";
import { setUpRoutes } from "./routes";
import { requestInfo, httpException } from "./middlewares";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(httpException);
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
}

export default new App().app;
