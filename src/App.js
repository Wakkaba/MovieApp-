import React,{Component, Suspense} from 'react';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Navigation from './components/Header/Header'
import MovieListPage from './components/MoviesList/MoviesListPage'
import MovieDetailPage from './components/MoviesInfoPage/MoviesInfoPage';
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

class App extends Component {
    // componentDidMount() {
    //     test.getMovies('3/discover/movie?page=1').then(res => res.json()).then(console.log)
    // }
    render() {
        return (
            <Suspense fallback={(<div>Loading...</div>)}>
                <Navigation />
                <div style={{  backgroundColor: '#0074D9',  minHeight: 'calc(100vh - 80px)' }}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={MovieListPage} />
                            <Route exact path="/movie/:movieId" component={MovieDetailPage} />
                        </Switch>
                    </Router>
                </div>
            </Suspense>
        );
    }

}

export default App;
