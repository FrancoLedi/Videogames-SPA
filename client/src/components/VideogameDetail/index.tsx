import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, cleanGame } from "../../redux/Actions";
import { Link } from "react-router-dom";
import Home from '../../img/Home.png';
import starIcon from '../../img/StarIcon.png';
import { GameDetail, StoreState } from '../../Types';
import '../../index.css';

export function VideogameDetail(props: GameDetail){

    

    let dispatch = useDispatch()

    useEffect( () => {
        dispatch(getDetail(props.match!.params.idVideogame))
        return () => {
            dispatch(cleanGame())
        }
    }, [])

    let detail = useSelector((state: StoreState) => state.game)
    
    console.log( detail.platforms )

    let platforms = detail.platforms as string[];

    return(
        <div className='VideogameDetail'>

            <div className='BackgroundDetail'>
                <img width='250px' height='250px' src = {detail.img? detail.img: 'No image'} />
            </div>

            <div className='Content'>

                <div className='HomeContainer'>
                    <Link className='HomeButton' to= '/home'><img className="HomeIcon" src={Home} /></Link>
                </div>
                {
                        detail.id ? 
                    <div className='DetailContainer'>

                        <div className='Header'>
                            Game Details
                        </div>

                        <div className='AuxContainer'>

                            <div className='TitleAndDescription'>
                                <h1 className='TitleDetail'>{detail.name}</h1>
                                <span className='description'>{detail.description.replace(/<\/?[^>]+(>|$)/g, ' ').replace(/&#39;/g, '').replace(/&quot;/g, ' ')}</span>
                            </div>

                            <div className='CardDetail'>
                                <div className='ImageShadow'>
                                    <img width='250px' height='250px' src = {detail.img? detail.img: 'No image'} />
                                </div>
                                
                                <span className='Released'>Released date: {detail.released}</span>

                                <div className='Rating'><img className='stars' src={starIcon} alt = 'not found'></img>{detail.rating}</div>

                                <div className="Box">
                                    <span className="Subtitle">Genres</span>
                                    <div className='GenresContainer'>{detail.genres ? detail.genres.map( g => <div className='Genre'>{g}</div> ) : detail.Genres!.map( g => <div className='Genre'>{g.name}</div> )}</div>
                                </div>

                                <div className="Box">
                                    <span className="Subtitle">Platforms</span>
                                    <div className='GenresContainer'>{ platforms.map( p => <div className='Genre'>{p}</div> )}</div>
                                </div>
                                
                                
                            </div>

                        </div>

                    </div>: <div className='Loading'></div>
                }
            </div>

        </div>
    )
}