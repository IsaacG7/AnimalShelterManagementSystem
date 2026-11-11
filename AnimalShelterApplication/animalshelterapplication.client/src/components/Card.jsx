
import './Card.css';
function Card({title, description, onAction, buttonText, imageUrl }) {
  return (
      <button className="Card" onClick={onAction} type="button">
          {imageUrl && (
            <img 
                src={imageUrl} 
                alt="" 
                className="card-Image" 
            />
          )}

          <div className="card-Content">

              <h3 className="card-Title">
                  {title}
              </h3>

              <p className="card-Description">{description}</p>

              {buttonText && (
                  <span className="card-Button">
                      {buttonText} →
                  </span>
              )}



          </div>

      </button>

        
  );
}

export default Card;