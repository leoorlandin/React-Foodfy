import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from '../src/components/Layout'
import GlobalStyle from "./styles/global"
import Routes from '../src/routes/index';


const App = () => {
  return (
    <Router>
      <Layout >
        <GlobalStyle/>
        <Routes />
      </Layout>
    </Router>
  );
}

export default App;
