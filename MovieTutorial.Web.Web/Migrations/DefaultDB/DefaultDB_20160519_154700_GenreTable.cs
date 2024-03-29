using FluentMigrator;

namespace MovieTutorial.Web.Migrations.DefaultDB
{
    [Migration(20160519_154700)]
    public class DefaultDB_20160519_154700_GenreTable:Migration
    {
        public override void Up()
        {
            Create.Table("Genre").InSchema("mov")
                .WithColumn("GenreId").AsInt32().NotNullable()
                    .PrimaryKey().Identity()
                .WithColumn("Name").AsString(100).NotNullable();

            Alter.Table("Movie").InSchema("mov")
                .AddColumn("GenreId").AsInt32().Nullable()
                    .ForeignKey("FK_Movie_GenreId", "mov", "Genre", "GenreId");

        }
        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}