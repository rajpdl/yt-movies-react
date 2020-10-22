import React, { Component } from 'react';
import Home from './Home';
import { getAllCategory } from './../../utils/getAllCategory';
import { deleteMovieById } from './../../utils/deleteMovieById';
import { postUpdateMovie } from './../../utils/postUpdateMovie';

export default class MovieDetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             back: false,
             id: this.props.movie.id,
             title: this.props.movie.title,
             description: this.props.movie.description,
             url: this.props.movie.url,
             category_id: this.props.movie.category_id,
             categories: []
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleClick() {
        this.setState({back: true});
    }

    async handleSubmit(e) {
        e.preventDefault();
        var movie = {
            id: this.state.id,
            title: this.state.title,
            url: this.state.url,
            description: this.state.description,
            category_id: this.state.category_id
        };
        var movie = await postUpdateMovie(movie);
        alert(`Movie is updated with ${movie.title} title.`);
        this.setState({back: true});
    }
    async handleDelete() {
        var bool = await deleteMovieById(this.state.id);
        if(bool) {
            this.setState({back: true});
            return alert('Movie is deleted');            
        }
        return alert("Some error occurred during deleting");
    }
    
    async componentDidMount() {
        var categories = await getAllCategory();
        this.setState({categories: categories});
    }

    handleChange(e) {
        var name = e.target.name,
            value = e.target.value;
        if(name === 'title'){
            this.setState({title: value});
        }
        if(name === 'description'){
            this.setState({description: value});
        }
        if(name === 'url') {
            this.setState({url: value});
        }
        if(name === 'category_id') {
            this.setState({category_id: value});
        }
    }
    render() {
        if(this.state.back) {
            return <Home />
        }
        return (
            <div>
                <h1>Movie Detail</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input type="text" className="form-control" name="description" value={this.state.description} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">URL:</label>
                        <input type="text" className="form-control" value={this.state.url} name="url" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="sel1">Movie Type: </label>
                        <select className="form-control" name="category_id" value={this.state.category_id} onChange={this.handleChange}>
                            <option value="">Select one of this</option>
                            {this.state.categories.map(category => {
                                return <option value={category.id} key={category.id}>{category.name}</option>
                            })}
                        </select>
                    </div>
                    <button className="btn btn-danger mr-4" onClick={this.handleClick}>Back</button>
                    <button type="button" className="btn btn-primary mr-4" onClick={this.handleDelete}>Delete</button>    
                    <button type="submit" className="btn btn-primary mr-4">Update</button>                    
                </form>
                <br />
                
            </div>
        )
    }
}
