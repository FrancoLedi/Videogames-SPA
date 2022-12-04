import React from 'react';
import { Link } from 'react-router-dom';
import s from './LandingPage.module.css'

export default function LandingPage(){
    return (
        <div className={s.container}>
        <div className={s.div}>
            <h1>¡Welcome gamers!</h1>
            <Link to = '/home'>
                <button className = {s.btn}>Press Start</button>
            </Link>
        </div>
        </div>
    )
}

