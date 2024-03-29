﻿using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = MovieTutorial.Web.MovieDB.PersonRow;

namespace MovieTutorial.Web.MovieDB
{
    public interface IPersonDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPersonDeleteHandler
    {
        public PersonDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}