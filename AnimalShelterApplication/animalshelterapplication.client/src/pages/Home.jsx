import './Home.css';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import shelterDog from '../assets/images.jpg';

function Home() {
    const navigate = useNavigate();
    return (
        <main className="Home">
            <Hero
                label="A Second Chance. A Forever Home."
                title="Every Animal Deserves a Loving Home."
                description="Meet your new best friend and give a shelter animal the loving home they've always wanted."
                buttonText="Meet Our Animals!"
                buttonLink="/adopt"
            />

            <div className="card-Container">

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

            </div>

            <Footer
                footerTitle2="title 1"
                footerText2="descrpition"
                footerTitle3="title 2"
                footerText3="description"
            />
            
        </main>
    );
}

export default Home;