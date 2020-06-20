import React, { useEffect, useState } from 'react';

import * as S from './styles';
import data from '../../data'

import RecipeCard from '../../components/RecipeCard';
import chef from '../../assets/chef.png';


const Home = () => {

  const [RecipeCards, setRecipeCards] = useState([]);

  React.useEffect(() => {
    setRecipeCards(data);
  }, []);


  return (
    <>
      <S.Presentation>
        <S.PresentationText>
          <h1>As melhores receitas</h1>
          <h2>Aprenda a construir os melhores pratos com receitas criadas por profissionais do mundo inteiro</h2>
        </S.PresentationText>
        <img src={chef} alt="Ilustração chef" />
      </S.Presentation>

      <h1 className="section-titles">Mais acessadas</h1>

      <S.RecipeList>

        {
          RecipeCards.map(item => (
            <RecipeCard
              recipeImage={item.recipeImage}
              recipeTitle={item.recipeTitle}
              recipeBy={item.recipeBy}
            />
          ))
        }

      </S.RecipeList>

    </>
  );
}

export default Home;
