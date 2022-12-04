import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
/*
                                            | Registro de entrada 3/7 |

    Ya anduvimos repasando y entendemos de punta a punta el frontend (store --> reducer <-- actions y por otro lado los 
    componentes aparte del app y el index y las hojas de estilo)

    Ahora lo ideal seria empezar con el store, para eso tendriamos que continuar viendo el repaso de sele q es la mas cercana
    a lo q me toco hacer xq el de lamela sirve de manera conceptual pero no de guia para armar el mio porque el hace CRUD

    Es decir guiarnos por el CP q hicimos y el repaso de sele, tambien esta el video repaso de henry students que cerramos
    anoche (a modo conceptual junto con el de lamela).
    Para casos puntuales que necesite (tal vez mas que nada en hooks) tengo el repo del M2.

    ~ Anotacion:
        Lamela hace las cosas un poquito diferente y con PROMESAS (este dato puede ser util mas adelante)
*/