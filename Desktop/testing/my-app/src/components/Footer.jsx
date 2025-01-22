import React from "react";
import logo from "./assets/logo.png";

const Footer = () => {
    return (
        <footer>
            <div className="footer_services_contact">
                <div className="footer_services_contact_content">
                    <div className="footer_logo_newsletter">
                        <div className="footer_logo">
                            <img src={logo} alt="Footer logo" />
                        </div>
                        <div className="footer_Newsletter">
                            <h2>Newsletter</h2>
                            <p>Subscribe to our newsletter and get latest updates and offers.</p>
                        </div>
                    </div>
                    <div className="footer_form_heading">
                        <form action={null}>
                            <div className="footer_form">
                                <div className="footer_form_input">
                                    <input type="Email" placeholder="Enter your email" />
                                    <input type="Full Name" placeholder="Enter your Name" />
                                    <input type="Mobile Number" placeholder="Enter your Mobile Number" />
                                    <button type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="footer_services">
                        <div className="footer_services_heading">
                            <h2>Services</h2>
                        </div>
                        <div className="footer_services_list">
                            <ul>
                                <li><a href="#">Website development</a></li>
                                <li><a href="#">Mobile App development</a></li>
                                <li><a href="#">Digital Marketing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_contact">
                        <div className="footer_quick_links">
                            <h2>Quick Links</h2>
                        </div>
                        <div className="footer_quick_links_list">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_social_media_bottom">
                <div className="footer_social_media">
                    <div className="footer_social_media_content">
                        <p>Connect with me on:</p>
                    </div>
                    <div className="footer_social_media_icons">
                        <ul>
                            <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="footer_bottom_content">
                        <p>Created by: <a href="#">Kushel Digi</a></p>
                        <p>© 2025 All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;