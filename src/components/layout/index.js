import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header/'
import Footer from '../Footer'

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;