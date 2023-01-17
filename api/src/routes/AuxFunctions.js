require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const { Videogame, Genre } = require('../db');

const getDetail = async (id) => {
    
try {
    
    const respuesta = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)

    
    const apiInfo = {
        id: respuesta.data.id,
        name: respuesta.data.name,
        img: respuesta.data.background_image,
        description: respuesta.data.description, 
        released: respuesta.data.released,
        rating: respuesta.data.rating,
        platforms: respuesta.data.platforms.map(el => el.platform.name), 
        genres: respuesta.data.genres.map(el => el.name)
    }
    return apiInfo;

} catch (error) { // EN CASO DE NO EXISTIR ID VA A PARAR AL CATCH Y RETORNA FALSO
    
    return false;
    }
    
} 

const getApiInfo = async () => {
    const respuesta = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
    const apiInfo = await respuesta.data.results.map( el => {
        
        return {
            id: el.id,
            name: el.name,
            img: el.background_image,
            released: el.released,
            rating: el.rating,
            platforms: el.platforms.map(el => el.platform.name), 
            genres: el.genres.map(el => el.name)
        }
    })
    return apiInfo;
}

const getDbInfo = async () => {
   
    const result = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
     })
     return result.map(el => el.dataValues)
}

const getAllInfo = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const aux = await dbInfo.reduce((acc, el) => acc.concat({
        ...el,
        genres: el.Genres.map(g => g.name)
    }), []); // Creo una variable auxiliar para mapear y que me de solo la info que me es de utilidad
    const allInfo = apiInfo.concat(aux); 

    return allInfo;
}

module.exports = {getApiInfo, getDbInfo, getAllInfo, getDetail}