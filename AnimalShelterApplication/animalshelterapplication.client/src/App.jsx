import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Adopt from './pages/Adopt/Adopt';
import Volunteer from './pages/Volunteer/Volunteer';
import SignInPage from './pages/SignIn/SignInPage';
import SignUpPage from './pages/SignUp/SignUpPage';

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/adopt" element={<Adopt />} />
                <Route path="/volunteer" element={<Volunteer />} />
                <Route path="/about" element={<About />} />

                <Route path="/sign-in/*" element={<SignInPage />} />
                <Route path="/sign-up/*" element={<SignUpPage />} />
            </Routes>
        </>

    );
}

export default App;