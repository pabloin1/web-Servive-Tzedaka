"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStructure = () => {
    return {
        id: 0,
        mission: "",
        vision: "",
        address: "",
        email: "",
        phone: "",
        timetable: "",
        about_us: "",
        url_googlemap: ""
    };
};
const castConfiguration = (data) => {
    return {
        id: data.id,
        mission: data.mission,
        vision: data.vision,
        address: data.address,
        email: data.email,
        phone: data.phone,
        timetable: data.timetable,
        about_us: data.about_us,
        url_googlemap: data.url_googlemap
    };
};
const castConfigurationList = (value) => {
    return value.map(castConfiguration);
};
const ConfigurationModel = {
    castConfiguration,
    castConfigurationList,
    getStructure
};
exports.default = ConfigurationModel;
//# sourceMappingURL=Configuration.model.js.map