import React from 'react';
import Contact from './Contact';
import Navbar from './Navbar';
import Project from './Project';
import Slider from './Slider';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar> 
            <Slider></Slider>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;