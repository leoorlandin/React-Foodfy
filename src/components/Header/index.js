import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Header = () => {
  return (


    <header>
      <div className="header">
        <Link to="/"><img src={logo} alt="Foodfy logo" /></Link>
        <div className="links">
          <Link to="/about">Sobre</Link>
          <Link to="/recipes">Receitas</Link>
        </div>
      </div>

    </header>
  );
};


export default Header;



