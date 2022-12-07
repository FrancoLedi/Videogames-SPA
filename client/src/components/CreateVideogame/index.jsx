import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom'
import { createVideogame, getGenres } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
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

    function handleCheckbox(e) {
        if (e.target.checked){
            setInput({
                ...input,
                platforms: input.platforms.concat(e.target.value)
            })
        }
        else{
            setInput({
                ...input,
                platforms: input.platforms.filter(el => el !== e.target.value)
            })
        }
        
    }

    function handleSelect(e) {
        e.preventDefault()
        if (!input.genres.find(g => g === e.target.value)){
            setInput({
                ...input,
                genres: input.genres.concat(e.target.value)
            })
        }
    }

    function handleDelete(e) {
        
        setInput({
            ...input,
            genres: input.genres.filter( p => p !== e.target.value)
        })
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
        <div class=''>
        <Link to= '/home'>Home</Link>
            <form class='' onSubmit={(e) => handleSubmit(e)}>
                <div class=''>
                    <label>Name</label>
                    <input
                        type = 'text'
                        value = {input.name}
                        name = 'name'
                        onChange={(e) => handleChange(e)}
                        
                    />
                </div>

                <div class=''>
                    <label>Description</label>
                    <textarea
                        type = 'text'
                        value = {input.description}
                        name = 'description'
                        onChange={(e) => handleChange(e)}
                        
                    />
                </div>

                <div class=''>
                    <label>Image</label>
                    <input
                        type = 'text'
                        value = {input.img}
                        name = 'img'
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div class=''>
                    <label>Created at</label> {/* Averiguar como te trae el value este input asi lo handeleamos*/}
                    <input
                        type = "date"
                        value = {input.released}
                        name = 'released'
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div class=''>
                <select id='' onChange={(e) => handleSelect(e)}>
                <optgroup label = "Géneros">
                <option selected disabled hidden>Select an option</option>
                {genres && genres.map(g => (
                    <option key={g.id} value={g.name}>{g.name}</option>
                ))}
                 </optgroup>
                 </select>
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

                <div class=''>
                    <label><strong>Platforms </strong></label> {/* Aca hay que averiguar como trae el value asi vamos a poder 
                                                                                                    controlar como llega el dato a la DB*/}
                     
                        <div class=''>
                            <div>
                                <input name='PC' type="checkbox" value="PC" onChange={(e) => handleCheckbox(e)}/>
                                <label>PC</label>
                            </div>
                            <div>
                                <input name='iOS' type="checkbox" value="iOS" onChange={(e) => handleCheckbox(e)}/>
                                <label>iOS</label>
                            </div>
                            <div>
                                <input name='Android' type="checkbox" value="Android" onChange={(e) => handleCheckbox(e)}/>
                                <label>Android</label>
                            </div>
                            <div>
                                <input name='macOS' type="checkbox" value="macOS" onChange={(e) => handleCheckbox(e)}/>
                                <label>macOS</label>
                            </div>
                            <div>
                                <input name='PlayStation 4' type="checkbox" value="PlayStation 4" onChange={(e) => handleCheckbox(e)}/>
                                <label>PlayStation 4</label>
                            </div>
                            <div>
                                <input name='PlayStation 5' type="checkbox" value="PlayStation 5" onChange={(e) => handleCheckbox(e)}/>
                                <label>PlayStation 5</label>
                            </div>
                            <div>
                                <input name='XBOX' type="checkbox" value="XBOX" onChange={(e) => handleCheckbox(e)}/>
                                <label>XBOX</label>
                            </div>
                            <div>
                                <input name='PS Vita' type="checkbox" value="PS Vita" onChange={(e) => handleCheckbox(e)}/>
                                <label>PS Vita</label>
                            </div>
                        </div>
                </div>

               
                
                    <button class='' type='submit'>Create game</button>
                    
                    
            </form>
            
            
                    
        </div>
    )
}

export default CreateVideogame;

/* 
    
    {input.genres.map(el =>
                    
                    <button class={s.genresBut} key={el} value={el} onClick={(e) => handleDelete(e)}>{el}</button>
                    
                    )}
*/