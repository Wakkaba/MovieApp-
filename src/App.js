import React from 'react';
import Navigation from './components/Header/Header'
import MovieResults from './components/MoviesList/MoviesListPage'

// class ApiAdapter {
//     constructor() {
//         this.baseMoviesUrl = 'https://api.themoviedb.org'
//     }
//
//     getMovies(endpoint) {
//         return fetch(`${this.baseMoviesUrl}/${endpoint}`, {
//             headers: {
//                 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGNjNTliZGYxMTg2M2IwZjE0M2RjNzRjY2Y0MmY2NiIsInN1YiI6IjVlMDIzYjRhMDI4NDIwMDAxOWIxNWE3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VRMoz-98PTmjz0ARuH1ZPDlkjAeu9_v1o3m9J4lulU0'
//             },
//         })
//     }
// }

// export const test = new ApiAdapter();

class App extends React.Component {
    // componentDidMount() {
    //     test.getMovies('3/discover/movie?page=1').then(res => res.json()).then(console.log)
    // }
    render() {
        return (
            <div>
                <Navigation/>
                <MovieResults/>
            </div>
        );
    }

}

export default App;
