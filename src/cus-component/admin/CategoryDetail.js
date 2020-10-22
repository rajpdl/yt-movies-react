import React, { Component } from 'react'
import Categories from './Categories'
import { deleteCategoryById } from './../../utils/deleteCategoryById';
import { postUpdateCategory } from './../../utils/postUpdateCategory';

export default class CategoryDetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             back: false,
             id: this.props.category.id,
             name: this.props.category.name,
             short_description: this.props.category.short_description,
             long_description: this.props.category.long_description
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleClick(e) {
        this.setState({back: true});
    }

    handleChange(e) {
        var name = e.target.id,
            value = e.target.value;
        if(name === 'name') {
            this.setState({name: value});
        }
        if(name === 'short_description') {
            this.setState({short_description: value});
        }
        if(name === 'long_description') {
            this.setState({long_description: value});
        }
    }
    async handleDelete(e) {
        var bool = await deleteCategoryById(this.state.id);
        if(bool) {
            this.setState({back: true});
            return alert('Category is deleted');
        }
        return alert('Some error occurred.');
    }

    async handleSubmit(e) {
        e.preventDefault();
        var category = {
            id: this.state.id,
            name: this.state.name,
            short_description: this.state.short_description,
            long_description: this.state.long_description
        };
        var category = await postUpdateCategory(category);
        alert(`Category is updated with ${category.name} name.`);
        this.setState({back: true});
    }
    render() {
        if(this.state.back) {
            return <Categories />
        }
        return (
            <div>
                <h1>Category Detail</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="short">Short Description:</label>
                        <input type="text" className="form-control" id="short_description" value={this.state.short_description} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="short">Logn Description:</label>
                        <input type="text" className="form-control" id="long_description" value={this.state.long_description} onChange={this.handleChange}/>
                    </div>
                    <button type="button" onClick={this.handleClick} className="btn btn-danger mr-4">Back</button>
                    <button type="button" onClick={this.handleDelete} className="btn btn-danger mr-4">Delete</button>
                    <button type="submit" className="btn btn-primary"   >Update</button>
                </form>
                <br />
                
            </div>
        )
    }
}
