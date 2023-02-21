require('dotenv').config();
import {Sequelize} from 'sequelize-typescript';

import config from './lib/config';

export const sequelize = new Sequelize({
 dialect: 'postgres',
 host: config.dbHost,
 port: config.dbPort as unknown as number,
 database: config.dbName,
 password: config.dbPassword,
 username: config.dbUser,
 storage: ':memory:',
 models: [__dirname + '/models'],
 logging: false
})

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
export const { Videogame, Genre } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
 Videogame.belongsToMany(Genre, {through: 'videogames&genre'})
 Genre.belongsToMany(Videogame, {through: 'videogames&genre'})
