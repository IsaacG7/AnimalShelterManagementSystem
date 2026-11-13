using AnimalShelterApplication.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace AnimalShelterApplication.Application.Interfaces
{
    public interface IAnimalService
    {
        Task<IReadOnlyCollection<Animal>> GetAllAnimalsAsync();
    }
}
