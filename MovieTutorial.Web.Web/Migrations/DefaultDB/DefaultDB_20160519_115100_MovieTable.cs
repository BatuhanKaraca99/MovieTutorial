using FluentMigrator;
using System;

namespace MovieTutorial.Web.Migrations.DefaultDB
{
    [Migration(20160519115100)]
    //yyyyMMdd_HHmmss formatı
    //unique key
    // FluentMigrator([dbo].[VersionInfo]) özel tableında key kaydedilir
    public class DefaultDB_20160519_115100_MovieTable: AutoReversingMigration
    {
        public override void Up()
        {
            Create.Schema("mov");

            Create.Table("Movie").InSchema("mov")
                .WithColumn("MovieId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("Title").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("Storyline").AsString(Int32.MaxValue).Nullable()
                .WithColumn("Year").AsInt32().Nullable()
                .WithColumn("ReleaseDate").AsDateTime().Nullable()
                .WithColumn("Runtime").AsInt32().Nullable();
        }
    }
}