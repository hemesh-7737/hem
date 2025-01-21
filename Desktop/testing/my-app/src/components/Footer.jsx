import React from "react";

const Footer = () => {
    return (
        <footer>

            <h2>Newsletter</h2>
            <p>Subscribe to our newsletter and get latest updates and offers.</p>
            <form>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
            </form>
            <h2>Services</h2>
            <ul>
                <li><a href="#">Website development</a></li>
                <li><a href="#">Mobile App development</a></li>
                <li><a href="#">Digital Marketing</a></li>
            </ul>
            <h2>Quick Links</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <h2>Follow Me</h2>
            <h3>Connect with me on:</h3>
            <ul>
                <li>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                </li>
                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-linkedin0"></i></a></li>
            </ul>
            <p>Created by: <a href="#">Kushel Digi</a></p>
            <p>© 2025 All rights reserved.</p>
        </footer>
    )
};

export default Footer;