import React from 'react'
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImg2 from '../components/heroImg2/HeroImg2';
import Form from '../components/contactPage/Form';


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT" text="Let's have a chat" />
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
