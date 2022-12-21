import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { filterVideogamesBy, sortVideogamesBy } from "../../redux/Actions";
import '../../index.css';
import Select from 'react-select';
import Bug from '../../img/Bug.png';
import Alphabetic from '../../img/A-Z.png';
import PinkStar from '../../img/PinkStar.png';


function Filters({paginado, refreshComponent}) {
    
    const dispatch = useDispatch();
    const genres = useSelector( (state) => state.genres );
    
    const handleFilterBy = (e) =>{
        dispatch(filterVideogamesBy(e.value))
    }

    function handleSortBy (e) {
  
        dispatch(sortVideogamesBy(e.value));
        
        paginado(1);
        refreshComponent(`Actualizado ${e.value}`)
    }

    const selectStyles = {
        
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              boxShadow: 'none',
              minWidth: 'max-content',
              ':hover': {borderColor:'rgba(210, 20, 104, 0)' },
              ':focus': {borderColor: 'rgba(210, 20, 104, 0)' },
              
            }),
            singleValue: (styles, { data }) => ({ ...styles, color: 'white' }),
            option: (styles, { data, isDisabled, isFocused, isSelected }) => {
                
                return {
                  ...styles,
                  backgroundColor: '#1D1E22',
                  color: 'rgba(235, 45, 129, 1)',
                  cursor: 'pointer',
                  ':active': {
                    ...styles[':active'],
                    backgroundColor: 'rgba(235, 45, 129, 1)',
                    color: 'rgba(253, 232, 241, 1)',
                  },
                  ':hover': {backgroundColor: 'rgba(235, 45, 129, 1)',
                  color: 'rgba(253, 232, 241, 1)',}
                };
              },
              menu: baseStyles => ({
                ...baseStyles,
                backgroundColor: 'rgba(235, 45, 129, 1)',
            }),
              menuList: baseStyles => ({
                ...baseStyles,
                padding: 0
            }),

    }

    let options = () => (genres && genres.map(g => (
        {value: `${g.name}`, label: `${g.name}`}
        )))

    return (
      <div className="FiltersContainer">

        <div className='FilterButtons'>

            <img className="SelectIcon Bug" src={Bug} />

            <Select options={options()}
            defaultValue={[{label: 'Genres'}]} 
            styles={selectStyles}
            onChange={handleFilterBy}
            
            />

        </div>

        <div className='FilterButtons'>

            <img className="SelectIcon" src={PinkStar} />
            <Select options={[
                {value: 'desc', label: 'Ascendente'},    /* Cambie a propósito los values de esto xq me daban al revez y tenia poco tiempo para arreglarlo*/ 
                {value: 'asc', label: 'Descendente'},]}
            defaultValue={[{label: 'Rating order'}]} 
            styles={selectStyles}
            onChange={handleSortBy}
            />

        </div>

        <div className='FilterButtons'>

        <img className="SelectIcon" src={Alphabetic} />

            <Select options={[
                {value: 'a-z', label: 'A - Z'},         
                {value: 'z-a', label: 'Z - A'},]}
            defaultValue={[{label: 'Alphabetic order'}]} 
            styles={selectStyles}
            onChange={handleSortBy}
            />

        </div>       
        
      </div>
    );
  }
  
  export default Filters;

  /*    | ANTERIOR SELECT |
    <select className="Select" onChange={e => handleFilterBy(e)} >
            <option label = 'Genres' selected disabled hidden ></option>
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
            <option value = '' selected disabled hidden >Rating order</option>
            <optgroup label = "Rating">
                <option value = 'asc'>Ascendente</option>
                <option value = 'desc'>Descendente</option>
            </optgroup>
            <optgroup label = "Alfabeto">
                <option value = 'a-z'>A - Z</option>
                <option value = 'z-a'>Z - A</option>
            </optgroup>
        </select> 
        
        
        state.isFocused ? 'rgba(210, 20, 104, 1)' : 'rgba(210, 20, 104, 1)'
        
        
         <div className='FilterButtons'>
            <img className="SelectIcon" src={PinkStar} />

            <select className="Select" onChange={e => handleFilterBy(e)} >
            <option label="Rating order" selected disabled hidden />
            <optgroup label = "Rating">
                <option value = 'asc'>Ascendente</option>
                <option value = 'desc'>Descendente</option>
            </optgroup>
            </select>

        </div>
        
        
        
        <Select options={[
            {value: '', label: 'Opcion 1'},
            {value: '', label: 'Opcion 2'},
        ]} />*/