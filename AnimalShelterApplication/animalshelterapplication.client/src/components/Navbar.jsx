//import the styling
import './Navbar.css';

//function for the navigation bar component, has so parameters as it is the same for users
function Navbar() {
  return (

      <header classname="site-header">

          <nav className="navbar">

              
              <a className="brand" href="/">
                  <span className="brand-icon">🐾</span>
                  <span>Animal Shelter</span>
              </a>


              
              <div className="nav-links">
                  <a href="/">Home</a>
                  <a href="/adopt">Adopt</a>
                  <a href="/volunteer">Volunteer</a>
                  <a href="/about">About</a>
              </div>


              
              <a className="nav-logout" href="/logout">
                  Logout
              </a>

          </nav>

      </header>

  );
}

export default Navbar;