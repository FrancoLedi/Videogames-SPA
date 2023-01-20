import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { getGame } from '../../redux/Actions';
import Lupa from '../../img/Lupa.png';

export default function SearchBar() {
    let dispatch = useDispatch();
  const [name, setName] = useState("");
  
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setName(e.target.value);
  }
  
  function HandleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    dispatch(getGame(name));
    setName("")
  }

  return (
    <div className='SearchContainer'>
      <input className='input' onChange={(e) => handleInputChange(e)} type="text" placeholder='Search a game...' value={name}/>
      <button className="PinkButton" type='submit' onClick={(e) => HandleSubmit(e)}><img className='Lupa' src={Lupa} /></button>
    </div>
 )
};