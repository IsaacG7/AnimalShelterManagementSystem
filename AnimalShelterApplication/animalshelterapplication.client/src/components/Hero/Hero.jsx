import "./Hero.css"


function Hero({ label, title, description, buttonText, buttonLink, image, imageAlt="" }) {
  return (

    <section className="hero">

          <div className="hero-content">

              <p className="hero-label">{label}</p>

              <h1>{title}</h1>

              <p className="hero-description">
                  {description}
              </p>

              <a href={buttonLink} className="hero-button">
              {buttonText}
              </a>

          </div>

          {image && (
              <div className="hero-image">

                  <img src={image} alt={imageAlt}/>

              </div>
          )}

    </section>

  );
}

export default Hero;