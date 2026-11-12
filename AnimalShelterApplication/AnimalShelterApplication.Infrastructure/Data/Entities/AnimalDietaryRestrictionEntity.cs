using System;
using System.Collections.Generic;
using System.Text;

namespace AnimalShelterApplication.Infrastructure.Data.Entities
{
    public class AnimalDietaryRestrictionEntity
    {
        public int RestrictionId { get; set; }
        public int AnimalId { get; set; }
        public string RestrictionName { get; set; }
        public string Details { get; set; }
    }
}
