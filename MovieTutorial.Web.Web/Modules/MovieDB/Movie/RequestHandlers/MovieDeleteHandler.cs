using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = MovieTutorial.Web.MovieDB.MovieRow;

namespace MovieTutorial.Web.MovieDB
{
    public interface IMovieDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class MovieDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMovieDeleteHandler
    {
        public IMovieCastDeleteHandler MovieCastDeleteHandler { get; }
        public MovieDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
        protected override void OnBeforeDelete()
        {
            base.OnBeforeDelete();

            var mc = MovieCastRow.Fields;
            foreach ( var detailID in Connection.Query<Int32>(
                new SqlQuery()
                    .From(mc)
                    .Select(mc.MovieCastId)
                    .Where(mc.MovieId == Row.MovieId.Value)))
             {
                MovieCastDeleteHandler.Delete(this.UnitOfWork, new()
                {
                    EntityId = detailID
                });
                    
            }
        }
    }
}