import { GET_MOVIES, GET_GENRES } from '../action-types';


export const getMovie = (movieUrl) => ({
    type: GET_MOVIES,
    payload: {
        movieUrl
    }
});
export const getGenre = (movieUrl) => ({
    type: GET_GENRES,
    payload: {
        movieUrl
    }
});