import React from 'react';
import logo from '../../assets/logo.png'

const Header = () => {
  return (


    <header>
      <div className="header">
        <a href="/"><img src={logo} alt="Foodfy logo" /></a>
        <div className="links">
          <a href="/about">Sobre</a>
          <a href="/recipes">Receitas</a>
        </div>
      </div>

    </header>
  );
};


export default Header;



