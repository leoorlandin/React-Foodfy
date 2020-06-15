import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home/index'
import About from '../pages/about/index'
import Recipes from '../pages/recipes/index'
import Header from '../components/Header'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about"  component={About} />
      <Route path="/recipes"  component={Recipes} />
      <Route path="/teste"  component={Header} />
    </Switch>
  );
};