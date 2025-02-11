import { actorsMovieDTO } from "../actors/actors.model";

export interface moviesDTO {
    id: number;
    title: string;
    poster: string;
}

export interface moviesCreationDTO{
    movieTheatersIds?: number[];
    title: string;
    inTheaters: boolean;
    trailer: string;
    releaseDate?:Date;
    poster?:File;
    posterURL?:string;
    genresIds?:number[];
    actors?: actorsMovieDTO[]
}

export interface landingPageDTO{
    inTheatre?:moviesDTO[];
    upcomingReleases?:moviesDTO[];
}