import { Sequelize } from "sequelize";
import path from "path";
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(process.cwd(),'/config/config.json'))[env];

const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
);
const db:any={};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;