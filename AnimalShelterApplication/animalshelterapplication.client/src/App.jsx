import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Adopt from './pages/Adopt';
import Volunteer from './pages/Volunteer';
import About from './pages/About';

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/adopt" element={<Adopt />} />
                <Route path="/volunteer" element={<Volunteer />} />
                <Route path="/about" element={<About />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;