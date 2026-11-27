import './Carousel.css';
import { useState } from 'react';

function Carousel({ children, heading }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = Array.isArray(children) ? children : [children];

    if (cards.length === 0) {
        return null;
    }

    function showPrevious() {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
        );
    }

    function showNext() {
        setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % cards.length
        );
    }

    return (
        <section className="Carousel">

            <h2>{heading}</h2>

            <div className="carousel-content">

                <button
                    className="carousel-arrow"
                    onClick={showPrevious}
                    aria-label="Previous card"
                    type="button"
                >
                    &#10094;
                </button>

                {cards[currentIndex]}

                <button
                    className="carousel-arrow"
                    onClick={showNext}
                    aria-label="Next card"
                    type="button"
                >
                    &#10095;
                </button>

            </div>

            <div className="carousel-indicators">
                {cards.map((card, index) => (
                    <button
                        key={index}
                        className={index === currentIndex ? 'active' : ''}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Show card ${index + 1}`}
                        type="button"
                    />
                ))}
            </div>

        </section>
    );
}

export default Carousel;