import './Adopt.css';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import AnimalFilters from '../../components/AnimalFilters/AnimalFilters';
import { getAnimals } from '../../services/getAnimals'; 
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

            <SearchBar/>

            <div className="adopt-content">

                <AnimalFilters />

                <div className="animal-content">

                {loading ? (
                    <p>Loading animals...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : animals.length === 0 ? (
                    <p>No Animals are currently available for adoption.</p>
                ) : (

                    <div className="animal-list">

                        {animals.map(animal => (
                            <Card
                                key={animal.id}
                                title={animal.name}
                                description={`${animal.species} | ${animal.breed} | ${animal.gender}`}
                                buttonText="Meet Me"
                            />
                        ))}
                    </div>
                    )}
                </div>
            </div>
        </main>
    
    );

}

export default Adopt;