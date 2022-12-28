import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/Actions";
import { Link } from "react-router-dom";
import Home from '../../img/Home.png';
import starIcon from '../../img/StarIcon.png';
import '../../index.css';

export function VideogameDetail(props){

    

    let dispatch = useDispatch()

    useEffect( () => {
        dispatch(getDetail(props.match.params.idVideogame))
    }, [])

    let detail = useSelector(state => state.game)
    
    

    return(
        <div class='VideogameDetail'>

            <div class='BackgroundDetail'>
                <img width='250px' height='250px' src = {detail.img? detail.img: <h3>No image</h3>} />
            </div>

            <div class='Content'>

                <div class='HomeContainer'>
                    <Link class='HomeButton' to= '/home'><img className="HomeIcon" src={Home} /></Link>
                </div>
                {
                        detail.id ? 
                    <div class='DetailContainer'>

                        <div class='Header'>
                            Game Details
                        </div>

                        <div class='AuxContainer'>

                            <div class='TitleAndDescription'>
                                <h1 class='TitleDetail'>{detail.name}</h1>
                                <span class='description'>{detail.description.replace(/<\/?[^>]+(>|$)/g, ' ')}</span>
                            </div>

                            <div class='CardDetail'>
                                <div class='ImageShadow'>
                                    <img width='250px' height='250px' src = {detail.img? detail.img: <h3>No image</h3>} />
                                </div>
                                
                                <span class='Released'>Released date: {detail.released}</span>

                                <div className='Rating'><img className='stars' src={starIcon} alt = 'not found'></img>{detail.rating}</div>

                                <div class='GenresContainer'>{detail.genres ? detail.genres.map( g => <div class='Genre'>{g}</div> ) : detail.Genres.map( g => <div class='Genre'>{g.name}</div> )}</div>
                                
                                {/*<span>{typeof detail.id === 'string' ? detail.platforms: detail.platforms.map( p => p + (' '))}</span>*/}
                                
                            </div>

                        </div>

                    </div>: <h1>Loading...</h1>
                }
            </div>

        </div>
    )
}

/*
                                                    | ACLARACION |
        
        Para que queden concatenados las paltaformas y los generos de los videojuegos se me ocurre hacer un .join(', ')

        | Anterior versión |

    <div class='BackgroundBlurDetail'>
                <Link to= '/home'>Home</Link>
                    {
                        detail.id ? 
                        <div class='CardDetail'>
                            <h1>{detail.name}</h1>
                            <img width='250px' height='250px' src = {detail.img? detail.img: <h3>No image</h3>} />
                            <h3>{detail.description}</h3>
                            <h3>Genres: {detail.genres ? detail.genres.map( g => g + (' ')) : detail.Genres.map( g => g.name + (' '))}</h3>
                            <h3>Released date: {detail.released}</h3>
                            <h3>Platforms: {typeof detail.id === 'string' ? detail.platforms: detail.platforms.map( p => p + (' '))}</h3>
                            <h3>{detail.rating}</h3>

                        </div>: <h1>Loading...</h1>
                    }
            </div>
        </div>
*/