import React from 'react'
import { Col } from 'antd'

export default function GridPoster(props) {
    return (
        <Col lg={6} md={8} xs={24}>
            <div style={{ position:'relative'}}>
                <a href={`/movie/${props.movieId}`}>
                    <img alt='Poster-Preview' src={props.image} style={{width:'100%', height:'320px'}}/>
                </a>
            </div>
        </Col>
    )
}
