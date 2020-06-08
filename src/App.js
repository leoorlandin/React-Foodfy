import React from 'react';
import Header from '../src/components/Header/header'
import Footer from '../src/components/Footer/footer'
import Main from '../src/components/Main/main'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Main></Main>
      <Footer/>
    </div>
  );
}

export default App;
