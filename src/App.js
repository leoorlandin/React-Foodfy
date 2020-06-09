import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from '../src/components/layout/index'
import Routes from '../src/routes/routes';

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
