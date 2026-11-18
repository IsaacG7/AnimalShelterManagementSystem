//import the styling
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

//function for the navigation bar component, has no parameters as it is the same for users
function Navbar() {
    return (

        <header className="site-header">

            <nav className="navbar">


                <Link className="brand" to="/">
                    <span className="brand-icon">🐾</span>
                    <span>GL Animal Rescue</span>
                </Link>



                <div className="nav-links">
                    <Link to="/adopt">Adopt</Link>
                    <Link to="/volunteer">Volunteer</Link>
                    <Link to="/about">About</Link>
                </div>


                <Show when="signed-out">
                    <div className="nav-auth">
                        <SignInButton>
                            <button className="nav-login">
                                Log In
                            </button>
                        </SignInButton>

                        <Link to="/sign-up" className="nav-register">
                            Register
                        </Link>
                    </div>
                </Show>

                <Show when="signed-in">
                    <UserButton />
                </Show>

            </nav>

        </header>

    );
}

export default Navbar;