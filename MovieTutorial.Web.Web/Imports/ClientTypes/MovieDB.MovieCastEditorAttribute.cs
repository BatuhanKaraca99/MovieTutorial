﻿using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace MovieTutorial.Web.MovieDB
{
    public partial class MovieCastEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "MovieTutorial.Web.MovieDB.MovieCastEditor";

        public MovieCastEditorAttribute()
            : base(Key)
        {
        }
    }
}
