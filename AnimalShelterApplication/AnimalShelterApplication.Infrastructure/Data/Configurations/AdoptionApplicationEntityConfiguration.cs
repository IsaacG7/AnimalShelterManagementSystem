using AnimalShelterApplication.Domain.Enums;
using AnimalShelterApplication.Infrastructure.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace AnimalShelterApplication.Infrastructure.Data.Configurations
{
    internal class AdoptionApplicationEntityConfiguration : IEntityTypeConfiguration<AdoptionApplicationEntity>
    {
        public void Configure(EntityTypeBuilder<AdoptionApplicationEntity> builder)
        {
            builder.ToTable("AdoptionApplications", "AdptApp");

            builder.HasKey(a => a.ApplicationId);

            //fk to an animal
            builder.HasOne<AnimalEntity>()
              .WithMany()
              .HasForeignKey(a => a.AnimalId)
              .IsRequired();

            builder.Property(a => a.ApplicationStatus)
                .HasConversion<string>()
                .HasMaxLength(100)
                .IsUnicode(false);

            builder.Property(a => a.ApplicationSubmissionDate)
                .HasColumnType("date");

            builder.Property(a => a.YearsOfPetExperience);

            builder.Property(a => a.HomeType)
                .HasMaxLength(100)
                .IsUnicode(false);

            builder.Property(a => a.NumOfHomeOccupants);

            builder.HasMany(a => a.CurrentOwnedPets)
                .WithOne()
                .HasForeignKey(a => a.ApplicationId);
        }

    }
}



