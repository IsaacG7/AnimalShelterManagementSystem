//import the styling
import './Navbar.css';
import { Link } from 'react-router-dom';

//function for the navigation bar component, has so parameters as it is the same for users
function Navbar() {
  return (

      <header className="site-header">

          <nav className="navbar">

              
              <Link className="brand" to="/">
                  <span className="brand-icon">🐾</span>
                  <span>Animal Shelter</span>
              </Link>


              
              <div className="nav-links">
                  <Link to="/">Home</Link>
                  <Link to="/adopt">Adopt</Link>
                  <Link to="/volunteer">Volunteer</Link>
                  <Link to="/about">About</Link>
              </div>


              
              <a className="nav-logout" href="/logout">
                  Logout
              </a>

          </nav>

      </header>

  );
}

export default Navbar;