using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using Serenity.Extensions.Entities;

namespace MovieTutorial.Web.MovieDB.Columns
{
    [ColumnsScript("MovieDB.MovieCast")]
    [BasedOnRow(typeof(MovieCastRow))]
    public class MovieCastColumns
    {
        [EditLink, Width(220)]
        public String PersonFullname { get; set; }
        [EditLink, Width(150)]
        public string Character { get; set; }
    }
}