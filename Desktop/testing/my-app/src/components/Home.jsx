import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Cards from "../components/Content";



const Home = () => {
    return (
        <div className="Home">
            <Navbar />
            <Cards />
            <Footer />
        </div>
    )
};

export default Home;