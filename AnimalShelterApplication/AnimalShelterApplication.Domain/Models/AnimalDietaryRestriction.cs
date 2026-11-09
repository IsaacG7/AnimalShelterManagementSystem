using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Text;

namespace AnimalShelterApplication.Domain.Models
{
    public class AnimalDietaryRestriction
    {
        public int Id { get; set; }
        public string RestrictionName { get; set; }
        public string Details { get; set; }
    }
}
