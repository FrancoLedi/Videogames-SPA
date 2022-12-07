import React from 'react';
import '../../index.css';
import starIcon from '../../img/StarIcon.png'

export default function VideogameCard(props){
    
    return (
        <div className='Card'>
            <h3>{props.name}</h3>

                <div className='Img-Genre'>
                    <img className='CardImage' src={props.img} alt = 'not found'></img>
                    
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

/*
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 8px;
gap: 10px;

width: 112px;
height: 35px;

background: #17020C;
mix-blend-mode: normal;
border: 1px solid rgba(235, 45, 129, 0.5);
box-shadow: 0px 0px 15px 3px rgba(210, 20, 104, 0.35);
backdrop-filter: blur(5px);


border-radius: 10px;


<div className='genres'>{props.genres.join(', ')}</div>

*/