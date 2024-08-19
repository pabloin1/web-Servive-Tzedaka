"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
const MySQL_config_1 = __importDefault(require("../../config/MySQL.config"));
const runStoredProceduresMigration = () => __awaiter(void 0, void 0, void 0, function* () {
    const { database } = MySQL_config_1.default, dbConfigWithoutDB = __rest(MySQL_config_1.default, ["database"]);
    const connection = yield (0, promise_1.createPool)(Object.assign(Object.assign({}, dbConfigWithoutDB), { database }));
    try {
        const storedProcedures = [
            // CreateConfiguration procedure
            `
            CREATE PROCEDURE CreateConfiguration(
                IN p_id INT,
                IN p_mission VARCHAR(255),
                IN p_vision VARCHAR(255),
                IN p_address VARCHAR(255),
                IN p_email VARCHAR(255),
                IN p_phone VARCHAR(45),
                IN p_timetable DATETIME
            )
            BEGIN 
               IF (p_id = 0) THEN
                    INSERT INTO configuration (mission, vision, address, email, phone, timetable)
                    VALUES (p_mission, p_vision, p_address, p_email, p_phone, p_timetable);
                    SELECT LAST_INSERT_ID() AS id;
               ELSE 
                    UPDATE configuration
                    SET mission = p_mission,
                        vision = p_vision,
                        address = p_address,
                        email = p_email,
                        phone = p_phone,
                        timetable = p_timetable
                    WHERE id = p_id;
                    SELECT p_id AS id;
               END IF;
            END;
            `,
            // CreateForm procedure
            `
            CREATE PROCEDURE CreateForm(
                IN p_id INT,
                IN p_subjects VARCHAR(255), 
                IN p_full_name VARCHAR(255), 
                IN p_phone VARCHAR(255), 
                IN p_email VARCHAR(255), 
                IN p_message VARCHAR(255), 
                IN p_readed TINYINT
            )
            BEGIN
                IF (p_id = 0) THEN
                    INSERT INTO form (subjects, full_name, phone, email, message, readed)
                    VALUES (p_subjects, p_full_name, p_phone, p_email, p_message, p_readed);
                    SELECT LAST_INSERT_ID() AS id;
                ELSE 
                    UPDATE form
                    SET subjects = p_subjects, 
                        full_name = p_full_name, 
                        phone = p_phone, 
                        email = p_email, 
                        message = p_message, 
                        readed = p_readed
                    WHERE id = p_id;
                    SELECT p_id AS id;
                END IF;
            END;
            `,
            // CreateProduct procedure
            `
            CREATE PROCEDURE CreateProduct(
                IN p_id INT, 
                IN p_amount FLOAT, 
                IN p_description VARCHAR(45)
            )
            BEGIN
                IF (p_id = 0) THEN
                    INSERT INTO product (amount, description)
                    VALUES (p_amount, p_description);
                    SELECT LAST_INSERT_ID() AS id;
                ELSE 
                    UPDATE product 
                    SET amount = p_amount, description = p_description
                    WHERE id = p_id;
                    SELECT p_id AS id;
                END IF;
            END;
            `,
            // CreateUser procedure
            `
            CREATE PROCEDURE CreateUser(
                IN p_id INT,
                IN p_email VARCHAR(45), 
                IN p_name VARCHAR(45), 
                IN p_password VARCHAR(255), 
                IN p_token VARCHAR(45)
            )
            BEGIN 
                IF (p_id = 0) THEN
                    INSERT INTO user (email, name, password, token)
                    VALUES (p_email, p_name, SHA2(p_password, 256), p_token);
                    SELECT LAST_INSERT_ID() AS id;
                ELSE 
                    UPDATE user
                    SET email = p_email,
                        name = p_name,
                        password = SHA2(p_password, 256), 
                        token = p_token
                    WHERE id = p_id;
                    SELECT p_id AS id;
                END IF;
            END;
            `,
            // DeleteForm procedure
            `
            CREATE PROCEDURE DeleteForm(IN p_id INT)
            BEGIN
                DELETE FROM form WHERE id = p_id;
            END;
            `,
            // DeleteProduct procedure
            `
            CREATE PROCEDURE DeleteProduct(IN p_id INT)
            BEGIN
                DELETE FROM product WHERE id = p_id;
            END;
            `,
            // DeleteUser procedure
            `
            CREATE PROCEDURE DeleteUser(IN p_id INT)
            BEGIN
                DELETE FROM user WHERE id = p_id;
            END;
            `,
            // GetAllConfigurations procedure
            `
            CREATE PROCEDURE GetAllConfigurations()
            BEGIN
                SELECT * FROM configuration;
            END;
            `,
            // GetAllForms procedure
            `
            CREATE PROCEDURE GetAllForms()
            BEGIN
                SELECT * FROM form;
            END;
            `,
            // GetAllProducts procedure
            `
            CREATE PROCEDURE GetAllProducts()
            BEGIN
                SELECT * FROM product ORDER BY amount ASC;
            END;
            `,
            // GetAllUsers procedure
            `
            CREATE PROCEDURE GetAllUsers()
            BEGIN
                SELECT * FROM user;
            END;
            `,
            // GetConfiguration procedure
            `
            CREATE PROCEDURE GetConfiguration(IN p_id INT)
            BEGIN
                SELECT * FROM configuration WHERE id = p_id;
            END;
            `,
            // GetForm procedure
            `
            CREATE PROCEDURE GetForm(IN p_id INT)
            BEGIN
                SELECT * FROM form WHERE id = p_id;
            END;
            `,
            // GetProduct procedure
            `
            CREATE PROCEDURE GetProduct(IN p_id INT)
            BEGIN
                SELECT * FROM product WHERE id = p_id;
            END;
            `,
            // GetUser procedure
            `
            CREATE PROCEDURE GetUser(IN p_id INT)
            BEGIN
                SELECT * FROM user WHERE id = p_id;
            END;
            `,
            // GetUserByEmail procedure
            `
            CREATE PROCEDURE GetUserByEmail(IN p_email VARCHAR(45))
            BEGIN
                SELECT id, email, name, password, token
                FROM user
                WHERE email = p_email;
            END;
            `,
            // UpdateFormReadStatus procedure
            `
            CREATE PROCEDURE UpdateFormReadStatus(
                IN p_id INT,
                IN p_readed TINYINT
            )
            BEGIN
                UPDATE form
                SET readed = p_readed 
                WHERE id = p_id;
                SELECT p_id AS id, p_readed AS read_status;
            END;
            `,
        ];
        for (const procedure of storedProcedures) {
            yield connection.query(procedure);
        }
        console.log('Stored procedures migration completed successfully.');
    }
    catch (error) {
        console.error('Stored procedures migration failed:', error);
    }
    finally {
        yield connection.end();
    }
});
runStoredProceduresMigration();
//# sourceMappingURL=SP_migration.js.map