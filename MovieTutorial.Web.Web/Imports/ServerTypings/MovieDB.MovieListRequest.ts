namespace MovieTutorial.Web.MovieDB {
    export interface MovieListRequest extends Serenity.ListRequest {
        Genres?: number[];
    }
}
