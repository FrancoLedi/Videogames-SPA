import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Reducer'
import thunk from 'redux-thunk'


declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  
  const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store