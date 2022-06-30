using Serenity.ComponentModel;
using System.ComponentModel;

namespace MovieTutorial.Web.MovieDB
{
   [EnumKey("MovieDB.Gender")]
   public enum Gender
    {
        [Description("Male")]
        Male=1,
        [Description("Female")]
        Female=2
    }
}
