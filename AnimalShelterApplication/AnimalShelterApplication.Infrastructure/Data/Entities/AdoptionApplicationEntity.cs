using AnimalShelterApplication.Domain.Enums;

namespace AnimalShelterApplication.Infrastructure.Data.Entities
{
    public class AdoptionApplicationEntity
    {
        public int ApplicationId { get; set; }
        public int AdopterUserId { get; set; }
        public int AnimalId { get; set; }
        public AdptApplicationStatus ApplicationStatus { get; set; }
        public DateOnly ApplicationSubmissionDate { get; set; }
        public int YearsOfPetExperience { get; set; }
        public string HomeType { get; set; }
        public int NumOfHomeOccupants { get; set; }
        public List<ApplicantOwnedPetEntity> CurrentOwnedPets { get; set; } = new List<ApplicantOwnedPetEntity>();
    }
   
}
