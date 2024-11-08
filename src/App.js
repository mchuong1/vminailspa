import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Navbar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Services from './pages/Services';
import OnlineBooking from './pages/OnlineBooking';
import PhotoGallery from './pages/Gallery';
import VirtualTour from './pages/VirtualTour';
// import Maintenance from './pages/Maintenance';

function App() {
  return (
    <div data-test="component-app">
      {/* <Maintenance /> */}
      <Switch>
        <ScrollToTop />
        <Navbar />
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path='/service' component={Services} />
        <Route path='/booking' component={OnlineBooking} />
        <Route path='/gallery' component={PhotoGallery} />
        <Route path='/virtualtour' component={VirtualTour} />
      </Switch>
      <Footer />      
    </div>
  );
}

export default App;
