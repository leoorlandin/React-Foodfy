import React from 'react';
import RecipeList from '../../components/RecipeList'


import chef from '../../assets/chef.png'
import * as S from './styles'


const Home = () => {
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

      <RecipeList />
    </>
  );
}

export default Home;
