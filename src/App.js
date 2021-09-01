import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Navbar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div data-test="component-app">
      <Switch>
        <ScrollToTop />
        <Navbar />
        <Route exact path="/" component={LandingPage} />
      </Switch>
      <Footer />      
    </div>
  );
}

export default App;
