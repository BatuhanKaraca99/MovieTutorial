﻿using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<MovieTutorial.Web.MovieDB.MovieCastRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = MovieTutorial.Web.MovieDB.MovieCastRow;

namespace MovieTutorial.Web.MovieDB
{
    public interface IMovieCastSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MovieCastSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieCastSaveHandler
    {
        public MovieCastSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}