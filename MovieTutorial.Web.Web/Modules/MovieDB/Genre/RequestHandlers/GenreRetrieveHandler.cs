﻿using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<MovieTutorial.Web.MovieDB.GenreRow>;
using MyRow = MovieTutorial.Web.MovieDB.GenreRow;

namespace MovieTutorial.Web.MovieDB
{
    public interface IGenreRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class GenreRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IGenreRetrieveHandler
    {
        public GenreRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}