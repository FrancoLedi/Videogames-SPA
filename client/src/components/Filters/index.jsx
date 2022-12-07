import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { filterVideogamesBy, sortVideogamesBy } from "../../redux/Actions";
import '../../index.css';


function Filters({paginado, refreshComponent}) {
    
    const dispatch = useDispatch();
    const genres = useSelector( (state) => state.genres );
    
    const handleFilterBy = (e) =>{
        dispatch(filterVideogamesBy(e.target.value))
    }

    function handleSortBy (e) {
        e.preventDefault();
        
        dispatch(sortVideogamesBy(e.target.value));
        
        paginado(1);
        refreshComponent(`Actualizado ${e.target.value}`)
    }

    return (
      <>
        <select className="PinkButton" onChange={e => handleFilterBy(e)}>
            <optgroup label = "Conexion">
                <option value = 'all'>Todos</option>
                <option value = 'db'>Creados</option>
                <option value = 'api'>Existentes</option>
            </optgroup>
            <optgroup label = "Géneros">
            {genres && genres.map(g => (
                    <option key={g.id} value={g.name}>{g.name}</option>
                ))}
            </optgroup>
        </select>
        <select className="PinkButton" onChange={e => handleSortBy(e)}>
                
            <optgroup label = "Rating">
                <option value = 'asc'>Ascendente</option>
                <option value = 'desc'>Descendente</option>
            </optgroup>
            <optgroup label = "Alfabeto">
                <option value = 'a-z'>A - Z</option>
                <option value = 'z-a'>Z - A</option>
            </optgroup>
        </select>
      </>
    );
  }
  
  export default Filters;