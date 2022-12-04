import React from 'react';
import s from './VideogameCard.module.css'

export default function VideogameCard(props){
    
    return (
        <div className={s.div}>
            <h3>{props.name}</h3>
            <div className={s.img}>
            <img src={props.img} alt = 'not found'></img>
            </div>
            <p>{props.genres.join(', ')}</p>
        </div>
    )
}