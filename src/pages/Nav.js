import React, { Component } from 'react';

import '../trial.css';

import {MenuItems} from './MenuItems';

export class Nav extends Component{
    state = { clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {

        return(
            <nav className="NavbarItems">
                <div class="container">
                <a class="navbar-brand logo md-font-size font-family-secondary text-dark-gray mr-0 mr-sm-5" href="/">
                    <img src="assets/images/finalfinal.png" class="logo-img" alt="logo"/>
                </a>
                </div>
                <div className= "menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fa fa-bars'}></i>
                    
                </div>
                <ul className = {this.state.clicked ? 'nav-menu-active' : 'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                 {item.title}  
                                </a>
                            </li>
                        )
                    })}
                </ul>
                

            
                
            </nav>          
        )
    }
}
export default Nav

