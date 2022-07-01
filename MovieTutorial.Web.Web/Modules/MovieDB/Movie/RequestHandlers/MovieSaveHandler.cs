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
        private IMovieCastDeleteHandler MovieCastDeleteHandler { get; }
        private IMovieCastSaveHandler MovieCastSaveHandler { get; }
        public MovieSaveHandler(IRequestContext context)
             : base(context)
        {
        }

        protected override void AfterSave()
        {
            base.AfterSave();
            SetMovieCastRelation();
        }

        private void SetMovieCastRelation()
        {
            if(Row.CastList != null)
            {
                var mc = MovieCastRow.Fields;
                var oldList = IsCreate ? null :
                    Connection.List<MovieCastRow>(
                        mc.MovieId == this.Row.MovieId.Value);

                var oldById = oldList.ToDictionary(x => x.MovieCastId.Value);
                var newById = Row.CastList.ToLookup(x => x.MovieCastId);

                //eski objeler yeni listede yoksa sil
                foreach(var row in oldList.Where(x => !newById.Contains(x.MovieCastId)))
                    {
                    MovieCastDeleteHandler.Delete(UnitOfWork, new() { EntityId = row.MovieCastId });
                }

                foreach(var row in Row.CastList)
                {
                    var entity = row.Clone(); //Objeyi klonlayarak request datanın bağımlı fonksiyornlarını değiştirmiyoruz
                    entity.MovieId = Row.MovieId.Value;
                    //id null ise veya eski liste aynı idye sahip değilse ya da güncellersek
                    if(row.MovieCastId == null || !oldById.ContainsKey(row.MovieCastId.Value))
                    {
                        entity.MovieCastId = null;
                        MovieCastSaveHandler.Create(UnitOfWork, new()
                        {
                            Entity = entity
                        });
                    }
                    else
                    {
                        MovieCastSaveHandler.Update(UnitOfWork, new()
                        {
                            Entity = entity
                        });
                    }
                }
            }
        }
    }
}