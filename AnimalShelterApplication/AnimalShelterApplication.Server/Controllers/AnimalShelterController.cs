using AnimalShelterApplication.Application.Interfaces;
using AnimalShelterApplication.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace AnimalShelterApplication.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class  AnimalShelterController : ControllerBase
    {
        private readonly IAnimalService _animalService;

      public AnimalShelterController(IAnimalService animalService)
        {
            _animalService = animalService;
        }



        [HttpGet("Animals")]
        public async Task<ActionResult<List<Animal>>> GetAnimalsAsync()
        {
           var animals = await _animalService.GetAllAnimalsAsync();
            
            return Ok(animals);
        }
    }
}
