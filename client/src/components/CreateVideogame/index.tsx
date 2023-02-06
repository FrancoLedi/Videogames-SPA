import { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom'
import { createVideogame, getGenres } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Home from '../../img/Home.png';
import Gameboy from '../../img/Gameboy.png';
import '../../index.css'
import { GameDetail, StoreState } from "../../Types";
import Axios from 'axios';

const CreateVideogame = () => {
    useEffect( () => {
        dispatch(getGenres());
    }, []);
    const dispatch = useDispatch()
    const genres = useSelector( (state: StoreState) => state.genres )

    const [input, setInput] = useState<GameDetail>({
        name: "", 
        img: "",
        description: "", 
        released: "", 
        rating: 0, 
        platforms: [], 
        createdInDb: true, 
        genres: []
    })

    const[loading, setLoading] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleGenres(value: string) {

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

    function handlePlatforms(value: string) {
        
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

    const validate = (input: GameDetail) => {
        
        let errors: string[] = [];

        if (!input.name) {
            errors.push('Game name is required');
        }
        
        if (!input.description) {
            errors.push('Description is required');
        } 

        if (input.genres.length < 1) {
            errors.push('At less 1 genre is required');
        } 

        if (input.platforms.length < 1) {
            errors.push('At less 1 platform is required');
        } 
        return errors;
    }
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let errors = validate(input)
        if (errors.length) {
            return alert(errors.join('\n'));
        }
        
        dispatch(createVideogame(input))
        alert("Juego creado")
    }
    
     const uploadImage = (files: FileList ) => {
         const formData = new FormData()
        
          formData.append("file", files[0])
          formData.append("upload_preset","VideogamesCloud")
          setLoading(true)
      
          Axios.post("https://api.cloudinary.com/v1_1/eledeledi/image/upload", formData).then(response => {
            console.log(response.data.secure_url);
          setInput({
           ...input,
           img: response.data.secure_url
          })
        })
        
          setLoading(false)
     
     
      }


    return (
        <div className='BackgroundImage'>
            <div className='BackgroundBlur'>
                    <form className='Form' onSubmit={(e) => handleSubmit(e)}>
                            <div className='aux'>

                                <div className='HomeContainer'>
                                    <Link className='HomeButton' to= '/home'><img className="HomeIcon" src={Home} /></Link>
                                </div>

                                <div>
                                    <h1 className='AddTitle'>¡Add new game!</h1>
                                </div>
                        

                            <div className='InputContainer'>
                                <label>*Name</label>
                                <input
                                    type = 'text'
                                    value = {input.name}
                                    name = 'name'
                                    onChange={(e) => handleChange(e)}
                                    
                                />
                            </div>

                            <div className='InputContainer'>
                                <label>Description</label>
                                <textarea
                                    // type = 'text'
                                    value = {input.description}
                                    name = 'description'
                                    onChange={(e) => handleChange(e)}
                                    
                                />
                            </div>
                     
                            <div className='InputContainer'>
                                <label>Image</label>
                                <input
                                    
                                    id="jpg"
                                    type="file"
                                    onChange={(e)=>{uploadImage(e.target.files!)}}
                                />
                            </div>

                            <div className='InputContainer'>
                                <label>Released</label> 
                                <input
                                    type = "date"
                                    value = {input.released}
                                    name = 'released'
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>

                            
                            
                            <div className='InputContainer'>
                                <label>Rating</label> 
                                <input
                                    id=''
                                    type = "number"
                                    min = "0" 
                                    max = "5" 
                                    value = {input.rating} 
                                    name = 'rating'
                                    step=".01"
                                    onChange={(e) => handleChange(e)}
                                />
                                </div>
                            

                            <div className='PlatformsGenres'>
                                <label>
                                    <strong>Platforms:</strong>
                                </label> 
                                
                                    <div className='CheckboxContainer'>
                                        <div onClick={(e) => handlePlatforms('PC')} className={input.platforms.find(p => p === 'PC') ? 'ActiveCheckbox' : 'Checkbox'}>PC</div>
                                        <div onClick={(e) => handlePlatforms('iOS')} className={input.platforms.find(p => p === 'iOS') ? 'ActiveCheckbox' : 'Checkbox'}>iOS</div>
                                        <div onClick={(e) => handlePlatforms('Android')} className={input.platforms.find(p => p === 'Android') ? 'ActiveCheckbox' : 'Checkbox'}>Android</div>
                                        <div onClick={(e) => handlePlatforms('macOS')} className={input.platforms.find(p => p === 'macOS') ? 'ActiveCheckbox' : 'Checkbox'}>macOS</div>
                                        <div onClick={(e) => handlePlatforms('Playstation 4')} className={input.platforms.find(p => p === 'Playstation 4') ? 'ActiveCheckbox' : 'Checkbox'}>Playstation 4</div>
                                        <div onClick={(e) => handlePlatforms('Playstation 5')} className={input.platforms.find(p => p === 'Playstation 5') ? 'ActiveCheckbox' : 'Checkbox'}>Playstation 5</div>
                                        <div onClick={(e) => handlePlatforms('XBOX')} className={input.platforms.find(p => p === 'XBOX') ? 'ActiveCheckbox' : 'Checkbox'}>XBOX</div>
                                        <div onClick={(e) => handlePlatforms('PS Vita')} className={input.platforms.find(p => p === 'PS Vita') ? 'ActiveCheckbox' : 'Checkbox'}>PS Vita</div>
                                    </div>
                            </div>

                            <div className='PlatformsGenres'>
                                <label>
                                    <strong>Genres:</strong>
                                </label> 
                                
                                    <div className='CheckboxContainer'>
                                    {genres.map(el => (
                                        <div onClick={(e) => handleGenres(`${el.name}`)} className={input.genres.find(p => p === `${el.name}`) ? 'ActiveCheckbox' : 'Checkbox'}>{el.name}</div>)
                                    )}
                            
                                    </div>
                            </div>

                        
                                <div className='aux2'>
                                    <button className='PinkButton AddButton' type='submit'><img className="SelectIcon" src={Gameboy} />Add</button>
                                </div>
                            </div>
                            
                    </form>
            
                </div>
                    
        </div>
    )
}

export default CreateVideogame;