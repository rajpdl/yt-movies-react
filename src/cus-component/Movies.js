import React, { Component } from 'react';
import { getCategoryById } from './../utils/getCategoryById';

export default class Movies extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             categoryName: ""
        }
    }
    async componentDidMount() {
        var category = await getCategoryById(this.props.movie.category_id);
        this.setState({categoryName: category.name});
    }

    render() {
        return (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card">
                <div className="card-body">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={this.props.movie.url} 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen="allowfullscreen"></iframe>
                    </div>
                    <h4 className="card-title">{this.props.movie.title}</h4>
                    <p className="card-text">{this.props.movie.description}</p>   
                    <p>{this.state.categoryName} Movie</p>
                </div>
                </div>
            </div>
        );
    }
}
