import "./projects.css";
import Projects from "./Projects";
import WorkData from "./WorkData";

import React from "react";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkData.map((val, ind) => {
            return(
                <Projects 
                key={ind} 
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}/>
            )
        } ) }
      </div>
    </div>
  )
}

export default Work
