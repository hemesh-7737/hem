import React from 'react';
import '../components/Custom.css';
import logo from './assets/logo.png'

const Navbar = () => {
    return (
        <nav>
            <div className="navbarr-banne">
                <div className="navbar-logo-content">
                    <div className="navbar-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="navbar-container">
                        <div className="navbar-content">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Services</a></li>
                                <li><a href="/">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )

};


export default Navbar;
