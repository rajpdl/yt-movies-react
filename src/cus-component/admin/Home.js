import React, { Component } from 'react'
import {getAllMovies} from './../../utils/getAllMovies';
import { getMovieById } from './../../utils/getMovieById';
import Create from './Create';
import MovieDetail from './MovieDetail';

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movies : [],
             create: false,
             loading: false,
             detail: false,
             movie: {}
        };
        this.handleClick = this.handleClick.bind(this); 
        this.handleNavigation = this.handleNavigation.bind(this);
    }
    
    async componentDidMount() {
        var movies = await getAllMovies();
        this.setState({movies: movies});
    }
    async handleNavigation(e) {
        var movie = await getMovieById(e.target.id);
        this.setState({movie: movie});
        this.setState({detail: true});
    }
    handleClick(e) {
        this.setState({create: true});
    }


    render() {
        if(this.state.create) {
            return <Create />;
        }
        if(this.state.detail) {
            return <MovieDetail movie={this.state.movie} />;
        }
        return (
            <div className="">
                <button onClick={this.handleClick} className="btn btn-default">Create New Movie</button>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>URL</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => {
                            return (<tr key={movie.id}>
                                <td className='navigator' id={movie.id} onClick={this.handleNavigation}>{movie.title}</td>
                                <td>{movie.description}</td>
                                <td>{movie.url}</td>
                            </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
