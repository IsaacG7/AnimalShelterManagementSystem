using AnimalShelterApplication.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace AnimalShelterApplication.Domain.Models
{
    public class OwnedPet
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Breed { get; set; }
        public string Gender { get; set; }
        public DateOnly DateOfBirth { get; set; }
    }
}
