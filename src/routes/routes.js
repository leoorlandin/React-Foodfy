import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home/index'
import About from '../pages/about/index'
import Recipes from '../pages/recipes/index'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/recipes" exact component={Recipes} />
    </Switch>
  );
};