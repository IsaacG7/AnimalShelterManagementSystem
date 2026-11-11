import Hero from '../components/Hero';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import shelterDog from '../assets/images.jpg';

function Home() {
    const navigate = useNavigate();
    return (
        <main>
            <Hero
                label="A Second Chance. A Forever Home."
                title="Every Animal Deserves a Loving Home."
                description="Meet your new best friend and give a shelter animal the loving home they've always wanted."
                buttonText="Meet Our Animals!"
                buttonLink="/adopt"
            />
            <Card
                title="Find Your Perfect Companion"
                description="Browse our list of animals available for adoption and find your new best friend."
                buttonText="View Available Pets"
                onAction={() => navigate('/Volunteer')}
                imageUrl={shelterDog}
            />
        </main>
    );
}

export default Home;