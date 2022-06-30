using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<MovieTutorial.Web.MovieDB.MovieGenresRow>;
using MyRow = MovieTutorial.Web.MovieDB.MovieGenresRow;

namespace MovieTutorial.Web.MovieDB
{
    public interface IMovieGenresListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class MovieGenresListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMovieGenresListHandler
    {
        public MovieGenresListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}