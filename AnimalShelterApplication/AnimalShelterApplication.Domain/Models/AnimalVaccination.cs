using System;
using System.Collections.Generic;
using System.Text;

namespace AnimalShelterApplication.Domain.Models
{
    public class AnimalVaccination
    {
        public int Id { get; set; }
        public string VaccName { get; set; }
        public DateOnly AdministeredDate { get; set; }
        public float DoseGivenMl { get; set; }
        public string ReasonAdministered {  get; set; }
    }
}
