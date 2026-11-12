using AnimalShelterApplication.Infrastructure.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace AnimalShelterApplication.Infrastructure.Data.Configurations
{
    public class FavoritedAnimalsEntityConfiguration : IEntityTypeConfiguration<FavoritedAnimalsEntity>
    {
        public void Configure(EntityTypeBuilder<FavoritedAnimalsEntity> builder)
        {
            builder.ToTable("FavoritedAnimals");

            builder.HasKey(x => x.Id);

            //fk to the user
            builder.HasOne<UserEntity>()
                .WithMany()
                .HasForeignKey(x => x.UserId)
                 .IsRequired();

            //fk to the animal
            builder.HasOne<AnimalEntity>()
                .WithMany()
                .HasForeignKey(x => x.AnimalId)
                .IsRequired();

            // prevents a record being created twice with the same user and animal ID's
            // e.g. a user somehow favoriting an animal twice
            builder.HasIndex(x => new { x.UserId, x.AnimalId })
                .IsUnique();

        }
    }
}
