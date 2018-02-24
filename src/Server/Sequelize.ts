import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
    username: 'postgres',
    password: 'mysecretpassword',
    database: 'naxatu',
    host: '127.0.0.1',
    dialect: 'postgres',
    modelPaths: [__dirname + '/Models'],
    logging: process.env.NODE_ENV !== 'production',
});
