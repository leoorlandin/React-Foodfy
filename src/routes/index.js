import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Recipes from '../pages/recipes';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about"  component={About} />
      <Route path="/recipes"  component={Recipes} />
    </Switch>
  );
};