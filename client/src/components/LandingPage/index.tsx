import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Delorean from '../../img/Delorean.mp4';
import StartIconLight from '../../img/StartIconLight.png';
import StartIconDark from '../../img/StartIconDark.png';
import '../../index.css';

export default function LandingPage(){
    const [isHover, setIsHover] = useState(false);
    return (
        <>
        <div className='letter'>
            <h1 className='Title'>¡Welcome gamers!</h1>
            <Link to = '/home'>
                <button className='StartButton' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                    {
                        isHover ? 
                        <img className='Start' src={StartIconDark} />
                     :  <img className='Start' src={StartIconLight} />
                    }
                    Press Start
                </button>
            </Link>
        </div>

            <div className='VideoContainer'>
                <video loop autoPlay muted>
                    <source src={Delorean} type="video/mp4" />
                </video>
            </div>
        </>
    )
}

