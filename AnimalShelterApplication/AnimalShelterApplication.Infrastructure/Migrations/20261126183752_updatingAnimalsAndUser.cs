using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AnimalShelterApplication.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class updatingAnimalsAndUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Address",
                table: "Users");

            migrationBuilder.AddColumn<string>(
                name: "Species",
                table: "Animals",
                type: "varchar(100)",
                unicode: false,
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<float>(
                name: "Weight",
                table: "Animals",
                type: "real",
                unicode: false,
                maxLength: 100,
                nullable: false,
                defaultValue: 0f);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Species",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "Weight",
                table: "Animals");

            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Users",
                type: "nvarchar(300)",
                maxLength: 300,
                nullable: false,
                defaultValue: "");
        }
    }
}
