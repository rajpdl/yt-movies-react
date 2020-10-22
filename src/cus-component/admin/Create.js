import React, { Component } from 'react';
import {getAllCategory} from '../../utils/getAllCategory';
import {postNewMovie} from './../../utils/postNewMovie';
import  Home from './Home';    

export default class Create extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             back: false,
             categories: [],
             title: "",
             description: "",
             url: "",
             category_id: ""

        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        var name = e.target.name;
        if(name === "title"){
            this.setState({title: e.target.value});
        }
        if(name === "description"){
            this.setState({description: e.target.value});
        }
        if(name === "url") {
            this.setState({url: e.target.value});
        }

        if(name === "category_id") {
            this.setState({category_id: e.target.value});
        }
    }
    
    handleClick(e) {
        this.setState({back: true});
    }

    async handleSubmit(e) {
        e.preventDefault();
        if(this.state.title == "" || this.state.description == "" || this.state.url == "" || this.state.category_id == "") {
            return alert('Please enter the full info');
        } 
        var movie = {
            title: this.state.title,
            description: this.state.description,
            url: this.state.url,
            category_id: this.state.category_id
        };
        
        var movie = await postNewMovie(movie);
        alert(`movie is created with ${movie.title} title`);
        this.setState({title: ""});
        this.setState({description: ""});
        this.setState({url: ""});
        this.setState({category_id: ""});
    }
    async componentDidMount() {
        var categories = await getAllCategory();
        this.setState({categories: categories});
    }

    render() {
        if(this.state.back) {
            return <Home />
        }
        return (
            <div>
                <h2>Create New Movie</h2>
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
                        <label htmlFor="sel1">Select list:</label>
                        <select className="form-control" name="category_id" value={this.state.category_id} onChange={this.handleChange}>
                            <option value="">Select one of this</option>
                            {this.state.categories.map(category => {
                                return <option value={category.id} key={category.id}>{category.name}</option>
                            })}
                        </select>
                    </div>
                    <button onClick={this.handleClick} className='btn btn-danger mr-4'>Go Back</button>
                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
                <br />
                
            </div>
        )
    }
}
