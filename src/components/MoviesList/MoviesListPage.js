import React, {useEffect, useState} from 'react'
import {API_URL, API_KEY, IMAGE_URL,IMAGE_SIZE,POSTER_SIZE} from '../../config'
import MainImage from './MainImage'
import { Typography, Row, Button } from 'antd';
import GridPoster from '../GridPoster/GridPoster'



const { Title } = Typography;

function MovieListPage() {

    const [Movies, setMovies] = useState([]);
    const [CurrentPage, setCurrentPage] = useState(0);

     useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
         fetchMovies(endpoint)
     }, [] );

     const fetchMovies = (endpoint) => {
         fetch(endpoint)
             .then(result => result.json())
             .then(result => {
                 console.log(result);
                 setMovies([...Movies, ...result.results])
                 setCurrentPage(result.page)
             })

     };

     const LoadMoreClick = () => {
         const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;

         fetchMovies(endpoint)
     };

return (
    <div style={{width:'100%', margin: 0}}>
        {/*Movie Image Main*/}
        {Movies[0] && <MainImage
            image={`${IMAGE_URL}${IMAGE_SIZE}${Movies[0].backdrop_path}`}
            title={Movies[0].original_title}
            text={Movies[0].overview}
        />}




        {/*Body*/}
        <div style={{width:'85%', margin:'1rem auto', color:'white'}}>
            <Title level={2}> Trending Movies</Title>
            <hr />

            {/*Movie Columns*/}

            <Row  gutter={[16, 16]}>
                {Movies && Movies.map((movie, index) => (
                    <React.Fragment key={index}>
                        <GridPoster
                            image={movie.poster_path ? `${IMAGE_URL}${POSTER_SIZE}${movie.poster_path}` : null}
                            movieId={movie.id}
                        />
                    </React.Fragment>
                ))}
            </Row>
            {/*Button More Movies*/}
            <br />
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <Button onClick={LoadMoreClick}>More Movies</Button>
            </div>
        </div>
    </div>
);
}
export default MovieListPage;