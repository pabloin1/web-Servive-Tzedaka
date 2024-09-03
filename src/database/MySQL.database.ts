import { Pool, PoolOptions, createPool } from 'mysql2/promise';
import Response from '../interfaces/Response.interface';
import credentialsMySQL from '../config/MySQL.config';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

type QueryResult<T = RowDataPacket[] | RowDataPacket[][] | ResultSetHeader> = [T, any];

const executeQuery = async (sql: string): Promise<Response> => {
    const dbConfig: PoolOptions = credentialsMySQL;
    const connection: Pool = await createPool(dbConfig);
    let data: Response;
    try {
        const response: QueryResult = await connection.query(sql);
        data = {
            status: 200,
            error: false,
            message: "Successfully executed query",
            value: response[0]
        };
    } catch (error: any) {
        console.error({ error });
        data = {
            status: 500,
            error: true,
            message: error.code ? `MySQL Error: ${error.code} - ${error.message}` : "Internal Server Error",
            value: {}
        };
    }
    await connection.end();
    return data;
};

const connection = async (): Promise<void> => {
    const sql = "SELECT @@VERSION AS version;";
    const response: Response = await executeQuery(sql);
    if (!response.error) {
        const version = response.value[0].version;
        console.error(`Connected to MySQL ${version}`);
    } else {
        console.error(`Failed to connect to MySQL: ${response.message}`);
    }
};

const MySQl = {
    executeQuery,
    connection
};

export default MySQl;
