import ConfigurationInterface from "../interfaces/Configuration.interface";

const getStructure = (): ConfigurationInterface => {
    return { 
        id: 0,
        mission: "",
        vision: "",
        address: "",
        email: "",
        phone: "",
        timetable: ""
    };
};

const castConfiguration = (data: any): ConfigurationInterface => {
    return {
        id: data.id,
        mission: data.mission,
        vision: data.vision,
        address: data.address,
        email: data.email,
        phone: data.phone,
        timetable: data.timetable
    };
};

const castConfigurationList = (value: ConfigurationInterface[]): ConfigurationInterface[] => {
    return value.map(castConfiguration);
};

const ConfigurationModel = {
    castConfiguration,
    castConfigurationList,
    getStructure
};

export default ConfigurationModel;
