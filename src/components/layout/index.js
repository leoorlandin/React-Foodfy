import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header/'
import Footer from '../Footer'

import * as S from './styles'

function Layout({ children }) {
  return (
    <>
      <S.Layout>
        <Header />
        <div className="main">{children}</div>
      </S.Layout>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;