using AnimalShelterApplication.Infrastructure.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace AnimalShelterApplication.Infrastructure.Data.Configurations
{
    public class AnimalVaccinationEntityConfiguration : IEntityTypeConfiguration<AnimalVaccinationEntity>
    {
        public void Configure(EntityTypeBuilder<AnimalVaccinationEntity> builder)
        {
            builder.ToTable("AnimalVaccinations");

            builder.HasKey(v => v.VaccId);

            builder.HasOne<AnimalEntity>()
                .WithMany( a => a.Vaccinations)
                .HasForeignKey(v => v.AnimalId)
                .IsRequired();

            builder.Property(v => v.VaccName)
                .HasMaxLength(200)
                .IsUnicode(false)
                .IsRequired();

            builder.Property(v => v.AdministeredDate)
                .HasColumnType("date")
                .IsRequired();

            builder.Property(v => v.DoseGivenMl)
                .IsRequired();

            builder.Property(v => v.ReasonAdministered)
               .HasMaxLength(300)
               .IsUnicode(false);

        }
        
    }
}
