using AnimalShelterApplication.Domain.Models;
using AnimalShelterApplication.Infrastructure.Data;
using AnimalShelterApplication.Infrastructure.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace AnimalShelterApplication.Infrastructure
{
    public class AnimalRepository
    {
       private AnimalShelterDbContext _dbContext;

        public AnimalRepository(AnimalShelterDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IReadOnlyCollection<Animal>> RetrieveAllAnimals()
        {
            var domainAnimals = new List<Animal>();

            var animalEntites = await _dbContext.Animals
                .AsNoTracking()
                .ToListAsync();

            foreach ( var animal in animalEntites)
            {
                domainAnimals.Add(MapToDomainAnimal(animal));
            }

            IReadOnlyCollection<Animal> animals = domainAnimals;

            return animals;
        }

        private Animal MapToDomainAnimal(AnimalEntity animalEntity)
        {
            Animal domainAnimal = new Animal
            {
                Vaccinations = new List<AnimalVaccination>(),
                DietaryRestrictions = new List<AnimalDietaryRestriction>(),

                Id = animalEntity.AnimalId,
                Name = animalEntity.Name,
                Gender = animalEntity.Gender,
                DateOfBirth = animalEntity.DateOfBirth,
                Description = animalEntity.Description,
                Breed = animalEntity.Breed,
                IsFixed = animalEntity.IsFixed,
                SpecialCareDetails = animalEntity.SpecialCareDetails,
                Status = animalEntity.Status,
                BehavioralDetails = animalEntity.BehavioralDetails
            };

            foreach (var vaccinationEnt in animalEntity.Vaccinations)
            {
                var domainVaccination = new AnimalVaccination
                {
                    Id = vaccinationEnt.VaccId,
                    VaccName = vaccinationEnt.VaccName,
                    DoseGivenMl = vaccinationEnt.DoseGivenMl,
                    ReasonAdministered = vaccinationEnt.ReasonAdministered,
                    AdministeredDate = vaccinationEnt.AdministeredDate
                };

                domainAnimal.Vaccinations.Add(domainVaccination);
            }

            foreach (var dietRestrEnt in animalEntity.DietaryRestrictions)
            {
                var domainRestriction = new AnimalDietaryRestriction
                {
                    Id = dietRestrEnt.RestrictionId,
                    RestrictionName = dietRestrEnt.RestrictionName,
                    Details = dietRestrEnt.Details
                };

                domainAnimal.DietaryRestrictions.Add(domainRestriction);
            }

            return domainAnimal;
        }
    }
}
