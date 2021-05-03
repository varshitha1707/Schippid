import React, {Component} from 'react';
import  Nav  from '../pages/Nav';


class Header extends React.Component {
    render() {
        return(
            <div>
                {/* <!-- Header --> */}
<header class="header bg-primary">
    {/* <!-- Empty Space --> */}
    <div class="sm-space"></div>
    {/* <!--/ End Empty Space --> */}
    <div class="header-inner">
        <nav class="navbar">
            <Nav>
            {/* <div class="container">
                <a class="navbar-brand logo md-font-size font-family-secondary text-dark-gray mr-0 mr-sm-5" href="/">
                    <img src="assets/images/finalfinal.png" class="logo-img" alt="logo"/>
                </a>
             
                <ul class="navbar-nav">
                    <li class="nav-item">
                           
                           <a href="#C" class="btn btn-md btn-round btn-secondary px-4">Join Us</a> 
                            
                    </li>  </ul>
            </div> */}
            </Nav>
        </nav>
    </div>
    {/* <!-- Empty Space --> */}
    <div class="sm-space bg-primary"></div>
    {/* <!--/ End Empty Space --> */}
</header>
{/* <!--/ End Header --> */}
            </div>
        )
    }
}

export default Header