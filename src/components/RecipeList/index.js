import React from 'react';
import imageBundle from '../../utils/imageBundle';

import * as S from './styles'

const RecipeList = () => {
  return (
    <>

      <S.RecipeList>
        <S.RecipeItem>
          <img src={imageBundle.asinhas} alt="imagem da receita" />
          <h2>Asinha</h2>
          <h2>receita por Nome do chef</h2>
        </S.RecipeItem>

        <S.RecipeItem>
          <img src={imageBundle.burger} alt="imagem da receita" />
          <h2>Asinha</h2>
          <h2>receita por Nome do chef</h2>
        </S.RecipeItem>

        <S.RecipeItem>
          <img src={imageBundle.doce} alt="imagem da receita" />
          <h2>Asinha</h2>
          <h2>receita por Nome do chef</h2>
        </S.RecipeItem>

        <S.RecipeItem>
          <img src={imageBundle.espaguete} alt="imagem da receita" />
          <h2>Asinha</h2>
          <h2>receita por Nome do chef</h2>
        </S.RecipeItem>

        <S.RecipeItem>
          <img src={imageBundle.lasanha} alt="imagem da receita" />
          <h2>Asinha</h2>
          <h2>receita por Nome do chef</h2>
        </S.RecipeItem>

        <S.RecipeItem>
          <img src={imageBundle.pizza} alt="imagem da receita" />
          <h2>Asinha</h2>
          <h2>receita por Nome do chef</h2>
        </S.RecipeItem>
      </S.RecipeList>

    </>
  );
};

export default RecipeList;