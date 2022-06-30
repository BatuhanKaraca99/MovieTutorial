using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<MovieTutorial.Web.MovieDB.MovieGenresRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = MovieTutorial.Web.MovieDB.MovieGenresRow;

namespace MovieTutorial.Web.MovieDB
{
    public interface IMovieGenresSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MovieGenresSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieGenresSaveHandler
    {
        public MovieGenresSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}