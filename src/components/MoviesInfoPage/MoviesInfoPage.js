import React, {useEffect, useState} from 'react'
import {API_URL, API_KEY, IMAGE_URL,IMAGE_SIZE} from '../../config'
import MainImage from '../MoviesList/MainImage'
import MovieInfo from '../MoviesInfoPage/MoviesInfoCard'


export default function MovieDetailPage(props) {
    const movieId = props.match.params.movieId;
    const [Movie, setMovie] = useState([]);
    const [LoadingForMovie, setLoadingForMovie] = useState(true);
    const movieVariable = {
        movieId: movieId
    };
    useEffect(() => {
        let endpointForMovieInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
        fetchDetailInfo(endpointForMovieInfo)

        // const movieId = props.match.params.movieId
        //
        // fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
        // .then(result => result.json())
        // .then(result => {
        //     console.log(result);
        //     setMovie(result);
        // })

    }, []);

    const fetchDetailInfo = (endpoint) => {

        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                console.log(result);
                setMovie(result);
                setLoadingForMovie(false)
            })}

    return (
        <div>
            {/*Main Image*/}
            {Movie && <MainImage
                image={`${IMAGE_URL}${IMAGE_SIZE}${Movie.backdrop_path}`}
                title={Movie.original_title}
                text={Movie.overview}
            />}

            {/*Movie info*/}
            {!LoadingForMovie ?
                <MovieInfo movie={Movie} />
                :
                <div>loading...</div>
            }

            <br />
        </div>
    )
}
