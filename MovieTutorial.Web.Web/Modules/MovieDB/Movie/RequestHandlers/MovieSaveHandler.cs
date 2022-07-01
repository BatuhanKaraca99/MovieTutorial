using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<MovieTutorial.Web.MovieDB.MovieRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = MovieTutorial.Web.MovieDB.MovieRow;
using System.Linq;

namespace MovieTutorial.Web.MovieDB
{
    public interface IMovieSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MovieSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieSaveHandler
    {
        public MovieSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}