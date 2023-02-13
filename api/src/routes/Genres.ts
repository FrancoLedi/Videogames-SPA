// Aca va a parar el request de obtener los generos
require('dotenv').config();
const { Router } = require('express');
const { Genre } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;
import { GenresRootObject, Respuesta } from './Types';
import { Request, Response } from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const respuesta = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    
    const genres: string[] = await respuesta.data.results.map( (el: Respuesta) =>  el.name )
    console.log(genres)
    genres.forEach(el => {
        Genre.findOrCreate({
            where: { name: el }
        })
    })

    const allGenres = await Genre.findAll();
         res.send(allGenres);
    });

module.exports = router;