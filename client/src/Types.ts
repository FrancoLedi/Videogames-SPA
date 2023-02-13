// Tipando el estado del store...
export interface StoreState {
    videogames: Games[];
    allVideogames: Games[];
    genres: Genre[];
    game: GameDetail;
   }

// CreateGameState
export interface CreateGameState {
  id?: number;
  name: string;
  img: string;
  genres: string[];
  rating: number;
  platforms: string[];
  released: string;
  description: string;
  createdInDb?: boolean;
  // Agrego una propiedad Genres (G mayuscula)
  // que diferencia generos traidos desde DB
  Genres?:  Genre[];
  // La siguiente propiedad es para reutilizar la
  // interface en el componente VideoGameDetail...
    match?: {
      params: {
        idVideogame: string | number;
      } 
    }
  
}

// Tipando las propiedades del estado
export interface Genre {
    id: number;
    name: string;
}

export interface Games {
    id: number;
    name: string;
    img: string;
    genres: string[];
    rating: number;
    createdInDb?: boolean;
}

export interface GameDetail {
    id?: number;
    name: string;
    img: string;
    genres: string[];
    rating: number;
    platforms: string[] | string;
    released: string;
    description: string;
    createdInDb?: boolean;
    // Agrego una propiedad Genres (G mayuscula)
    // que diferencia generos traidos desde DB
    Genres?:  Genre[];
    // La siguiente propiedad es para reutilizar la
    // interface en el componente VideoGameDetail...
      match?: {
        params: {
          idVideogame: string | number;
        } 
      }
    
}

// Declarando las acciones
export enum ActionTypes {
    GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES',
    CREATE_VIDEOGAME = 'CREATE_VIDEOGAME',
    GET_GAME = 'GET_GAME',
    GET_GENRES = 'GET_GENRES',
    FILTER = 'FILTER',
    SORT = 'SORT',
    DETAIL = 'DETAIL',
    CLEAN = 'CLEAN'
  }

// Tipando actions que le llegan al reducer
export interface GET_ALL_VIDEOGAMES {
    type: ActionTypes.GET_ALL_VIDEOGAMES;
    payload: Games[];
  }

export interface CREATE_VIDEOGAME {
    type: ActionTypes.CREATE_VIDEOGAME;
  }

export interface GET_GAME {
    type: ActionTypes.GET_GAME;
    payload: Games[];
  }

export interface GET_GENRES {
    type: ActionTypes.GET_GENRES;
    payload: Genre[];
  }

export interface FILTER {
    type: ActionTypes.FILTER;
    payload: string;
  }

export interface SORT {
    type: ActionTypes.SORT;
    payload: string;
  }

export interface DETAIL {
    type: ActionTypes.DETAIL;
    payload: GameDetail;
  }

export interface CLEAN {
    type: ActionTypes.CLEAN;
  }

// Definiendo el type de la action del reducer
export type Action = GET_ALL_VIDEOGAMES | GET_GAME | GET_GENRES | CREATE_VIDEOGAME | FILTER | SORT | DETAIL | CLEAN;

// Type necesario para que funcione el Select en Filters.jsx
export interface SelectOption {
  value: string;
  label: string
}

export interface PropsFilter {
  paginado: Function;
  refreshComponent: Function;
}