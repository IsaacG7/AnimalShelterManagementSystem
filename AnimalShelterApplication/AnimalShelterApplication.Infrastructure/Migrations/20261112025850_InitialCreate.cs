using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AnimalShelterApplication.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "AdptApp");

            migrationBuilder.CreateTable(
                name: "Animals",
                columns: table => new
                {
                    AnimalId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    Breed = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    Gender = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    DateOfBirth = table.Column<DateOnly>(type: "date", nullable: false),
                    Description = table.Column<string>(type: "varchar(300)", unicode: false, maxLength: 300, nullable: false),
                    Status = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    IsFixed = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    BehavioralDetails = table.Column<string>(type: "varchar(300)", unicode: false, maxLength: 300, nullable: false),
                    SpecialCareDetails = table.Column<string>(type: "varchar(300)", unicode: false, maxLength: 300, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Animals", x => x.AnimalId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClerkUserId = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    UserGroup = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    FirstName = table.Column<string>(type: "varchar(150)", unicode: false, maxLength: 150, nullable: false),
                    LastName = table.Column<string>(type: "varchar(150)", unicode: false, maxLength: 150, nullable: false),
                    Address = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    DateOfBirth = table.Column<DateOnly>(type: "date", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "AnimalDietRestrictions",
                columns: table => new
                {
                    RestrictionId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AnimalId = table.Column<int>(type: "int", nullable: false),
                    RestrictionName = table.Column<string>(type: "varchar(300)", unicode: false, maxLength: 300, nullable: false),
                    Details = table.Column<string>(type: "varchar(300)", unicode: false, maxLength: 300, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnimalDietRestrictions", x => x.RestrictionId);
                    table.ForeignKey(
                        name: "FK_AnimalDietRestrictions_Animals_AnimalId",
                        column: x => x.AnimalId,
                        principalTable: "Animals",
                        principalColumn: "AnimalId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AnimalVaccinations",
                columns: table => new
                {
                    VaccId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AnimalId = table.Column<int>(type: "int", nullable: false),
                    VaccName = table.Column<string>(type: "varchar(200)", unicode: false, maxLength: 200, nullable: false),
                    AdministeredDate = table.Column<DateOnly>(type: "date", nullable: false),
                    DoseGivenMl = table.Column<float>(type: "real", nullable: false),
                    ReasonAdministered = table.Column<string>(type: "varchar(300)", unicode: false, maxLength: 300, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnimalVaccinations", x => x.VaccId);
                    table.ForeignKey(
                        name: "FK_AnimalVaccinations_Animals_AnimalId",
                        column: x => x.AnimalId,
                        principalTable: "Animals",
                        principalColumn: "AnimalId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AdoptionApplications",
                schema: "AdptApp",
                columns: table => new
                {
                    ApplicationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AdopterUserId = table.Column<int>(type: "int", nullable: false),
                    AnimalId = table.Column<int>(type: "int", nullable: false),
                    ApplicationStatus = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    ApplicationSubmissionDate = table.Column<DateOnly>(type: "date", nullable: false),
                    YearsOfPetExperience = table.Column<int>(type: "int", nullable: false),
                    HomeType = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    NumOfHomeOccupants = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdoptionApplications", x => x.ApplicationId);
                    table.ForeignKey(
                        name: "FK_AdoptionApplications_Animals_AnimalId",
                        column: x => x.AnimalId,
                        principalTable: "Animals",
                        principalColumn: "AnimalId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AdoptionApplications_Users_AdopterUserId",
                        column: x => x.AdopterUserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FavoritedAnimals",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    AnimalId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FavoritedAnimals", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FavoritedAnimals_Animals_AnimalId",
                        column: x => x.AnimalId,
                        principalTable: "Animals",
                        principalColumn: "AnimalId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FavoritedAnimals_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ApplicantsOwnedPets",
                schema: "AdptApp",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ApplicationId = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Breed = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DateOfBirth = table.Column<DateOnly>(type: "date", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApplicantsOwnedPets", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ApplicantsOwnedPets_AdoptionApplications_ApplicationId",
                        column: x => x.ApplicationId,
                        principalSchema: "AdptApp",
                        principalTable: "AdoptionApplications",
                        principalColumn: "ApplicationId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AdoptionApplications_AdopterUserId",
                schema: "AdptApp",
                table: "AdoptionApplications",
                column: "AdopterUserId");

            migrationBuilder.CreateIndex(
                name: "IX_AdoptionApplications_AnimalId",
                schema: "AdptApp",
                table: "AdoptionApplications",
                column: "AnimalId");

            migrationBuilder.CreateIndex(
                name: "IX_AnimalDietRestrictions_AnimalId",
                table: "AnimalDietRestrictions",
                column: "AnimalId");

            migrationBuilder.CreateIndex(
                name: "IX_AnimalVaccinations_AnimalId",
                table: "AnimalVaccinations",
                column: "AnimalId");

            migrationBuilder.CreateIndex(
                name: "IX_ApplicantsOwnedPets_ApplicationId",
                schema: "AdptApp",
                table: "ApplicantsOwnedPets",
                column: "ApplicationId");

            migrationBuilder.CreateIndex(
                name: "IX_FavoritedAnimals_AnimalId",
                table: "FavoritedAnimals",
                column: "AnimalId");

            migrationBuilder.CreateIndex(
                name: "IX_FavoritedAnimals_UserId_AnimalId",
                table: "FavoritedAnimals",
                columns: new[] { "UserId", "AnimalId" },
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AnimalDietRestrictions");

            migrationBuilder.DropTable(
                name: "AnimalVaccinations");

            migrationBuilder.DropTable(
                name: "ApplicantsOwnedPets",
                schema: "AdptApp");

            migrationBuilder.DropTable(
                name: "FavoritedAnimals");

            migrationBuilder.DropTable(
                name: "AdoptionApplications",
                schema: "AdptApp");

            migrationBuilder.DropTable(
                name: "Animals");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
