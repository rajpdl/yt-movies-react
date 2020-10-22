import React, { Component } from 'react'
import {getAllCategory} from '../../utils/getAllCategory';
import { getCategoryById } from '../../utils/getCategoryById';
import CreateCate from './CreateCate';
import CategoryDetail from './CategoryDetail';
import './../../App.css';

export default class Categories extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             categories: [],
             create: false,
             category: {},
             detail: false

        };
        this.handleClick = this.handleClick.bind(this);
        this.handleNavigation = this.handleNavigation.bind(this);
    }
    
    handleClick() {
        this.setState({create: true});
    }

    async handleNavigation(e) {
        var category = await getCategoryById(e.target.id);
        this.setState({category: category});
        this.setState({detail: true});
        
    }

    async componentDidMount() {
        var categories = await  getAllCategory();
        this.setState({categories: categories});
    }

    render() {
        if(this.state.create) {
            return <CreateCate />
        }
        if(this.state.detail) {
            return <CategoryDetail category={this.state.category}/>;
        }
        return (
            <div className="">
                <button onClick={this.handleClick} className="btn btn-default">Create New Category</button>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Short Description</th>
                        <th>Long Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.categories.map(category => {
                            return (<tr key={category.id}>
                                <td  className ="navigator" id={category.id} onClick={this.handleNavigation}>{category.name}</td>
                                <td>{category.short_description}</td>
                                <td>{category.long_description}</td>
                            </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        )
                    }
                }