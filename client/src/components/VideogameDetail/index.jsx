import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/Actions";
import { Link } from "react-router-dom";

export function VideogameDetail(props){

    

    let dispatch = useDispatch()

    useEffect( () => {
        dispatch(getDetail(props.match.params.idVideogame))
    }, [])

    let detail = useSelector(state => state.game)
    
    

    return(
        <div>
        <Link to= '/home'>Home</Link>
            {
                detail.id ? 
                <div>
                    <h1>Name: {detail.name}</h1>
                    <img width='250px' height='250px' src = {detail.img? detail.img: <h3>No image</h3>}></img>
                    <h3>Description: {detail.description}</h3>
                    <h3>Genres: {detail.genres ? detail.genres.map( g => g + (' ')) : detail.Genres.map( g => g.name + (' '))}</h3>
                    <h3>Released: {detail.released}</h3>
                    <h3>Platforms: {typeof detail.id === 'string' ? detail.platforms: detail.platforms.map( p => p + (' '))}</h3>
                    <h3>Rating: {detail.rating}</h3>

                </div>: <h1>Loading...</h1>
            }
        </div>
    )
}

/*
                                                    | ACLARACION |
        
        Para que queden concatenados las paltaformas y los generos de los videojuegos se me ocurre hacer un .join(', ')
*/