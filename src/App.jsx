import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage.jsx";
import About from "./components/About";
import NavigationBar from './components/NavigationBar.jsx';
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <Router>
      <>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path = "/contact" element={<Contact/>}  />
        </Routes>
      </>
    </Router>
  );
}

export default App;
