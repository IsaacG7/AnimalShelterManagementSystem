using AnimalShelterApplication.Application.Interfaces;
using AnimalShelterApplication.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace AnimalShelterApplication.Application
{
    public class UserService : IUserService
    {

        private readonly IUserRepository _repo;

        public UserService(IUserRepository repo)
        {
            _repo = repo;
        }

        public async Task<bool> AddUserAsync(User user)
        {
            var result = await _repo.CreateUserAsync(user);

            return result ;


        }
    }
}
