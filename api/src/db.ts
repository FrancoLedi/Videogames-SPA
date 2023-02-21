require('dotenv').config();
import {Sequelize} from 'sequelize-typescript';

const {
  DB_USER, DB_PASSWORD, DB_NAME
} = process.env;

console.log(DB_USER)
console.log(DB_PASSWORD)
console.log(DB_NAME)

export const sequelize = new Sequelize({
 dialect: 'postgres',
 database: DB_NAME,
 password: DB_PASSWORD,
 username: DB_USER,
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
