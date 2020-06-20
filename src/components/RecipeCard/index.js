import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const RecipeCard = ({ recipeImage, recipeTitle, recipeBy }) => {
  return (
    <S.RecipeCard>
      <img src={recipeImage} alt="imagem da receita" />
      <h2>{recipeTitle}</h2>
      <h2>receita por {recipeBy}</h2>
    </S.RecipeCard>
  );
};


RecipeCard.propTypes = {
  recipeImage: PropTypes.string.isRequired,
  recipeTitle: PropTypes.string.isRequired,
  recipeBy: PropTypes.string.isRequired
}

export default RecipeCard;