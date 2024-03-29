﻿using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MovieTutorial.Web.MovieDB.Forms
{
    [FormScript("MovieDB.Person")]
    [BasedOnRow(typeof(PersonRow), CheckNames = true)]
    public class PersonForm
    {
        public string FirstName { get; set; }
        public string Lastname { get; set; }
        public DateTime Birthdate { get; set; }
        public string BirthPlace { get; set; }
        public int Gender { get; set; }
        public int Height { get; set; }
    }
}