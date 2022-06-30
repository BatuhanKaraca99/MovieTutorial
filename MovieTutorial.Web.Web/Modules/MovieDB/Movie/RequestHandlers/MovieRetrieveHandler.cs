using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<MovieTutorial.Web.MovieDB.MovieRow>;
using MyRow = MovieTutorial.Web.MovieDB.MovieRow;

namespace MovieTutorial.Web.MovieDB
{
    public interface IMovieRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class MovieRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieRetrieveHandler
    {
        public MovieRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }

        protected override void OnReturn()
        {
            base.OnReturn();

            var mc = MovieCastRow.Fields;
            Row.CastList = Connection.List<MovieCastRow>(q => q
               .SelectTableFields()
               .Select(mc.PersonFullname)
               .Where(mc.MovieId == Row.MovieId.Value));
        }
    }
}