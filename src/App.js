import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Navbar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Services from './pages/Services';

function App() {
  return (
    <div data-test="component-app">
      <Switch>
        <ScrollToTop />
        <Navbar />
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path='/service' component={Services} />
      </Switch>
      <Footer />      
    </div>
  );
}

export default App;
