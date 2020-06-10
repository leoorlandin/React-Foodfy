import React from 'react';
import chef from './chef.png'

const Presentation = () => {
  return (
    <div className="principal-box">
      <div className="principal-texts">
        <h1>As melhores receitas</h1>
        <h2>Aprenda a construir os melhores pratos com receitas criadas por profissionais do mundo inteiro</h2>
      </div>

      <img src={chef} alt="Ilustração chef" />

    </div>

  );
};

export default Presentation;