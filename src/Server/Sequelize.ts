import {Sequelize, ISequelizeConfig} from 'sequelize-typescript';

export const sequelize: Sequelize = new Sequelize({
    username: 'naxatu',
    password: 'naxatu',
    database: 'naxatu',
    host: '127.0.0.1',
    dialect: 'postgres',
    modelPaths: [__dirname + '/Models'],
    logging: process.env['NODE_ENV'] !== 'production'
} as ISequelizeConfig);
