using AnimalShelterApplication.Application.Interfaces;
using AnimalShelterApplication.Domain.Models;
using AnimalShelterApplication.Infrastructure.Data;
using AnimalShelterApplication.Infrastructure.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text;

namespace AnimalShelterApplication.Infrastructure
{
    public class UserRepository :IUserRepository
    {
        private AnimalShelterDbContext _dbContext;
        private ILogger<UserRepository> _logger;

        public UserRepository(AnimalShelterDbContext dbContext, ILogger<UserRepository> logger)
        {
            _dbContext = dbContext;
            _logger = logger;
        }


        public async Task<bool> CreateUserAsync(User user)
        {
            var userEntity = MapDomainUserToEntity(user);

            try
            {
                _dbContext.Add(userEntity);
                var changes = await _dbContext.SaveChangesAsync();
                return changes > 0;
            }
            catch (DbUpdateException ex)
            {
                _logger.LogError(ex, "Failed to create user record.");
                // remove the user entity from the context
                _dbContext.Remove(userEntity);

                return false;
            }
        }

        private UserEntity MapDomainUserToEntity(User user) {

            return new UserEntity
            {
                ClerkUserId = user.ClerkUserId,
                FirstName = user.FirstName,
                LastName = user.LastName,
                UserGroup = user.UserGroup,
                DateOfBirth = user.DateOfBirth,
                Email = user.Email,
                CreatedAt = user.CreatedAt,
                PhoneNumber = user.PhoneNumber
            };
        }
    }
}
