import config from "../config/Config";
import ServerInterface from "../interfaces/Server.interface";

const server: ServerInterface = {
  isProduction: false,
  PORT: config.PORT,
};

export default server;