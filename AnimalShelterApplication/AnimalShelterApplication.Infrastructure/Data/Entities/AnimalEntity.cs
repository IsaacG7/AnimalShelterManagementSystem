using AnimalShelterApplication.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace AnimalShelterApplication.Infrastructure.Data.Entities
{
    public class AnimalEntity
    {
        public int AnimalId { get; set; }
        public string Name { get; set; }
        public string Breed { get; set; }
        public string Gender { get; set; }
        public DateOnly DateOfBirth { get; set; }
        public string Description { get; set; }
        public AnimalAdptStatus Status { get; set; }
        public bool IsFixed { get; set; }
        public string BehavioralDetails { get; set; }
        public string SpecialCareDetails { get; set; }
        public List<AnimalVaccinationEntity> Vaccinations { get; set; } = new List<AnimalVaccinationEntity>();
        public List<AnimalDietaryRestrictionEntity> DietaryRestrictions { get; set; } = new List<AnimalDietaryRestrictionEntity> { };
    }
}
