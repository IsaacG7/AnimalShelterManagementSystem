import './About.css'
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import HeroPhoto from '../../assets/About-image.jpg';

function About() {
    return (
  
        <main className="About">

            <Hero

                label="GL Animal Rescue"
                title="Commited to Animal welfare"
                description="Our mission is to foster the co-thriving of animals and people throughout the greater Springfield area. 
                Whether you're interested in adoption, volunteering, or seeking support on your journey of animal companionship, 
                we'd love to hear from you. Please don't hesitate to contact us!"
                buttonText="Contact us!"
                buttonLink="/Contact"
                image={HeroPhoto}

            />

            <Footer

                footerTitle3="Title 3"
                footerText3="Description"

            />

        </main>
    
    );
}

export default About;