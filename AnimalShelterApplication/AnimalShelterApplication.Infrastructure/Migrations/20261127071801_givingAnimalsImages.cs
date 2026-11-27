using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AnimalShelterApplication.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class givingAnimalsImages : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Animals",
                type: "varchar(300)",
                unicode: false,
                maxLength: 300,
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Animals");
        }
    }
}
