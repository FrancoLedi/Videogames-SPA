require('dotenv').config();
import {Sequelize} from 'sequelize-typescript';

const {
  DB_USER, DB_PASSWORD
} = process.env;

export const sequelize = new Sequelize({
 dialect: 'postgres',
 database: 'videogames',
 password: DB_PASSWORD,
 username: DB_USER,
 storage: ':memory:',
 models: [__dirname + '/models'],
})

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
 const { Videogame, Genre } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
 Videogame.belongsToMany(Genre, {through: 'videogames&genre'})
 Genre.belongsToMany(Videogame, {through: 'videogames&genre'})
