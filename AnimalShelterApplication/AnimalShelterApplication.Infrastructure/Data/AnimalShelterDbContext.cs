using AnimalShelterApplication.Infrastructure.Data.Entities;
using Microsoft.EntityFrameworkCore;
namespace AnimalShelterApplication.Infrastructure.Data;

public class AnimalShelterDbContext : DbContext
{

    public AnimalShelterDbContext(DbContextOptions<AnimalShelterDbContext> options)
       : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // automatically apply all IEntityTypeConfiguration classes in the assembly
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(AnimalShelterDbContext).Assembly);
    }
    public DbSet<AnimalEntity> Animals { get; set; }
    public DbSet<UserEntity> Users { get; set; }
    public DbSet<AnimalDietaryRestrictionEntity> AnimalDietaryRestrinctions { get; set; }
    public DbSet<AnimalVaccinationEntity> AnimalVaccinations { get; set; }
    public DbSet<AdoptionApplicationEntity> AdoptionApplications { get; set; }
    public DbSet<ApplicantOwnedPetEntity> OwnedPets { get; set; }

}
