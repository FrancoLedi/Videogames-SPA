export interface Api {
    id: number;
    name: string;
    img: string;
    description?: string;
    released: string;
    rating: number;
    platforms: string[];
    genres?: string[];
    Genres?: Genres[];
    createdInDb?: boolean;
}

export interface Genres {
    id: number;
    name: string;
}

// Genres.ts

export interface Respuesta {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: any;
}
// Auto-generated Type for Genres Api response

export interface GenresRootObject {
  count: number;
  next?: any;
  previous?: any;
  results: GenresResult[];
}

export interface GenresResult {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: GenresGame[];
}

export interface GenresGame {
  id: number;
  slug: string;
  name: string;
  added: number;
}

// DBDATA (VideogameDetails required interface)

export interface DBDATA {
      id: string;
      name: string;
      img: string;
      description: string;
      released?: string;
      rating: number;
      platforms: string[];
      Genres: string[];
      createdInDb: boolean;
    }
// Results (AuxFunctions required interface)

export interface Results {
    dataValues: {
        id: string;
        name: string;
        img: string;
        description: string;
        released?: string;
        rating: number;
        platforms: string[];
        Genres: string[];
        createdInDb: boolean;
      },
      _previousDataValues: {
        id: string;
        name: string;
        img: string;
        description: string;
        released?: string;
        rating: number;
        platforms: string[];
        Genres: string[];
        createdInDb: boolean;
      },
      uniqno: number,
      _changed: any;
      _options: any;
      isNewRecord: boolean;
      Genres: any;
}


// Auto-generated Type for Api Response

export interface RootObject {
    id: number;
    slug: string;
    name: string;
    name_original: string;
    description: string;
    metacritic: number;
    metacritic_platforms: Metacriticplatform[];
    released: string;
    tba: boolean;
    updated: string;
    background_image: string;
    background_image_additional: string;
    website: string;
    rating: number;
    rating_top: number;
    ratings: Rating[];
    reactions: Reactions;
    added: number;
    added_by_status: Addedbystatus;
    playtime: number;
    screenshots_count: number;
    movies_count: number;
    creators_count: number;
    achievements_count: number;
    parent_achievements_count: number;
    reddit_url: string;
    reddit_name: string;
    reddit_description: string;
    reddit_logo: string;
    reddit_count: number;
    twitch_count: number;
    youtube_count: number;
    reviews_text_count: number;
    ratings_count: number;
    suggestions_count: number;
    alternative_names: string[];
    metacritic_url: string;
    parents_count: number;
    additions_count: number;
    game_series_count: number;
    user_game?: any;
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    parent_platforms: Parentplatform[];
    platforms: Platform4[];
    stores: Store2[];
    developers: Developer[];
    genres: Developer[];
    tags: Tag[];
    publishers: Developer[];
    esrb_rating: Platform2;
    clip?: any;
    description_raw: string;
  }
  
  export interface Tag {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
  }
  
  export interface Developer {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }
  
  export interface Store2 {
    id: number;
    url: string;
    store: Store;
  }
  
  export interface Store {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
  }
  
  export interface Platform4 {
    platform: Platform3;
    released_at: string;
    requirements: Requirements;
  }
  
  export interface Requirements {
    minimum?: string;
    recommended?: string;
  }
  
  export interface Platform3 {
    id: number;
    name: string;
    slug: string;
    image?: any;
    year_end?: any;
    year_start?: number;
    games_count: number;
    image_background: string;
  }
  
  export interface Parentplatform {
    platform: Platform2;
  }
  
  export interface Platform2 {
    id: number;
    name: string;
    slug: string;
  }
  
  export interface Addedbystatus {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  }
  
  export interface Reactions {
    '1': number;
    '2': number;
    '3': number;
    '4': number;
    '5': number;
    '6': number;
    '7': number;
    '8': number;
    '9': number;
    '10': number;
    '11': number;
    '12': number;
    '14': number;
    '15': number;
    '16': number;
    '18': number;
    '20': number;
    '21': number;
  }
  
  export interface Rating {
    id: number;
    title: string;
    count: number;
    percent: number;
  }
  
  export interface Metacriticplatform {
    metascore: number;
    url: string;
    platform: Platform;
  }
  
  export interface Platform {
    platform: number;
    name: string;
    slug: string;
  }

// Games response

export interface GamesRootObject {
    count: number;
    next: string;
    previous?: any;
    results: GamesResult[];
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
    seo_h1: string;
    noindex: boolean;
    nofollow: boolean;
    description: string;
    filters: GamesFilters;
    nofollow_collections: string[];
  }
  
  export interface GamesFilters {
    years: GamesYear2[];
  }
  
  export interface GamesYear2 {
    from: number;
    to: number;
    filter: string;
    decade: number;
    years: GamesYear[];
    nofollow: boolean;
    count: number;
  }
  
  export interface GamesYear {
    year: number;
    count: number;
    nofollow: boolean;
  }
  
  export interface GamesResult {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: Rating[];
    ratings_count: number;
    reviews_text_count: number;
    added: number;
    added_by_status: Addedbystatus;
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string;
    user_game?: any;
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    platforms: Platform2[];
    parent_platforms: Parentplatform[];
    genres: GamesGenre[];
    stores: Store2[];
    clip?: any;
    tags: Tag[];
    esrb_rating: Platform3;
    short_screenshots: GamesShortscreenshot[];
  }
  
  export interface GamesShortscreenshot {
    id: number;
    image: string;
  }
  
  export interface GamesTag {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
  }
  
  export interface GamesStore2 {
    id: number;
    store: Store;
  }
  
  export interface GamesStore {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
  }
  
  export interface GamesGenre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }
  
  export interface GamesParentplatform {
    platform: Platform3;
  }
  
  export interface GamesPlatform3 {
    id: number;
    name: string;
    slug: string;
  }
  
  export interface GamesPlatform2 {
    platform: Platform;
    released_at?: string | string;
    requirements_en?: GamesRequirementsen | GamesRequirementsen2 | GamesRequirementsen3 | null | null;
    requirements_ru?: (GamesRequirementsen | null)[];
  }
  
  export interface GamesRequirementsen3 {
    minimum: string;
    recommended?: string;
  }
  
  export interface GamesRequirementsen2 {
    minimum: string;
  }
  
  export interface GamesRequirementsen {
    minimum: string;
    recommended: string;
  }
  
  export interface GamesPlatform {
    id: number;
    name: string;
    slug: string;
    image?: any;
    year_end?: any;
    year_start?: (null | number)[];
    games_count: number;
    image_background: string;
  }
  
  export interface GamesAddedbystatus {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  }
  
  export interface GamesRating {
    id: number;
    title: string;
    count: number;
    percent: number;
  }