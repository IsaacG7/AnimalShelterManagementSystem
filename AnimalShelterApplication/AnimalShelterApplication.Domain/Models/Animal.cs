using AnimalShelterApplication.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace AnimalShelterApplication.Domain.Models
{
    public class Animal
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Breed { get; set; }
        public string Gender { get; set; }
        public DateOnly DateOfBirth { get; set; }
        public string Description { get; set; }
        public AnimalAdptStatus Status { get; set; }
        public bool IsFixed { get; set; }
        public string BehavioralDetails { get; set; }
        public List<AnimalVaccination> Vaccinations { get; set; } = new List<AnimalVaccination>();
        public List<AnimalDietaryRestriction> DietaryRestrictions{ get; set; } = new List<AnimalDietaryRestriction> { };
        public List<string> SpecialCareDetails { get; set; } = new List<string>();
    }
}
