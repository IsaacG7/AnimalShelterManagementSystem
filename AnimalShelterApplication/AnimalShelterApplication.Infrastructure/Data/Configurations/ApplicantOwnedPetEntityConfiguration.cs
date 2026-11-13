using AnimalShelterApplication.Infrastructure.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace AnimalShelterApplication.Infrastructure.Data.Configurations
{
    public class ApplicantsOwnedPetEntityConfiguration: IEntityTypeConfiguration<ApplicantOwnedPetEntity>
    {
        public void Configure(EntityTypeBuilder<ApplicantOwnedPetEntity> builder)
        {
            builder.ToTable("ApplicantsOwnedPets", "AdptApp");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(x => x.Breed)
                .HasMaxLength(100);

            builder.Property(x => x.Gender)
                .HasMaxLength(50);

            builder.Property(x => x.DateOfBirth)
                .HasColumnType("date");

         
        }
    }
}
