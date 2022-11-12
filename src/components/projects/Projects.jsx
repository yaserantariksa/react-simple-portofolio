import "./projects.css";
import StoreProject from "../../img/webprojectestore.png";
import FinApp from "../../img/mobileprojectfinapp.webp";
import PersonalApp from "../../img/mobileprojectpersonalassistant.webp";
import Multiplatform from "../../img/multiplatformproject.webp";
import MobileApp from "../../img/mobileapp.webp";

import React from "react";

function Projects() {
  return (
    <div className="projects">
      <h2 className="projects-tittle">My Projects</h2>
      <div className="project-group">
        <div className="projects-list">
          <div className="projects-item">
            <img src={StoreProject} alt="" className="projects-cover" />
            <h3 className="projects-desc">e Store Web App</h3>
          </div>
          <div className="projects-item">
            <img src={FinApp} alt="" className="projects-cover" />
            <h3 className="projects-desc">Financial Planner App</h3>
          </div>
          <div className="projects-item">
            <img src={PersonalApp} alt="" className="projects-cover" />
            <h3 className="projects-desc">Personal Planner App</h3>
          </div>
        </div>
        <div className="projects-list">
          <div className="projects-item">
            <img src={MobileApp} alt="" className="projects-cover" />
            <h3 className="projects-desc">Mobile App </h3>
          </div>
          <div className="projects-item">
            <img src={Multiplatform} alt="" className="projects-cover" />
            <h3 className="projects-desc">Multiplatform Mobile + Web </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
