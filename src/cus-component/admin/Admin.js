import React, { Component } from 'react';
import Home from './Home';
import Categories from './Categories';

export default class Admin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            home: true,
            categories: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        var ele = e.target.innerHTML.toLowerCase();
        
        if(ele === 'categories'){
            this.setState({home: false});
            this.setState({categories: true});
        }else {
            this.setState({home: true});
            this.setState({categories: false});
        }           
    }
    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <a className="navbar-brand" href="home.html" onClick={this.handleClick}>Movies YouTube</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/admin" onClick={this.handleClick}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/categories" onClick={this.handleClick}>Categories</a>
                            </li>                       
                        </ul>
                    </div>
                    </nav>
                </div>
                <div className="container m-4">
                {this.state.home? <Home /> : <Categories />}
                </div>
            </div>
        )
    }
}
