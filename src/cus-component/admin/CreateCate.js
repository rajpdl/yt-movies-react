import React, { Component } from 'react'
import Categories from './Categories';
import { postNewCategory } from './../../utils/postNewCategory';

export default class CreateCate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            back: false,
            name: "",
            short_description: "",
            long_description: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    async handleSubmit(e) {
        e.preventDefault();
        if(this.state.name == "" || this.state.short_description == "" || this.state.long_description == "") {
            return alert('Please enter the full information');
        }
        var category = {
            name: this.state.name,
            short_description: this.state.short_description,
            long_description: this.state.long_description
        };
        var category = await postNewCategory(category);
        this.setState({back: true});
    }

    handleChange(e) {
        var name = e.target.id,
            value = e.target.value;
        if(name === "name"){
            this.setState({name:value});
        }
        if(name === "short_description") {
            this.setState({short_description: value});
        }
        
        if(name === 'long_description') {
            this.setState({long_description: value});
        }
    }

    handleClick(e) {
        this.setState({back: true});
    }
    render() {
        if(this.state.back){
            return <Categories />;
        }
        return (
            <div>
                <h2>Create Category</h2>
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
                    <label htmlFor="short">Long Description:</label>
                    <input type="text" className="form-control" id="long_description" value={this.state.long_description} onChange={this.handleChange}/>
                </div>
                <button type="button" className='btn btn-danger mr-4' onClick={this.handleClick}>Go Back</button>
                <button type="submit" className="btn btn-primary"   >Create</button>
                </form>
                <br />
                
            </div>

        )   
    }
}
