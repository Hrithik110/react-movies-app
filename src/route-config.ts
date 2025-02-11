import path from "path";
import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexActors from "./actors/IndexActors";
import CreateGenre from "./Genres/CreateGenre";
import EditGenre from "./Genres/EditGenre";
import IndexGenres from "./Genres/IndexGenres";
import LandingPage from "./LandingPage";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";
import CreateMovieTheatre from "./movieThreatres/CreateMovieTheatre";
import EditMovieTheatre from "./movieThreatres/EditMovieTheatre";
import IndexMovieTheatres from "./movieThreatres/IndexMovieThreatres";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";

const routes = [
    {
        path: "/genres",
        element: IndexGenres
    },
    {
        path: "/genres/create",
        element: CreateGenre
    }, {
        path: '/genres/edit/:id',
        element: EditGenre
    },


    {
        path: "/actors",
        element: IndexActors
    },
    {
        path: "/actors/create",
        element: CreateActor
    }, {
        path: "/actors/edit/:id",
        element: EditActor
    },


    {
        path: "/movietheatres",
        element: IndexMovieTheatres
    },
    {
        path: "/moviethreatres/create",
        element: CreateMovieTheatre
    }, {
        path: "/moviethreatres/edit/:id",
        element: EditMovieTheatre
    },

    {
        path: "/movies/create",
        element: CreateMovie
    },
    {
        path: "/movies/edit/:id",
        element: EditMovie
    }, {
        path: "/movies/filter",
        element: FilterMovies
    },

    {
        path: "/",
        element: LandingPage
    },

    {
        path:"*",
        element: RedirectToLandingPage

    }
]

export default routes;