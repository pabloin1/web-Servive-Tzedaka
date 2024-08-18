import ServerInterface from "../interfaces/Server.interface";

const server: ServerInterface = {
    isProduction: false,
    PORT: process.env.PORT || '8080'
}

export default server;