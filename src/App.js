import React from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import MealContainer from './Componentt/MEAL';
import RecipeContainer from './Componentt/Recipe';

function App() {
  return (
    <BrowserRouter>
   <Routes>
      <Route  path="/" element={<MealContainer/>}/>
      <Route exact path="/:recipeId" element={<RecipeContainer/>}/>
   </Routes>
    </BrowserRouter>
  )
}

export default App;
