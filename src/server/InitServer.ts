import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import server from "./Server";
import routes from "../routes";
import MySQl from "../database/MySQL.database";

export default class Server {
  private app: Application;
  private port: string = server.PORT;

  constructor() {
    this.app = express();
    this.port;
    //definir las rutas
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      MySQl.connection()
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error(String(error));
      }
    }
  }

  middlewares() {
    this.app.use(bodyParser.json({ limit: "1024mb" }));
    this.app.use(bodyParser.urlencoded({ extended: true, limit: "1024mb" }));
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    routes.forEach((routes) => {
      this.app.use(routes.path, routes.router);
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Running in port ${this.port}`);
    });
  }
}
