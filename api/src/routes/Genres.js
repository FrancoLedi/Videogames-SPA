// Aca va a parar el request de obtener los generos
require('dotenv').config();
const { Router } = require('express');
const { Genre } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;

const router = Router();

router.get('/', async (req, res) => {
    const respuesta = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    const genres = await respuesta.data.results.map( el =>  el.name )
    console.log(genres)
    genres.forEach(el => {
        Genre.findOrCreate({
            where: { name: el }
        })
    })

    const allGenres = await Genre.findAll();
         res.send(allGenres);
    });

/*
    | CONTINUAR CON LA RUTA GET /genres > Tiene que hacer un request get al endpoint
     de la api genres (te trae la data en .results) y de ahi mapeas en un array los
     {id} y {name} y esos datos los usas para cargarlos en la base de datos y bueno
     nada despues dice que la ruta te tiene que traer los genders desde ahi (DB)

*/

/*                       | Registro de la ultima entrada: 27/6 |
        ~Síntesis

        Bueno el dia de hoy comenzamos el dia haciendo la ruta de GET /videogames
        en el que haciamos toda la logica dentro del controlador a la ruta usando
        queries de sequelize... pero mas tarde me di cuenta que convenia codear
        async functions guardadas en constantes que trajeran la data tanto de la
        DATABASE como de la api externa y utilizar esas constantes para ejecutar
        la funcion en la ruta que quiera y a partir de toda la info que me trae
        adaptarla a lo que necesite retornar en ese request.
        Tuve que instalar axios para enviar request a la api externa y tambien
        agregue la propiedad «img» al modelo videogames.

        ~ Tareas hechas:

            > Agregar «img» al modelo (Videogame)
            > Crear funciones para traer la info de la api y la database
            > Instalar axios y crear un archivo con objetos de juego para testear
            > Codear ruta POST
            > Agregar API_KEY al archivo .env
            ----------------------------------------------------------------------------------
            Tarea en curso: > Testear returns de funciones getInfo (usar ruta GET /videogames)

        ~ A tener en cuenta:

            > Abris el archivo con objetos para testear, los mandas en POST,
            te fijas lo que retorna «platforms» de la API y lo que retorna
            la otra tambien.

            > Una vez que el PASO ANTERIOR ya quedo HECHO, y que testeamos 
            getAllInfo() a ver como te entrega la data...
            Usamos esa funcion y manipulamos la data que retorna para codear
            las rutas.

        ~ Tareas a realizar:
         
            > Hacer la ruta getAll (carga todos los juegos en el catalogo)
            > Hacer la ruta getById (clickeas detalle de un juego)
            > Hacer la ruta getByName (cargar juegos que le pasemos por nombre
                en la barra de busqueda)
            > Hacer la ruta getGenres (carga el menu desplegable de filtrar 
                por genero)
            > Al final modularizar las rutas
            
        | DURANTE LA TARDE COMPRAR HUEVOS Y PAPEL HIGIENICO

        | A LA NOCHE IR A CENAR A LO DE ROCHI (COMPRAR 1 VINO)
*/

module.exports = router;