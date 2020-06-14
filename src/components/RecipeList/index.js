import React from 'react';
import imageBundle from '../../utils/imageBundle';

const RecipeList = () => {
  return (
    <div className="recipe-container">

      <div className="recipes-list">

        <div className="recipe-item">
          <img src={imageBundle.asinhas} alt="imagem da receita" />
          <h2>Asinha</h2>
          <h2>receita por Nome do chef</h2>
        </div>

        <div className="recipe-item">
          <img src={imageBundle.burger} alt="imagem da receita" />
          <h2>Burguer</h2>
          <h2>receita por Nome do chef</h2>
        </div>

        <div className="recipe-item">
          <img src={imageBundle.doce} alt="imagem da receita" />
          <h2>Doce</h2>
          <h2>receita por Nome do chef</h2>
        </div>

        <div className="recipe-item">
          <img src={imageBundle.espaguete} alt="imagem da receita" />
          <h2>Espaguete</h2>
          <h2>receita por Nome do chef</h2>
        </div>

        <div className="recipe-item">
          <img src={imageBundle.lasanha} alt="imagem da receita" />
          <h2>Lasanha</h2>
          <h2>receita por Nome do chef</h2>
        </div>

        <div className="recipe-item">
          <img src={imageBundle.pizza} alt="imagem da receita" />
          <h2>Pizza</h2>
          <h2>receita por Nome do chef</h2>
        </div>

      </div>
    </div>
  );
};

export default RecipeList;