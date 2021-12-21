import React from 'react';
import AboutUs from '../components/About/AboutUs';
import Fit from '../components/fitss Showcase/Fit';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Header/Banner';
import Section from '../components/Section/Section';

const HomeScreen = () => {
    return (
        <>
            <Banner />
            <Fit />
            <Section></Section>
            <AboutUs />
            <Footer />
        </>
    )
}

export default HomeScreen
