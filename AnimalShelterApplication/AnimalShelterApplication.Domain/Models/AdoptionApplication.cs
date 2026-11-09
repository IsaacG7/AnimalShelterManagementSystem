using AnimalShelterApplication.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace AnimalShelterApplication.Domain.Models
{
    public class AdoptionApplication
    {
        public int Id { get; set; }
        public int AdopterUserId { get; set; }
        public int AnimalId { get; set; }
        public AdptApplicationStatus ApplicationStatus { get; set; }
        public DateOnly ApplicationSubmissionDate { get; set; }
        public int YearsOfPetExperience { get; set; }
        public string HomeType { get; set; }
        public int NumOfHomeOccupants { get; set; }
        public List<OwnedPet> CurrentPets { get; set; } = new List<OwnedPet>();
    }
}
