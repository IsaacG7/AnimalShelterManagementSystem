export async function getAnimals() {
    const response = await fetch('/api/AnimalShelter/Animals');

    if (!response.ok) {
        throw new Error('Failed to retrieve animals');
    }

    const animals = await response.json();

    return animals;
}