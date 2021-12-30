import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import Project from './Project';
import Slider from './Slider';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar> 
            <Slider></Slider>
            <About></About>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;