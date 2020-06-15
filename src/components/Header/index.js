import React from 'react';

import * as S from './styles';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Header = () => {
  return (

    <S.Header>

      <Link to="/"><img
        src={logo}
        alt="Logo Foodfy" /></Link>

      <S.Links>
        <Link to="/about">Sobre</Link>
        <Link to="/recipes">Receitas</Link>
      </S.Links>

    </S.Header>

  );
};


export default Header;



