import React from 'react';
import Presentation from '../../components/Presentation'
import RecipeList from '../../components/RecipeList'


const Home = () => {
  return (
    <div>
      <Presentation />
      <h1 className="section-title">Mais acessadas</h1>
      <RecipeList />
    </div>
  );
}

export default Home;
