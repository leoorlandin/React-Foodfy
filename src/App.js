import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import "./styles/index.css"

import Layout from '../src/components/layout/index'
import Routes from '../src/routes/index';


const App = () => {
  return (
    <Router>
      <Layout >
        <Routes />
      </Layout>
    </Router>
  );
}

export default App;
