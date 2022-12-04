import axios from "axios";
export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES';
export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME';
export const GET_GAME = 'GET_GAME';
export const GET_GENRES = 'GET_GENRES';
export const FILTER = 'FILTER';
export const SORT = 'SORT';
export const DETAIL = 'DETAIL'

export function getAllVideogames(){

     return async function(dispatch) {
        var json = await axios('http://localhost:3001/videogames')
            return dispatch({
                type: GET_ALL_VIDEOGAMES, 
                payload: json.data
            })
         }
}

export function getGame(name){

    return async function(dispatch) {
        try {
            
            var games = await axios('http://localhost:3001/videogames?name=' + name)
            
           return dispatch({
               type: GET_GAME, 
               payload: games.data
           })
        }
         catch (err) {
           return err
        }
    }
}

export function getGenres() {
    return async function(dispatch) {
      var genres = await axios('http://localhost:3001/genres')
      return dispatch({
        type: GET_GENRES, 
        payload: genres.data
        })
    }
}

export function createVideogame(payload){
    return async function(dispatch) {
        var videogame = await axios.post('http://localhost:3001/videogames', payload)
        
        return videogame
      }
}

export function filterVideogamesBy(payload) {
    return {
        type: FILTER, payload: payload
    }
}
 
export function sortVideogamesBy(payload) {
    return {
        type: SORT, payload: payload
    }
}

export function getDetail(id) {
    return async function (dispatch){
        var detail = await axios('http://localhost:3001/videogame/' + id);
        return dispatch({
            type: DETAIL,
            payload: detail.data
        })
    }
}


// Aca nos falta hacer un getGame que haga un request a 'http://localhost:3001/videogame/juego que queramos' y cargue
// la data en el objeto "game" del store