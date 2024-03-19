import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from "./components/LandingPage.jsx";
import About from "./components/About";
import NavigationBar from './components/NavigationBar.jsx';
import Services from "./components/Services.jsx";
import Pricing from "./components/Pricing.jsx";

function App() {
  return (
    <Router>
      <>
        <NavigationBar />
        <Routes>
          <Route path="/" exact component={LandingPage} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/pricing" component={Pricing} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
