
import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipesContainer from './Components/RecipesContainer';
import Home from './Components/Home';


const App: React.FC = () => {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/recipes" component={RecipesContainer}/>
      </Switch>
    </Suspense>
  </Router>
  );
}

export default App;
