import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getAllVideogames, getGenres } from '../../redux/Actions';
import VideogameCard from '../VideogameCard';
import Filters from '../Filters';
import Paginado from '../Paginado';
import SearchBar from '../SearchBar';
import { Link } from 'react-router-dom';
import AddIcon from '../../img/Add.png';
import '../../index.css';
import { StoreState } from '../../Types';

 const Home = () => {

    let dispatch = useDispatch();
    const videogames = useSelector( (state: StoreState) => state.videogames);

    const  [refresh, setRefresh] = useState('');
    const  [currentPage, setCurrentPage] = useState(1);
    const  [videogamesPerPage, setVideogamesPerPage] = useState(15);
    const  indexOfLastVideogame = currentPage * videogamesPerPage;
    const  indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
    const  currentVideogames = videogames.slice(indexOfFirstVideogame,indexOfLastVideogame);
    
    const refreshComponent = (msg: string) => {
        setRefresh(msg)
    }

    const paginado = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    useEffect( () => {
        dispatch(getGenres());
        dispatch(getAllVideogames());
    }, []);

    

    return (
        <>
            <div className='navbar'>
                <div className='CreateGame'>
                    <Link className='Addlink' to= '/videogames/create'><span className='span'>¡Add new<br></br>game!</span><img className='AddIcon' src={AddIcon} /></Link>
                </div>
                <Filters paginado={paginado} refreshComponent={refreshComponent}></Filters>
                <SearchBar></SearchBar>
            </div>
            
                <div className='Home'>
            
                    <div className='CardContainer'>
                    {currentVideogames.length > 0 ? (currentVideogames.map((game) => {
                        
                        return ( 
                            <VideogameCard
                            key={game.id}
                            id={game.id}
                            name={game.name}
                            img={game.img}
                            genres={game.genres.map( g => g )} 
                            rating={game.rating}
                            /> )
                    })) : <h1>No hay juegos</h1>}

                    <div className='Paginado'>
                        <Paginado videogamesPerPage={videogamesPerPage} videogames={videogames.length} paginado={paginado} />
                    </div>

                </div>

                </div>
                
        </>
    );
};

export default Home;
