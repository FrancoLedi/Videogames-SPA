import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom'
import { createVideogame, getGenres } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Home from '../../img/Home.png';
import Gameboy from '../../img/Gameboy.png';
import '../../index.css'

const CreateVideogame = () => {
    useEffect( () => {
        dispatch(getGenres());
    }, []);
    const dispatch = useDispatch()
    const genres = useSelector( (state) => state.genres )

    const [input, setInput] = useState({
        name: "", 
        img: "",
        description: "", 
        released: "", 
        rating: 0, 
        platforms: [], 
        createdInDb: true, 
        genres: []
    })


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleGenres(value) {

        if (!input.genres.find( p => p === value )){

            setInput({
                ...input,
                genres: input.genres.concat(value)
            })
            
        }
        else{
            
            setInput({
                ...input,
                genres: input.genres.filter(el => el !== value)
            })
        
        }
    }

    function handlePlatforms(value) {
        
        if (!input.platforms.find( p => p === value )){

            setInput({
                ...input,
                platforms: input.platforms.concat(value)
            })
            
        }
        else{
            
            setInput({
                ...input,
                platforms: input.platforms.filter(el => el !== value)
            })
        
        }
    }

    const validate = (input) => {
        let errors = {};
        if (!input.name) {
            errors.name = 'Game name is required';
        }
        
        if (!input.description) {
            errors.description = 'Description is required';
        } 

        if (input.genres.length < 1) {
            errors.genres = 'At less 1 genre is required';
        } 

        if (input.platforms.length < 1) {
            errors.platforms = 'At less 1 platform is required';
        } 
        return errors;
    }

    function handleSubmit(e) {
        e.preventDefault();
        let errors = validate(input)
        if (Object.values(errors).length) {
            return alert(Object.values(errors).join('\n'));
        }
        dispatch(createVideogame(input))
        alert("Juego creado")
    }
    
    return (
        <div class='BackgroundImage'>
            <div class='BackgroundBlur'>
                    <form class='Form' onSubmit={(e) => handleSubmit(e)}>
                            <div class='aux'>

                                <div class='HomeContainer'>
                                    <Link class='HomeButton' to= '/home'><img className="HomeIcon" src={Home} /></Link>
                                </div>

                                <div>
                                    <h1 class='AddTitle'>¡Add new game!</h1>
                                </div>
                        

                            <div class='InputContainer'>
                                <label>*Name</label>
                                <input
                                    type = 'text'
                                    value = {input.name}
                                    name = 'name'
                                    onChange={(e) => handleChange(e)}
                                    
                                />
                            </div>

                            <div class='InputContainer'>
                                <label>Description</label>
                                <textarea
                                    type = 'text'
                                    value = {input.description}
                                    name = 'description'
                                    onChange={(e) => handleChange(e)}
                                    
                                />
                            </div>

                            <div class='InputContainer'>
                                <label>Image</label>
                                <input
                                    type = 'text'
                                    value = {input.img}
                                    name = 'img'
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>

                            <div class='InputContainer'>
                                <label>Released</label> 
                                <input
                                    type = "date"
                                    value = {input.released}
                                    name = 'released'
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>

                            
                            
                            <div class='InputContainer'>
                                <label>Rating</label> 
                                <input
                                    id=''
                                    type = "number"
                                    min = "0" 
                                    max = "5" 
                                    value = {input.rating} 
                                    name = 'rating'
                                    onChange={(e) => handleChange(e)}
                                />
                                </div>
                            

                            <div class='PlatformsGenres'>
                                <label>
                                    <strong>Platforms:</strong>
                                </label> 
                                
                                    <div class='CheckboxContainer'>
                                        <div onClick={(e) => handlePlatforms('PC')} class={input.platforms.find(p => p === 'PC') ? 'ActiveCheckbox' : 'Checkbox'}>PC</div>
                                        <div onClick={(e) => handlePlatforms('iOS')} class={input.platforms.find(p => p === 'iOS') ? 'ActiveCheckbox' : 'Checkbox'}>iOS</div>
                                        <div onClick={(e) => handlePlatforms('Android')} class={input.platforms.find(p => p === 'Android') ? 'ActiveCheckbox' : 'Checkbox'}>Android</div>
                                        <div onClick={(e) => handlePlatforms('macOS')} class={input.platforms.find(p => p === 'macOS') ? 'ActiveCheckbox' : 'Checkbox'}>macOS</div>
                                        <div onClick={(e) => handlePlatforms('Playstation 4')} class={input.platforms.find(p => p === 'Playstation 4') ? 'ActiveCheckbox' : 'Checkbox'}>Playstation 4</div>
                                        <div onClick={(e) => handlePlatforms('Playstation 5')} class={input.platforms.find(p => p === 'Playstation 5') ? 'ActiveCheckbox' : 'Checkbox'}>Playstation 5</div>
                                        <div onClick={(e) => handlePlatforms('XBOX')} class={input.platforms.find(p => p === 'XBOX') ? 'ActiveCheckbox' : 'Checkbox'}>XBOX</div>
                                        <div onClick={(e) => handlePlatforms('PS Vita')} class={input.platforms.find(p => p === 'PS Vita') ? 'ActiveCheckbox' : 'Checkbox'}>PS Vita</div>
                                    </div>
                            </div>

                            <div class='PlatformsGenres'>
                                <label>
                                    <strong>Genres:</strong>
                                </label> 
                                
                                    <div class='CheckboxContainer'>
                                    {genres.map(el => (
                                        <div onClick={(e) => handleGenres(`${el.name}`)} class={input.genres.find(p => p === `${el.name}`) ? 'ActiveCheckbox' : 'Checkbox'}>{el.name}</div>)
                                    )}
                            
                                    </div>
                            </div>

                        
                                <div class='aux2'>
                                    <button class='PinkButton AddButton' type='submit'><img className="SelectIcon" src={Gameboy} />Add</button>
                                </div>
                            </div>
                            
                    </form>
            
                </div>
                    
        </div>
    )
}

export default CreateVideogame;