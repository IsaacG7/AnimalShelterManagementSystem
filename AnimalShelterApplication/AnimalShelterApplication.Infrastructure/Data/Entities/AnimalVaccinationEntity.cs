using System;
using System.Collections.Generic;
using System.Text;

namespace AnimalShelterApplication.Infrastructure.Data.Entities
{
    public class AnimalVaccinationEntity
    {
        public int VaccId { get; set; }
        public int AnimalId { get; set; }
        public string VaccName { get; set; }
        public DateOnly AdministeredDate { get; set; }
        public float DoseGivenMl { get; set; }
        public string ReasonAdministered { get; set; }
    }
}
