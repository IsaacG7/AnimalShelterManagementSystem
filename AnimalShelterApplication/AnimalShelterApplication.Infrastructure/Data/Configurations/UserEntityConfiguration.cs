using AnimalShelterApplication.Infrastructure.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AnimalShelterApplication.Infrastructure.Configurations;

public class UserEntityConfiguration : IEntityTypeConfiguration<UserEntity>
{
    public void Configure(EntityTypeBuilder<UserEntity> builder)
    {
        builder.ToTable("Users");

        builder.HasKey( u => u.UserId);

        builder.Property(u => u.ClerkUserId)
            .HasMaxLength(200)
            .IsRequired();

        builder.Property(u => u.FirstName)
            .IsRequired()
            .HasMaxLength(150)
            .IsUnicode(false);

        builder.Property(u => u.LastName)
            .IsRequired()
            .HasMaxLength(150)
            .IsUnicode(false);

        builder.Property(u => u.UserGroup)
            .HasConversion<string>()
            .HasMaxLength(100);

        builder.Property(u => u.Address)
            .HasMaxLength(300);

        builder.Property(u => u.PhoneNumber)
            .HasMaxLength(50);

        builder.Property(u => u.DateOfBirth)
            .HasColumnType("date");

        builder.Property(u => u.Email)
            .HasMaxLength(100);

        builder.Property(u => u.CreatedAt)
            .HasColumnType("datetime");

        builder.HasMany(u => u.AdoptionApplications)
            .WithOne()
            .HasForeignKey(a => a.AdopterUserId);
    }

    
}
