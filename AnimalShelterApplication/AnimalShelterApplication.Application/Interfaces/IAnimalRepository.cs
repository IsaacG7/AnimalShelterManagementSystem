using AnimalShelterApplication.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace AnimalShelterApplication.Application.Interfaces
{
    public interface IAnimalRepository
    {
        Task<IReadOnlyCollection<Animal>> RetrieveAllAnimalsAsync();
    }
}
