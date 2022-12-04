import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { getGame } from '../../redux/Actions';

export default function SearchBar() {
    let dispatch = useDispatch();
  const [name, setName] = useState("");
  
  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  
  function HandleSubmit(e) {
    e.preventDefault();
    dispatch(getGame(name));
    setName("")
  }

  return (
  <div>
    <div>
      <input onChange={(e) => handleInputChange(e)} type="text" placeholder='Buscar un juego' value={name}/>
      <button type='submit' onClick={(e) => HandleSubmit(e)}>Buscar</button>
    </div>
  </div> )
};