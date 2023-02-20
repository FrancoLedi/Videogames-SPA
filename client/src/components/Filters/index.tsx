import { useSelector, useDispatch } from 'react-redux';
import { filterVideogamesBy, sortVideogamesBy } from "../../redux/Actions";
import '../../index.css';
import Select, { CSSObjectWithLabel } from 'react-select';
import Bug from '../../img/Bug.png';
import Alphabetic from '../../img/A-Z.png';
import PinkStar from '../../img/PinkStar.png';
import { PropsFilter, SelectOption, StoreState } from '../../Types';



const Filters: React.FunctionComponent<PropsFilter> = ({paginado, refreshComponent}) => {
    
  const dispatch = useDispatch();
  const genres = useSelector( (state: StoreState) => state.genres );
  
  const handleFilterBy = (option: string) =>{
      dispatch(filterVideogamesBy(option))
  }

    function handleSortBy (option: SelectOption) {
        
        dispatch(sortVideogamesBy(option.value));
        
        paginado(1);
        refreshComponent(`Actualizado ${option.value}`)
    }

    const selectStyles = {
        
            control: (baseStyles: CSSObjectWithLabel, state: unknown) => ({
              ...baseStyles,
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              boxShadow: 'none',
              minWidth: 'max-content',
              cursor: 'pointer',
              ':hover': {borderColor:'rgba(210, 20, 104, 0)' },
              ':focus': {borderColor: 'rgba(210, 20, 104, 0)' },
              
            }),
            singleValue: (styles: CSSObjectWithLabel) => ({ ...styles, color: 'white' }),
            option: (styles: CSSObjectWithLabel) => {
                
                return {
                  ...styles,
                  backgroundColor: '#1D1E22',
                  color: 'rgba(235, 45, 129, 1)',
                  cursor: 'pointer',
                  ':active': {
                    backgroundColor: 'rgba(235, 45, 129, 1)',
                    color: 'rgba(253, 232, 241, 1)',
                  },
                  ':hover': {backgroundColor: 'rgba(235, 45, 129, 1)',
                  color: 'rgba(253, 232, 241, 1)',}
                };
              },
              menu: (baseStyles: CSSObjectWithLabel) => ({
                ...baseStyles,
                backgroundColor: 'rgba(235, 45, 129, 1)',
            }),
              menuList: (baseStyles: CSSObjectWithLabel) => ({
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
            onChange={(value) => handleFilterBy(value!.label)}
            
            />

        </div>

        <div className='FilterButtons'>

            <img className="SelectIcon" src={PinkStar} />
            <Select options={[
                {value: 'desc', label: 'Ascendente'},  
                {value: 'asc', label: 'Descendente'},]}
            defaultValue={[{label: 'Rating order'}]} 
            styles={selectStyles}
            onChange={(value) => handleSortBy(value)}
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