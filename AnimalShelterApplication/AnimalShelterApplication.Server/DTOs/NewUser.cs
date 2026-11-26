namespace AnimalShelterApplication.Server.DTOs
{
    public class NewUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public DateOnly DateOfBirth { get; set; }
        public bool IsVolunteer { get; set; }
    }
}
