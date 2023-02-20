import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import components
import Home from './components/Home';
import Recipes from './Recipes';

//import style
import './style//App.css';

const App=()=> {
  return (
    <Router>
      <Routes>
          <Route path='/' exact element={<Home/>} >
            </Route>
          <Route path='/recipes' element={<Recipes/>} >
          </Route>
      </Routes>
    </Router>
  )
}

export default App;
