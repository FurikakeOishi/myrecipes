import React from 'react';

//import components
import Navbar from './components/Navbar'
import PostList from './components/PostList';

//import style
import './style//Recipes.css';

const Recipes=()=> {
  return (
    <div >
      <Navbar/>
      <PostList/>
    </div>
  )
}

export default Recipes;
