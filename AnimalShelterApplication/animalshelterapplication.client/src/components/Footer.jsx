import './Footer.css'

function Footer({ footerTitle2, footerText2, footerTitle3, footerText3 }) {
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

              <h3>{footerTitle2}</h3>
              <p>{footerText2}</p>

          </div>

          <div className="Footer-Column">

              <h3>{footerTitle3}</h3>
              <p>{footerText3}</p>

          </div>

      </footer>
  );
}

export default Footer;