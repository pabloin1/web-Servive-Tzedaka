import { Pool, PoolOptions, createPool } from 'mysql2/promise';
import credentialsMySQL from '../config/MySQL.config';

const runMigration = async () => {
    const { database, ...dbConfigWithoutDB }: PoolOptions = credentialsMySQL;

    const connection: Pool = await createPool(dbConfigWithoutDB);

    try {
        await connection.execute(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
        console.log(`Database '${database}' checked/created successfully.`);

        await connection.query(`USE \`${database}\`;`);

        await connection.execute(`
            CREATE TABLE IF NOT EXISTS Users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                email VARCHAR(255) NOT NULL,
                name VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                token VARCHAR(255)
            );
        `);

        // Table Product
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS Products (
                id INT AUTO_INCREMENT PRIMARY KEY,
                amount DECIMAL(10, 2) NOT NULL,
                description TEXT NOT NULL
            );
        `);

        // Table Form
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS Forms (
                id INT AUTO_INCREMENT PRIMARY KEY,
                subject VARCHAR(255) NOT NULL,
                full_name VARCHAR(255) NOT NULL,
                phone VARCHAR(20) NOT NULL,
                email VARCHAR(255) NOT NULL,
                message TEXT NOT NULL,
                readed BOOLEAN NOT NULL DEFAULT false
            );
        `);

        // Table Configuration
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS Configurations (
                id INT AUTO_INCREMENT PRIMARY KEY,
                mission TEXT NOT NULL,
                vision TEXT NOT NULL,
                address VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone VARCHAR(20) NOT NULL,
                timetable VARCHAR(255) NOT NULL
            );
        `);

        console.log('Migration completed successfully.');
    } catch (error) {
        console.error('Migration failed:', error);
    } finally {
        await connection.end();
    }
};

runMigration();
