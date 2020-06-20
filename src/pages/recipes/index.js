import React, { useState, useEffect } from 'react';

import * as S from './styles';
import RecipeCard from '../../components/RecipeCard';
import data from '../../data';

const Recipes = () => {
  const [RecipeCards, setRecipeCards] = useState([]);

  React.useEffect(() => {
    setRecipeCards(data);
  }, []);

  return (  
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
  );
};

export default Recipes;