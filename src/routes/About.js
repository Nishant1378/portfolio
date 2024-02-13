import React from 'react'
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImg2 from '../components/heroImg2/HeroImg2';
import AboutPage from '../components/aboutPage/AboutPage';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT" text="I'm a Front-End Developer." />
      <AboutPage/>
      <Footer/>
    </div>
  )
}

export default About
