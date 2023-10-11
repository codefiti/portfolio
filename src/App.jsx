import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

// Your components
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import ContactUs from "./components/ContactUs.jsx";
import Navbar from "./components/Navbar.jsx";
import('./App.css');

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Navbar />
                </nav>

                <Routes>
                    <Route path="/projects" element={<Portfolio />} />
                    <Route path="/contacts" element={<ContactUs />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}


export default App;
