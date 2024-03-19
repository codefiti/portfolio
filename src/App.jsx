import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from "./components/LandingPage.jsx";
import About from './components/About.jsx';
import NavigationBar from './components/NavigationBar.jsx'; // Import NavigationBar

function App() {
  return (
    <Router>
      <>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/about" component={About} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
