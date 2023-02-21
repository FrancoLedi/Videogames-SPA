import { Action } from '../Types';
import { StoreState, Games, ActionTypes } from '../Types';


   const initialState: StoreState = {
    videogames: [],
    allVideogames: [],
    genres: [],
    game: {
        id: 0,
        name: '',
        img: '',
        genres: [],
        rating: 0,
        platforms: [],
        released: '',
        description: '',
    },
};



function rootReducer(state = initialState, action: Action):StoreState{
    switch (action.type) {

        case ActionTypes.GET_ALL_VIDEOGAMES:

            return { ...state, videogames: action.payload, allVideogames: action.payload};

        case ActionTypes.GET_GAME:

            return { ...state, videogames: action.payload};

        case ActionTypes.GET_GENRES:

            return { ...state, genres: action.payload};

        case ActionTypes.CREATE_VIDEOGAME:
                
            return { ...state};

        case ActionTypes.FILTER:

            const allVideogames = state.allVideogames;

            if (action.payload === 'db' || action.payload === 'api'){
                
                const filtered = action.payload === 'db' ? allVideogames.filter( el => el.createdInDb ) : allVideogames.filter( el => !el.createdInDb )
                
                return { ...state, videogames: filtered };
            }
            
            
            const filtered = action.payload === 'all' ? allVideogames : allVideogames.filter( el => el.genres.includes(action.payload) ) 
            
            
            return { ...state, videogames: filtered };

        case ActionTypes.SORT:

            var sortedVideogames: Games[] = [];  
            
            switch (action.payload) {
               
                case 'A - Z':
                    
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

                case 'Z - A':
                    
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

                case 'Ascendente':
                    
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

               case 'Descendente':
                
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

        case ActionTypes.DETAIL:

            if (typeof action.payload.id === 'string') {
                let platforms = action.payload.platforms as string;;
                let platformsConvertidaEnArray = platforms.split(', ');
                action.payload.platforms = platformsConvertidaEnArray;
                return {
                    ...state, game: action.payload
                }
            }
            
            return {
                ...state, game: action.payload
            }

        case ActionTypes.CLEAN:

            return{
                ...state, game: {
                    id: 0,
                    name: '',
                    img: '',
                    genres: [],
                    rating: 0,
                    platforms: [],
                    released: '',
                    description: ''}
            }
            
        default:
            return state;
    }
}

export default rootReducer;