﻿using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = MovieTutorial.Web.MovieDB.MovieListRequest;
using MyResponse = Serenity.Services.ListResponse<MovieTutorial.Web.MovieDB.MovieRow>;
using MyRow = MovieTutorial.Web.MovieDB.MovieRow;

namespace MovieTutorial.Web.MovieDB
{
    public interface IMovieListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class MovieListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMovieListHandler
    {
        public static MyRow.RowFields fld => MyRow.Fields;
        public MovieListHandler(IRequestContext context)
             : base(context)
        {
        }
        protected override void ApplyFilters(SqlQuery query)
        {
            base.ApplyFilters(query);

            if (!Request.Genres.IsEmptyOrNull())
            {
                var mg = MovieGenresRow.Fields.As("mg");
                query.Where(Criteria.Exists(
                    query.SubQuery()
                        .From(mg)
                        .Select("1")
                        .Where(
                            mg.MovieId == fld.MovieId &&
                            mg.GenreId.In(Request.Genres))
                        .ToString()));
            }
          }
        }
   }