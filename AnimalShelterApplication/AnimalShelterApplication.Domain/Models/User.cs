using AnimalShelterApplication.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace AnimalShelterApplication.Domain.Models
{
    public class User
    {
        public int Id { get; set; }
        public string ClerkUserId { get; set; }
        public UserGroup UserGroup {  get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public DateOnly DateOfBirth { get; set; }
        public DateTime CreatedAt { get; set; }
        public List<AdoptionApplication> AdoptionApplications { get; set; } = new List<AdoptionApplication>();
    }
}


