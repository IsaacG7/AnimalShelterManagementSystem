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


                { /* clerk components for user sign in*/}
                <Show when="signed-out">
                    <SignInButton>
                        <button className="nav-logout" >
                            Log in
                        </button>
                    </SignInButton>
                </Show>

                <Show when="signed-in">
                    <UserButton />
                </Show>

            </nav>

        </header>

    );
}

export default Navbar;