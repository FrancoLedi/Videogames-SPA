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
              cursor: 'pointer',
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