import '../../index.css';
import starIcon from '../../img/StarIcon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GameDetail, Games } from '../../Types';

export default function VideogameCard(props: Games){
    const [ isHover, setIsHover ] = useState(false);
    
    return (
        <div className='Card'>
            <h3>{props.name}</h3>

                <div className='Img-Genre'>
                    <Link onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className='CardLink' key={props.id} to= {'/videogame/' + props.id}>
                        <img className='CardImage' src={props.img} alt = 'not found'></img>
                        {isHover && (<div className='Blur'>+ Details</div>)}
                    </Link>
                    
                    <div className='Rating'><img className='stars' src={starIcon} alt = 'not found'></img>{props.rating}</div>
            
                    <div className='GenresContainer'>{props.genres.map((genre) => {
                
                        return ( 
                            <div className='Genre'>{genre}</div>
                        )})
                }</div>

            </div>
        </div>
    )
}

/*<Link className='CardLink' key={props.id} to= {'/videogame/' + props.id}>
                        <img className='CardImage' src={props.img} alt = 'not found'></img>
                    </Link> */