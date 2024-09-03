import MySQL from "../database/MySQL.database";
import ConfigurationInterface from "../interfaces/Configuration.interface";
import ResponseInterface from "../interfaces/Response.interface";

const listAll = async (): Promise<ResponseInterface> => {
    const sql: string = 'CALL GetAllConfigurations()';
    const response: ResponseInterface = await MySQL.executeQuery(sql);
    return response;
};

const listOne = async (id: number): Promise<ResponseInterface> => {
    const sql: string = `CALL GetConfiguration(${id})`;
    const response: ResponseInterface = await MySQL.executeQuery(sql);
    return response;
};

const update = async (configuration: ConfigurationInterface): Promise<ResponseInterface> => {
    const sql: string = `
        CALL UpdateConfiguration(
            1,
            '${configuration.mission}',
            '${configuration.vision}',
            '${configuration.address}',
            '${configuration.email}',
            '${configuration.phone}',
            '${configuration.timetable}',
            '${configuration.about_us}',
            '${configuration.url_googlemap}'
        )
    `;
    const response: ResponseInterface = await MySQL.executeQuery(sql);
    return response;
};


const ConfigurationRepository = {
    listAll,
    listOne,
    update
};

export default ConfigurationRepository;