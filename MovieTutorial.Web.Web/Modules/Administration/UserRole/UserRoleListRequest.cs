using Serenity.Services;

namespace MovieTutorial.Web.Administration
{
    public class UserRoleListRequest : ServiceRequest
    {
        public int? UserID { get; set; }
    }
}