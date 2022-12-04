import  React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getAllVideogames, getGenres } from '../../redux/Actions';
import VideogameCard from '../VideogameCard';
import Filters from '../Filters';
import Paginado from '../Paginado';
import SearchBar from '../SearchBar';
import { Link } from 'react-router-dom';
import s from './Home.module.css'

 const Home = (props) => {

    let dispatch = useDispatch();
    const videogames = useSelector( (state) => state.videogames);

    const  [refresh, setRefresh] = useState('');
    const  [currentPage, setCurrentPage] = useState(1);
    const  [videogamesPerPage, setVideogamesPerPage] = useState(15);
    const  indexOfLastVideogame = currentPage * videogamesPerPage;
    const  indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
    const  currentVideogames = videogames.slice(indexOfFirstVideogame,indexOfLastVideogame);
    
    const refreshComponent = (msg) => {
        setRefresh(msg)
    }

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect( () => {
        dispatch(getGenres());
        dispatch(getAllVideogames());
    }, []);

    
    // DESPUES TENGO QUE AGREGAR UN LINK EN CADA <VideogameCard> QUE ME LLEVE AL DETAIL

    return (
        <div class={s.container}>
            <div class={s.son1}>
            <Link to= '/videogames/create'>Create new game</Link>
            <h1>Games:</h1>
            <Filters paginado={paginado} refreshComponent={refreshComponent}></Filters>
            <Paginado videogamesPerPage={videogamesPerPage} videogames={videogames.length} paginado={paginado} />
            <SearchBar></SearchBar>
            </div>
            <div class={s.son2}>
            {currentVideogames.length > 0 ? (currentVideogames.map((game) => {
                
                return ( <Link class={s.a} key={game.id} to= {'/videogame/' + game.id}>
                    <VideogameCard
                    key={game.id}
                    id={game.id}
                    name={game.name}
                    img={game.img}
                    genres={game.genres.map( g => g )} /> </Link>)
            })) : <h1>No hay juegos</h1>}
            </div>
        </div>
    );
};

export default Home;
/*

        <p>{JSON.stringify(videogames)}</p>
*/