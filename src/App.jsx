import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import LandingPage from "./components/LandingPage.jsx";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact.jsx";
import './App.css';

function App() {
    return (
        <Router>
            <div className="main">

                <div>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/services" element={<Services/>}/>
                        <Route path="/pricing" element={<Pricing/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
