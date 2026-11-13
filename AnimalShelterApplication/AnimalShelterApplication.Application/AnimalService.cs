using AnimalShelterApplication.Application.Interfaces;
using AnimalShelterApplication.Domain.Models;

namespace AnimalShelterApplication.Application
{
    public class AnimalService : IAnimalService
    {
        private readonly IAnimalRepository _repo;

        public AnimalService(IAnimalRepository repo)
        {
            _repo = repo;
        }

        public async Task<IReadOnlyCollection<Animal>> GetAllAnimalsAsync()
        {
            var animals = await _repo.RetrieveAllAnimalsAsync();

            return animals;


        }

    }
}
