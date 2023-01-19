import axios from "axios";
import { Dispatch } from 'redux';
import { ActionTypes, Games, GameDetail, Genre } from './Types';

export function getAllVideogames(){

    return async function(dispatch: Dispatch) {
       var json = await axios.get<Games[]>('http://localhost:3001/videogames')
           return dispatch({
               type: ActionTypes.GET_ALL_VIDEOGAMES, 
               payload: json.data
           })
        }
}

export function getGame(name: string){

    return async function(dispatch: Dispatch) {
        try {
            
            var games = await axios.get<Games[] | Games>('http://localhost:3001/videogames?name=' + name)
            
           return dispatch({
               type: ActionTypes.GET_GAME, 
               payload: games.data
           })
        }
         catch (err) {
           return err
        }
    }
}

export function getGenres() {
    return async function(dispatch: Dispatch) {
      var genres = await axios.get<Genre[]>('http://localhost:3001/genres')
      return dispatch({
        type: ActionTypes.GET_GENRES, 
        payload: genres.data
        })
    }
}

export function createVideogame(payload: GameDetail){
    return async function(dispatch: Dispatch) {
        var videogame = await axios.post('http://localhost:3001/videogames', payload)
        
        return videogame
      }
}

export function filterVideogamesBy(payload: string) {
    return {
        type: ActionTypes.FILTER, payload: payload
    }
}

export function sortVideogamesBy(payload: string) {
    return {
        type: ActionTypes.SORT, payload: payload
    }
}

export function getDetail(id: string | number) {
    return async function (dispatch: Dispatch){
        var detail = await axios.get<GameDetail>('http://localhost:3001/videogame/' + id);
        return dispatch({
            type: ActionTypes.DETAIL,
            payload: detail.data
        })
    }
}