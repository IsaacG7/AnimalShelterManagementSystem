import './Adopt.css';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import AnimalModal from '../../components/AnimalModal/AnimalModal';
import AdoptionModal from '../../components/AdoptionModal/AdoptionModal';
import AnimalFilters from '../../components/AnimalFilters/AnimalFilters';
import {
    getSelectedFilters,
    filterByGender,
    filterBySpecies,
    filterByAge,
    filterBySize
} from '../../services/applyFilters';
import { getAnimals } from '../../services/getAnimals'; 
import { useEffect, useState } from 'react'; 
function Adopt() {
    const [animals, setAnimals] = useState([]);
    const [displayAnimals, setDisplayAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAnimalModalOpen, setIsAnimalModalOpen] = useState(false);
    const [isAdoptionModalOpen, setIsAdoptionModalOpen] = useState(false);
    const [displayAnimal, setDisplayAnimal] = useState(null);
    

    useEffect(() => {
        async function fetchAnimals() {
            try {
                setLoading(true);
                setError(null);

                const data = await getAnimals();

                setAnimals(data);
                setDisplayAnimals(data);
            } catch (error) {
                console.error(error);
                setError('Unable to load animals. Please try again later.');
            } finally {
                setLoading(false);
            }
        }
        fetchAnimals();
    }, []);

    


    function applyFilters() {

        let filteredAnimals = [...animals];

        const selectedSpecies = getSelectedFilters(['species-dog', 'species-cat']);
        const selectedGenders = getSelectedFilters(['gender-male', 'gender-female']);
        const selectedAges = getSelectedFilters(['age-young', 'age-adult', 'age-senior']);
        const selectedSizes = getSelectedFilters(['size-small', 'size-medium', 'size-large']);

        if (selectedSpecies) {
            filteredAnimals = filterBySpecies(filteredAnimals, selectedSpecies);
        }

        if (selectedGenders) {
            filteredAnimals = filterByGender(filteredAnimals, selectedGenders);
        }

        if (selectedAges) {
            const ageRanges = selectedAges.map(age => {
                switch (age) {
                    case 'Young':
                        return { min: 0, max: 17 };
                    case 'Adult':
                        return { min: 18, max: 120 };
                    case 'Senior':
                        return { min: 121, max: Infinity };
                    default:
                        return null;
                }
            }).filter(range => range !== null);
            filteredAnimals = filterByAge(filteredAnimals, ageRanges);

        }

        if (selectedSizes) {
            filteredAnimals = filterBySize(filteredAnimals, selectedSizes)
        }

        setDisplayAnimals(filteredAnimals);

    }

    function handleAnimalClick(animal) {
        setDisplayAnimal(animal);
        setIsAnimalModalOpen(true);
    }

    function handleAnimalClose() {
        setIsAnimalModalOpen(false);
    }


    return (
    
        <main className="Adopt">

            <SearchBar/>

            <div className="adopt-content">

                <AnimalFilters onFilterChange={applyFilters} />

                <div className="animal-content">

                {loading ? (
                    <p>Loading animals...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : animals.length === 0 ? (
                    <p>No Animals are currently available for adoption.</p>
                ) : (

                    <div className="animal-list">

                        {displayAnimals.map(displayAnimal => (
                            <Card
                                key={displayAnimal.id}
                                title={displayAnimal.name}
                                description={`${displayAnimal.species} | ${displayAnimal.breed} | ${displayAnimal.gender}`}
                                buttonText="Meet Me"
                                onAction={() => handleAnimalClick(displayAnimal)}
                                imageUrl={displayAnimal.imageUrl }
                            />
                        ))}
                    </div>
                    )}
                </div>

            </div>
            {isAnimalModalOpen && (
                <AnimalModal
                    animal={displayAnimal}
                    onClose={handleAnimalClose}
                    onAdopt={() => setIsAdoptionModalOpen(true)}
                />
            )}

            {isAdoptionModalOpen && (
                <AdoptionModal
                    animal={displayAnimal}
                    onClose={() => setIsAdoptionModalOpen(false)}
                />
            )}
        </main>
    
    );

}

export default Adopt;