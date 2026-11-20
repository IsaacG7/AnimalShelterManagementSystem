export function getSelectedFilters(checkBoxIds) {
    const selectedFilters = checkBoxIds
        .map(id => document.getElementById(id))
        .filter(checkbox => checkbox && checkbox.checked)
        .map(checkbox => checkbox.value);

    if (selectedFilters.length === 0 ||
        selectedFilters.length === checkBoxIds.length) {
        return null; // No filters selected or all filters selected, return null to indicate no filtering
    }
    return selectedFilters;
}

export function filterByGender(animals, genders) {
    return animals.filter(animal => genders.includes(animal.gender));
}

export function filterBySpecies(animals, species) {
    return animals.filter(animal => species.includes(animal.species));
}

export function getAgeInMonths(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let months = (today.getFullYear() - birth.getFullYear()) * 12 +
        (today.getMonth() - birth.getMonth());

    if (today.getDate() < birth.getDate()) {
        months--;
    } 

    return months;
}

export function filterByAge(animals, ageRanges) {
    return animals.filter(animal => {
        const ageInMonths = getAgeInMonths(animal.dateOfBirth);
        return ageRanges.some(range =>
            ageInMonths >= range.min && ageInMonths <= range.max);
    });
}

function getSizeClass(animal) {

    const weight = parseFloat(animal.weight);

    if (animal.species === 'Dog') {
        if (weight <= 25) {
            return 'Small';
        }
        else if (weight <= 55) {
            return 'Medium';
        }
        else if(weight > 55){
            return 'Large';
        }
    }

    if (animal.species === 'Cat') {
        if (weight <= 8) {
            return 'Small';
        }
        else if (weight <= 12) {
            return 'Medium';
        }
        else if(weight > 12){
            return 'Large';
        }
    }
}
export function filterBySize(animals, sizes) {
    return animals.filter(animal => {
        const animalSizeClass = getSizeClass(animal);
        return sizes.includes(animalSizeClass);
    })
}

