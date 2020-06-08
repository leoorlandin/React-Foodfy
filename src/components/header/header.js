import React from 'react';
import logo from './logo.png'
import styles from './header.css'

const Header = () => {
  return (


    <>
      <div className="header">
        <a href="/"><img src={logo} alt="Foodfy logo" /></a>
        <div className="links">
          <a href="/">Sobre</a>
          <a href="/">Receitas</a>
        </div>
      </div>

    </>
  );
};


export default Header;



