import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {

    return (
        <>
            
            <Navbar />
            
            {/*call the Hero component and pass the parameters to add the text.*/}
            <Hero
                label="A Second Chance. A Forever Home."
                title="Every Animal Deserves a Loving Home."
                description="Meet your new best friend and give a shelter animal the loving home they've always wanted"
                buttonText="Meet our Animals!"
                buttonLink="./adopt"

            />

        </>
    )

}

export default App;