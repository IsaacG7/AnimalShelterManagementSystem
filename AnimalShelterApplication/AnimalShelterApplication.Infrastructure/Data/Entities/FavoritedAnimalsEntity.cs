using System;
using System.Collections.Generic;
using System.Text;

namespace AnimalShelterApplication.Infrastructure.Data.Entities
{
    public class FavoritedAnimalsEntity
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int AnimalId { get; set; }
    }
}
