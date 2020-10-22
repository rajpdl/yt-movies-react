import React, { Component } from 'react';
import './App.css';
import Movies from './cus-component/Movies';
import { getAllCategory } from './utils/getAllCategory';  
import { getAllMovies } from './utils/getAllMovies';
import { getMoviesByCategoryId } from './utils/getMoviesByCategoryId'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       categories: [],
       movies: [],
       available: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    var movies = await  getAllMovies();
    var categories = await getAllCategory();
    this.setState({categories: categories});
    this.setState({movies: movies});
    if(!this.state.movies.length) {
      this.setState({available: false});
    }
  }


  async handleClick(e) {
      e.preventDefault();
      this.setState({available: true});
      var movies = await getMoviesByCategoryId(e.target.id);
      if(movies) {
        this.setState({movies: movies});
      }else {
        this.setState({available: false});
      }      
  }

  render() {    
      return (
        <div>
          <div className='container-fluid'>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
              <a className="navbar-brand" href="home.html">Movies YouTube</a>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/" onClick={this.handleMovies}>All</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle navigator" id="navbardrop" data-toggle="dropdown">
                      Categories
                    </a>
                    <div className="dropdown-menu">
                      {this.state.categories.map((category) => {
                        return <a className="dropdown-item navigator" href={category.id} id={category.id} key={category.id} onClick={this.handleClick}>{category.name}</a>
                      })}
                    </div>
                  </li>
                </ul>
              </div>
          </nav>
        </div>
        <div className="container fixed-nav-margin"> 
             <div className="row">
                {this.state.available? 
                  this.state.movies.map( movie => {
                      return <Movies movie={movie} key={movie.id}/>
                  })
                 : <div className="container"><div className="jumbotron text-primary">No Videos Till Now</div></div>}            
             </div>
            </div>
        </div>
      );
  }
}

export default App;
