
import { GET_ALL_VIDEOGAMES, GET_GAME, GET_GENRES, CREATE_VIDEOGAME, FILTER, SORT, DETAIL } from './Actions';

const initialState = {
    videogames: [],
    allVideogames: [],
    genres: [],
    game: {},
};

function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_ALL_VIDEOGAMES:
            return { ...state, videogames: action.payload, allVideogames: action.payload};

        case GET_GAME:
            return { ...state, videogames: action.payload};

        case GET_GENRES:
            return { ...state, genres: action.payload};

        case CREATE_VIDEOGAME:
            return { ...state};

        case FILTER:
            const allVideogames = state.allVideogames;

            if (action.payload === 'db' || action.payload === 'api'){
                
                const filtered = action.payload === 'db' ? allVideogames.filter( el => el.createdInDb ) : allVideogames.filter( el => !el.createdInDb )
                
                return { ...state, videogames: filtered };
            }
            
            
            const filtered = action.payload === 'all' ? allVideogames : allVideogames.filter( el => el.genres.includes(action.payload) ) 
            
            
            return { ...state, videogames: filtered };

        case SORT:
            var sortedVideogames = [];  
            
            switch (action.payload) {
               
                case 'a-z':
                    
                     sortedVideogames = state.videogames.sort(function (a, b) {
                             if (a.name > b.name){
                                 return 1;
                             }
                             if (b.name > a.name){
                                 return -1;
                             }
                             return 0;
                         }) 
                         
                         return {
                            ...state,
                            videogames: sortedVideogames
                        }

                case 'z-a':
                    
                     sortedVideogames = state.videogames.sort(function (a, b) {
                                if (a.name > b.name){
                                    return -1;
                                }
                                if (b.name > a.name){
                                    return 1;
                                }
                                return 0;
                            }) 

                            return {
                                ...state,
                                videogames: sortedVideogames
                            };

                case 'asc':
                    
                     sortedVideogames = state.videogames.sort(function (a, b) {
                        if (a.rating > b.rating){
                            return 1;
                        }
                        if (b.rating > a.rating){
                            return -1;
                        }
                        return 0;
                    }) 

                    return {
                        ...state,
                        videogames: sortedVideogames
                    }

               case 'desc':
                
                     sortedVideogames = state.videogames.sort(function (a, b) {
                        if (a.rating > b.rating){
                            return -1;
                        }
                        if (b.rating > a.rating){
                            return 1;
                        }
                        return 0;
                    }) 

                    return {
                        ...state,
                        videogames: sortedVideogames
                    }

                    default:
                        return state;

            }

        case DETAIL:
            
            return {
                ...state, game: action.payload
            }
            
        default:
            return state;
    }
}

export default rootReducer;