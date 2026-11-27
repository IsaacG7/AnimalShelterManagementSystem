import { getAnimals } from "./getAnimals";

export async function getNAnimals(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("n must be a non-negative integer.");
    }
    const animals = await getAnimals();


    //Only include animals who are available for adoption
    const adoptableAnimals = animals.filter(
        animal => animal.status === 0
    );

    //Randomize the adoptable animals
    const shuffledAnimals = [...adoptableAnimals];

    for (let i = shuffledAnimals.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffledAnimals[i], shuffledAnimals[j]] =
            [shuffledAnimals[j], shuffledAnimals[i]];

    }

    //return up to N animals
    return shuffledAnimals.slice(0, n);

}