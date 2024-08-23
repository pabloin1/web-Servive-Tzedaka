import { DatabaseType } from "../interfaces/DatabaseConfig.interface";
import Server from "../server/Server";
import config from "./Config";

const createCredentials = (host: string, database: string, user: string, password: string): DatabaseType => ({
    host,
    database,
    user,
    password,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});



const credentialsMySQLLocal = createCredentials(
    config.dbHost,
    config.dbName,
    config.dbUser,
    config.dbPassword
);

const credentialsMySQLHosting = createCredentials(
    '127.0.0.1',
    'sinevrok_db_orve',
    'sinevrok_user_orve',
    'orve.password'
);

const credentialsMySQL = Server.isProduction ? credentialsMySQLHosting : credentialsMySQLLocal;

export default credentialsMySQL;
