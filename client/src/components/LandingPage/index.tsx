import { Link } from 'react-router-dom';
import '../../index.css';

export default function LandingPage(){
    return (
        <>
        <div className='letter'>
            <h1>¡Welcome gamers!</h1>
            <Link to = '/home'>
                <button className='button'>
                    Press Start
                </button>
            </Link>
        </div>
        </>
    )
}

