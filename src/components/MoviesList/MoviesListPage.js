import React, {useEffect, useState} from 'react'
import {API_URL, API_KEY, IMAGE_URL} from '../../config'
import MainImage from './MainImage'
import { Typography, Row, Button } from 'antd';
// import GridCard from '../GridCard/GridCard'



const { Title } = Typography;

function MovieResults() {

    const [Movies, setMovies] = useState([]);

     useEffect(() => {
         fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
             .then(response => response.json())
             .then(response => {
                 console.log(response);
                 setMovies(response.result)
             })
     }, [] );

return (
    <div style={{width:'100%', margin: 0}}>
        {/*Movie Image Main*/}
        <MainImage/>



        {/*Body*/}
        <div style={{width:'85%', margin:'1rem auto'}}>
            <Title level={2}> Trending Movies</Title>
            <hr/>
            {/*Movie Info*/}
            <Row gutter={[16, 16]}>
                {Movies && Movies.map((movie, index) => (
                    <React.Fragment key={index}>

                    </React.Fragment>
                ))}
            </Row>
            {/*Button More Movies*/}
            <br />
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <button onClick>More Movies</button>
            </div>
        </div>
    </div>
);
}
export default MovieResults;