import React from 'react'
import Navbar from "../components/navbar/Navbar";
import HeroImg2 from "../components/heroImg2/HeroImg2";
import Footer from "../components/footer/Footer";
import Projects from '../components/projects/Projects';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS" text="Some of my recent works" />
      <Projects/>
      <Footer/>
    </div>
  )
}

export default Project
