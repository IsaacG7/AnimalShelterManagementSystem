import './Footer.css'

function Footer({ footerTitle3, footerText3 }) {
  return (
      <footer className="Footer">

          <div className="Footer-Column">

              <h3>Animal Shelter</h3>

              <p>
                  Disclaimer: This is a place to provide disclaimers<br />
                  Disclaimer EX1: 
              </p>

              <p>
                  Contact: EmailEX@Yahoo.com
                  (777)-777-7777
              </p>

              <p>
                  1234 S Example Ave, Example City, EX
              </p>

          </div>

          <div className="Footer-Column">

              <h3>Animal Control - Springfield Animal Shelter</h3>

              <p><a href="http://health.springfieldmo.gov/animalcontrol">Greene County Animal Control</a></p>
              <p>(417)833-3592</p>
              <p>4002 N Farmer Ave, Springfield, MO 65803</p>

          </div>

          <div className="Footer-Column">

              <h3>{footerTitle3}</h3>
              <p>{footerText3}</p>

          </div>

      </footer>
  );
}

export default Footer;