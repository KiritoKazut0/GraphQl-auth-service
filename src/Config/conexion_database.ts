import {Sequelize} from "sequelize";
import dotenv from "dotenv"
dotenv.config();

const sequelize = new Sequelize(
    process.env['NAME_DATABASE'] || '',
    process.env['USER_DATABASE'] || '',
    process.env['PASSSWORD_DATABASE'] || '', {
        host: process.env['HOST_DATABASE'],
        dialect: "mysql",
        logging: false
    }
);



export default sequelize;