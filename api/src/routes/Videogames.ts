// Aca van a parar los requests a la pagina principal que lista todos los 
// videojuegos
require('dotenv').config();
const { Router } = require('express');
import { Request, Response } from 'express';
const { v4: UUIDV4 } = require('uuid');
const { Videogame, Genre } = require('../db');
import { Api } from "./Types";

const { getAllInfo } = require('./AuxFunctions')

const router = Router();


 router.get('/', async (req: Request, res: Response) => {
       const name = req.query.name as string;
       const data: Api[] = await getAllInfo()
      
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

       if (name){
        console.log(name)
         const resultByName = result.filter( el =>  el.name.toLowerCase().includes(name.toLowerCase()));
        
         if (resultByName.length){
            
             return res.send(resultByName)
         } else{
            
             return res.status(400).send('No se encontro juego con ese nombre')
         }
         
       }
    
      res.json(result)
});
  


router.post('/', async (req: Request, res: Response) => {
    let { name, description, released, rating, platforms, createdInDb, img, genres } = req.body;
    if (!name || !description || !platforms) return res.send('Faltan datos obligatorios');
    platforms = platforms.join(', ')
    if (!img) img = 'https://img5.goodfon.com/original/1366x768/1/6e/minimalizm-fon-crash-maska-art-crash-bandicoot-bandicoot-thi.jpg'; // Imagen por defecto
  try {
   const newVideogame = await Videogame.create({
    id: UUIDV4(),
    name, 
    description, 
    released, 
    rating, 
    platforms, 
    createdInDb,
    img
   })

   const genreDb = await Genre.findAll({
    where: { name: genres } 
   })

   newVideogame.addGenre(genreDb)
   res.json(newVideogame)
  } catch (error) {

   res.send(error)
  } 
  
 });


module.exports = router;