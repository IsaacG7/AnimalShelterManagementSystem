import './Adopt.css';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { getAnimals } from '../services/getAnimals'; 
import { useEffect, useState } from 'react'; 
function Adopt() {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchAnimals() {
            try {
                setLoading(true);
                setError(null);

                const data = await getAnimals();

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

    return (
    
        <main className="Adopt">

            {loading ? (
                <p>Loading animals...</p>
            ) : error ? (
                    <p>{error}</p>
                ) : animals.length === 0 ? (
                        <p>No Animals are currently available for adoption.</p>
                    ) : (

                          <div className="animal-List">

                               {animals.map(animal => (
                                    <Card
                                        key={animal.id}
                                        title={animal.name}
                                        description={`${animal.breed} | ${animal.gender}`}
                                        buttonText="Meet Me"
                                   />
                               ))}
                          </div>
                    )}

        </main>
    
    );

}

export default Adopt;