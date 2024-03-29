﻿using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MovieTutorial.Web.MovieDB.Columns
{
    [ColumnsScript("MovieDB.Person")]
    [BasedOnRow(typeof(PersonRow), CheckNames = true)]
    public class PersonColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int PersonId { get; set; }
        [EditLink]
        public string FirstName { get; set; }
        public string Lastname { get; set; }
        public DateTime Birthdate { get; set; }
        public string BirthPlace { get; set; }
        public int Gender { get; set; }
        public int Height { get; set; }
    }
}