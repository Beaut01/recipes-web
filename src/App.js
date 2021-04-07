import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Main } from './pages/Main'
import { About } from './pages/About'
import { Recipe } from './pages/Recipe'
import { AddRecipe } from './pages/AddRecipe'
import { Navbar } from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Main} path='/' exact/>
        <Route component={About} path='/about'/>
        <Route component={Recipe} path='/recipe/:id' />
        <Route component={AddRecipe} path='/add'/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;