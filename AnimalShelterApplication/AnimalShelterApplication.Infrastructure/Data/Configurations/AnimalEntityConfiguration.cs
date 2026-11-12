using AnimalShelterApplication.Infrastructure.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AnimalShelterApplication.Infrastructure.Configurations;

public class AnimalEntityConfiguration : IEntityTypeConfiguration<AnimalEntity>
{
    public void Configure(EntityTypeBuilder<AnimalEntity> builder)
    {
        builder.ToTable("Animals");

        builder.HasKey(a => a.AnimalId);

        builder.Property(a => a.Name)
            .IsRequired()
            .HasMaxLength(100)
            .IsUnicode(false);

        builder.Property(a => a.DateOfBirth)
            .HasColumnType("date");

        builder.Property(a => a.Description)
            .HasMaxLength(300)
            .IsUnicode(false);

        builder.Property(a => a.Breed)
            .HasMaxLength(100)
            .IsUnicode(false);

        builder.Property(a => a.SpecialCareDetails)
            .HasMaxLength(300)
            .IsUnicode(false);

        builder.Property(a => a.Gender)
            .HasMaxLength(100)
            .IsUnicode(false);

        builder.Property(a => a.BehavioralDetails)
            .HasMaxLength(300)
            .IsUnicode(false);

        builder.Property(a => a.IsFixed)
            .HasDefaultValue(false);

        builder.Property(a => a.Status)
            .HasConversion<string>()
            .HasMaxLength(100);

        builder.HasMany(a => a.Vaccinations)
            .WithOne()
            .HasForeignKey(v => v.AnimalId);

        builder.HasMany(a => a.DietaryRestrictions)
            .WithOne()
            .HasForeignKey(r => r.AnimalId);
    }
}
