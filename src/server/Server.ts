import config from "../config/Config";
import ServerInterface from "../interfaces/Server.interface";

const server: ServerInterface = {
  isProduction: true,
  PORT: config.PORT,
};

export default server;