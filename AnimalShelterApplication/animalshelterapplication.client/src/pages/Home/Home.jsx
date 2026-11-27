import './Home.css';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import shelterDog from '../../assets/images.jpg';
import HeroPhoto from '../../assets/Hero-image.jpg';
import Carousel from '../../components/Carousel/Carousel';
import { useEffect, useState } from 'react';
import { getNAnimals } from '../../services/getNAnimals'; 


function Home() {
    const [animals, setAnimals] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchAnimals() {
            try {
                setLoading(true);
                setError(null);

                const data = await getNAnimals(3);

                setAnimals(data);
                
            } catch (error) {
                console.error(error);
                setError('Unable to load animals. Please try again later.');
            } finally {
                setLoading(false);
            }
        }
        fetchAnimals();
    }, []);

    const navigate = useNavigate();
    return (
        <main className="Home">
            <Hero
                label="A Second Chance. A Forever Home."
                title="Every Animal Deserves a Loving Home."
                description="Meet your new best friend and give a shelter animal the loving home they've always wanted."
                buttonText="Meet Our Animals!"
                buttonLink="/Adopt"
                image={HeroPhoto}
            />

            {/*<div className="card-Container">

                <Card
                    title="Find Your Perfect Companion"
                    description="Browse our list of animals available for adoption and find your new best friend."
                    buttonText="View Available Pets"
                    onAction={() => navigate('/Volunteer')}
                    imageUrl={shelterDog}
                />
                <Card
                    title="Find Your Perfect Companion"
                    description="Browse our list of animals available for adoption and find your new best friend."
                    buttonText="View Available Pets"
                    onAction={() => navigate('/Volunteer')}
                    imageUrl={shelterDog}
                />

            </div>*/}

            <Carousel heading="Meet Some of Our Animals!">

                {animals.map(animal => (
                    <Card
                        key={animal.id}
                        title={animal.name}
                        description={`${animal.species} | ${animal.breed} | ${animal.gender}`}
                        buttonText="See Our Animals!"
                        onAction={() => navigate('/Adopt')}
                    />
                ))}
                

            </Carousel>

            <Footer
                footerTitle3="title 3"
                footerText3="description"
            />
        
        </main>
    );
}

export default Home;