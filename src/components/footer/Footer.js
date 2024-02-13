import "./footer.css";
import React from 'react';
import {FaHome, FaPhone, FaMailBulk, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaDiscord} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={30} style={{color:"#fff", marginRight:"2rem"}} />
                    <div>
                        <p>508 B-wing Phase 1, NEo City</p>
                        <p>Pune, Maharashtra</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
                        +91 9146970283
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
                        nishantpawar1319@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>Connect with me on </h4>
                <div className="social">
                    <a href="https://www.linkedin.com/in/nishant-pawar"><FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}} /></a>
                    <a href="https://github.com/Nishant1378"><FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}} /></a>
                    <a href="https://twitter.com/Nishant137807"><FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}} /></a>
                    {/* <a href="https://discord.com/"><FaDiscord size={30} style={{color:"#fff", marginRight:"1rem"}} /></a> */}
                    <a href="https://www.instagram.com/devil_king_1378"><FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}} /></a>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
