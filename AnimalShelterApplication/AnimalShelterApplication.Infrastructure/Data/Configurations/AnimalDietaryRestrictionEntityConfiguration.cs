using AnimalShelterApplication.Infrastructure.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace AnimalShelterApplication.Infrastructure.Data.Configurations
{
    public class AnimalDietaryRestrictionEntityConfiguration : IEntityTypeConfiguration<AnimalDietaryRestrictionEntity>
    {
        public void Configure(EntityTypeBuilder<AnimalDietaryRestrictionEntity> builder)
        {
            builder.ToTable("AnimalDietRestrictions");

            builder.HasKey(r => r.RestrictionId);

            builder.Property(r => r.RestrictionName)
                .HasMaxLength(300)
                .IsUnicode(false)
                .IsRequired();

            builder.Property(r => r.Details)
                .HasMaxLength(300)
                .IsUnicode(false);
        }
    }
}
