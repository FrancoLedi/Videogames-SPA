import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import CreateVideogame from './components/CreateVideogame';
import { VideogameDetail } from './components/VideogameDetail';

function App() {
  return (
    <div className="App">
    <Route exact path = '/videogame/:idVideogame' component={VideogameDetail}/>
    <Route exact path = '/videogames/create' component={CreateVideogame}/>
    <Route exact path='/home' component={Home}/>
    <Route exact path='/' component={LandingPage}/>
    </div>
  );
}

export default App;
/*
    <Route path='/' component={Nav}/>
    
    <Route path="/about">
        <About />
      </Route>
    
      
    
*/