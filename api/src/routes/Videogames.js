// Aca van a parar los requests a la pagina principal que lista todos los 
// videojuegos
require('dotenv').config();
const { Router } = require('express');
const { v4: UUIDV4 } = require('uuid');
const { Videogame, Genre } = require('../db');


const { getAllInfo } = require('./AuxFunctions')

const router = Router();


 router.get('/', async (req, res) => {
       const { name } = req.query;
       const data = await getAllInfo()
      
       const result = data.map(el => {
        
         return {
             id: el.id,
             name: el.name,
             img: el.img,
             genres: el.genres,
             rating: el.rating,
             createdInDb: el.createdInDb 
         }
     })

       if (name){ // ACA NOS FALTARIA HACER UN .SPLICE Y CORTAR EN 15 LOS RESULTADOS
        
         const resultByName = result.filter( el =>  el.name.toLowerCase().includes(name.toLowerCase()));
        
         if (resultByName.length){
            
             return res.send(resultByName)
         } else{
            
             return res.status(400).send('No se encontro juego con ese nombre')
         }
         
       }
    
      res.json(result)
});
  


router.post('/', async (req, res) => {
    let { name, description, released, rating, platforms, createdInDb, genres } = req.body;
    if (!name || !description || !platforms) return res.send('Faltan datos obligatorios');
    platforms = platforms.join(', ')
  try {
   const newVideogame = await Videogame.create({
    id: UUIDV4(),
    name, 
    description, 
    released, 
    rating, 
    platforms, // CHEQUEAR MAS ADELANTE SI ESTA BIEN QUE ME PASEN EL DATO EN UN STRING SEPARADO POR COMAS
    createdInDb
   })

   const genreDb = await Genre.findAll({
    where: { name: genres } // ME QUEDE EN EUN QUILOMBO ACA PORQUE TIENE QUE CREAR JUEGO CON GENRE TAMBIEN
   })

   newVideogame.addGenre(genreDb)
   res.json(newVideogame)
  } catch (error) {

   res.send(error)
  } 
  
 });


module.exports = router;

/*                       | Registro de la ultima entrada: 25/6 |
 
        Hoy logramos hacer la conexion de la DATABASE y levantar el server...
        Nos costo mucho porque nos habia faltado agregar las relaciones a los modelos
        (y creimos que podia ser un error en las credenciales pero no, estaban bien
        asi que me volvi loco hasta darme cuenta que faltaba agregar las relaciones)
        y no se sincronizaban, ademas hicimos copiarpegar y nos olvidamos de
        cambiarle el nombre al 2do que quedo con el mismo que el anterior y rompia.
        Tambien renegamos un poco con la consola para instalar nodemon y poder usarlo.
     
        Pero ya esta sincronizado, hicimos la consulta en psql (\l, \c videogames, \dt).

        ~ Tareas hechas:
            > Programar modelos de database (Genre, Videogame)
            > Crear .env con las credenciales
            > Instalamos dependencias y nodemon
            > Separamos las rutas y creamos 3 enrutadores para modularizar
            > Configuramos los routers en index.js
                ----------------------------------------------------
                Ultima tarea en curso: > Hacer la ruta a /videogames

        ~ A tener en cuenta: 
            > Hay que repasar bien bien como son las queries de sequelize porque esta 
            parte se trata de eso... buscar en la database con comandos de sequelize.
            (Revisar homework, slides, reveer clase o el repaso del M4 que no lo vimos).

            > Asegurarse de entender y solucionar todo el tema referido a json para que
            sean compatibles las respuestas que nos mande postman (probemos con insomnio).
            Ya que vamos a tener que testear mucho los returns de las rutas para ponernos
            cancheros con manejar las queries de sequelize.
          
            
            | MAÑANA DESPUES DE DESAYUNAR IR A HACER LAS COMPRAS: 
                
                x ACEITE GRANDE
                x 4 PAQUETES DE PAPEL HIGIENICO
                x 3 LECHES
                x 1 LACTAL ARTESANO
                x NESQUIK GRANDE
                

            
        ~ Tareas a realizar:
            > Hacer la ruta post (crea pj)
            > Hacer la ruta getAll (carga todos los juegos en el catalogo)
            > Hacer la ruta getById (clickeas detalle de un juego)
            > Hacer la ruta getByName (cargar juegos que le pasemos por nombre
                en la barra de busqueda)
            > Hacer la ruta getGenres (carga el menu desplegable de filtrar 
                por genero)

            Bueno ya que volviste de comer tenes que codear la ruta del post basado
            en el que hizo lamela (lo analizamos y lo adaptamos al nuestro tratando
            de hacerlo con async await en lugar de promesas).
             Una vez hecha la ruta esa podemos crear personajes en la base de datos 
            y usar la ruta get para probar las queries con sequelize asi repasamos
            bien eso.
             Cuando ya la tengamos clara con las queries de sequelize continuamos 
            haciendo el resto de las rutas y al final las modularizamos


            **TOCA RESOLVER EL PROBLEMA DE LAS PROPIEDADES {GENRE} Y {IMG} DE LA BASE DE DATOS
            PORQUE EL POST NO ESTA SETEANDO LOS GENRES A LOS JUEGOS Y TODAVIA NO SABEMOS DE 
            DONDE VA A LLEGAR LA IMG.
            APARTE LAS PLATFORMS NOS DEVUELVE ARRAY Y CAPAZ TENGA QUE DEVOLVER STRING


                                    | Registro de la ultima entrada: 2/7 |

            ADVERTENCIA: QUEDO POR SOLUCIONAR EL TEMA DE QUE LAS PLATFORMS TIENEN QUE ESTAR ORDENADAS
            COMO LOS GENRES ES DECIR UN ARRAY QUE CONTENGA STRINGS, YA QUE LAS PLATFORMS CREO QUE 
            QUEDARON COMO UN STRING SOLO LARGO SEPARADO POR COMAS Y ASI NO ESTA BIEN PASA QUE AHORA 
            ME DIO PAJA SOLUCIONARLO TE LO DEJO A VOS PA. SALU2 DESDE EL PASADO
*/