import React from "react";
import "../css/Header.css";

export default function Header() {
  return (
    <div className="Header">
        <div className="HeaderContainer">
            <p className='HeaderPofol'>
              강안수's Portfolio
            </p>
            <div className="TitlesContainer">
              <p className='HeaderAbout'>About Me</p>
              <p className='HeaderSkills'>Skills</p>
              <p className='HeaderProjects'>Projects</p>
              <p className='HeaderExp'>Exp</p>
            </div>
        </div>
    </div>
  );
}
