using AnimalShelterApplication.Application.Interfaces;
using AnimalShelterApplication.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace AnimalShelterApplication.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class  AnimalShelterController : ControllerBase
    {
        private readonly IAnimalService _animalService;

      public AnimalShelterController(IAnimalService animalService)
        {
            _animalService = animalService;
        }



        [HttpGet("Animals")]
        public ActionResult<List<Animal>> GetAnimals()
        {
            var animals = new List<Animal>
    {
        new Animal
        {
            Id = 1,
            Name = "Bently",
            Species = "Dog",
            Breed = "Corgi",
            Gender = "Male",
            Weight = "50",
            DateOfBirth = new DateOnly(2026, 5, 10),
            Description = "A friendly and energetic dog who loves playing fetch."
        },

        new Animal
        {
            Id = 2,
            Name = "Luna",
            Species = "Cat",
            Breed = "Domestic Shorthair",
            Gender = "Female",
            Weight = "5",
            DateOfBirth = new DateOnly(2023, 2, 15),
            Description = "A gentle cat who enjoys cuddles and sunny windowsills."
        },

        new Animal
        {
            Id = 3,
            Name = "Max",
            Species = "Dog",
            Breed = "German Shepherd",
            Gender = "Male",
            Weight = "80",
            DateOfBirth = new DateOnly(2021, 8, 20),
            Description = "An intelligent and loyal dog looking for a loving home."
        }
    };

            return Ok(animals);
        }
    }
}
