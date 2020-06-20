import React, { useEffect, useState } from 'react';

import * as S from './styles';
import RecipeCard from '../../components/RecipeCard';
import chef from '../../assets/chef.png';
import imageBundle from '../../utils/imageBundle';



const RECIPE_CARDS_MOCKS = [
  {
    recipeImage: imageBundle.asinhas,
    recipeTitle: "Asinhas de Frango",
    recipeBy: "HEHE XD"
  },
  {
    recipeImage: imageBundle.burger,
    recipeTitle: "Burger de Banco",
    recipeBy: "HEHE XD"
  },
  {
    recipeImage: imageBundle.doce,
    recipeTitle: "Doces Pão do Céu",
    recipeBy: "HEHE XD"
  },
  {
    recipeImage: imageBundle.espaguete,
    recipeTitle: "Espaguete com Alho",
    recipeBy: "HEHE XD"
  },
  {
    recipeImage: imageBundle.lasanha,
    recipeTitle: "Lasanha 4 Queijos",
    recipeBy: "HEHE XD"
  },
  {
    recipeImage: imageBundle.pizza,
    recipeTitle: "Pizza 4 Estações",
    recipeBy: "HEHE XD"
  },
];


const Home = () => {

  const [RecipeCards, setRecipeCards] = useState([]);

  React.useEffect(() => {
    setRecipeCards(RECIPE_CARDS_MOCKS);
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
