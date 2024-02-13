import React from 'react'
import Navbar from "../components/navbar/Navbar";
import HeroImg from "../components/heroImg/HeroImg";
import Work from "../components/projects/Work";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
     <Navbar/>
     <HeroImg/>
     <Work/>
     <Footer/>
    </div>
  )
}

export default Home
