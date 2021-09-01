import React from 'react';
import { BrowserRouter as Switch } from 'react-router-dom';

import Navbar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div data-test="component-app">
      <Switch>
        <ScrollToTop />
        <Navbar />
      </Switch>
      <Footer />      
    </div>
  );
}

export default App;
