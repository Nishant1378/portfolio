import "./projects.css";

import React from "react";
import pro1 from "../../assets/project1.jpg.png";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-contaoner">
        <div className="project-card">
            <img src={pro1} alt="image"/>
            <h2 className="project-title">Ecommerce Website</h2>
            <div className="pro-details">
                <p>This is a text</p>
                <div className="pro-btns">
                    <NavLink to="https://nishant1378.github.io/Ecommerce" className="btn">View</NavLink>
                    <NavLink to="https://github.com/Nishant1378/Ecommerce.git" className="btn">Source</NavLink>
                </div>
            </div>
            <div className="project-card">
            <img src={pro1} alt="image"/>
            <h2 className="project-title">ebook Website</h2>
            <div className="pro-details">
                <p>This is a text</p>
                <div className="pro-btns">
                    <NavLink to="https://nishant1378.github.io/eBook-Website" className="btn">View</NavLink>
                    <NavLink to="https://github.com/Nishant1378/eBook-Website.git" className="btn">Source</NavLink>
                </div>
            </div>
        </div>
        <div className="project-card">
            <img src={pro1} alt="image"/>
            <h2 className="project-title">Ecommerce Website</h2>
            <div className="pro-details">
                <p>This is a text</p>
                <div className="pro-btns">
                    <NavLink to="https://nishant1378.github.io/OCTANET/Landing%20Page/" className="btn">View</NavLink>
                    <NavLink to="https://github.com/Nishant1378/Ecommerce.git" className="btn">Source</NavLink>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
