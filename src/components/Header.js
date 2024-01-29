import React from "react";
import "../css/Header.css";

export default function Header({ aboutRef, skillsRef, expRef, projectsRef }) {

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }    
  };
  
  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }    
  };

  const scrollToExp = () => {
    if (expRef.current) {
      expRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }    
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }    
  };

  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

console.log("Viewport Width:", viewportWidth, "px");
  return (
    <div className="Header">
        <div className="HeaderContainer">
            <p className='HeaderPofol'>
              강안수's Portfolio
            </p>
            <div className="TitlesContainer">
              <p className='HeaderTitle' onClick={() => scrollToAbout(aboutRef)}>About Me</p>
              <p className='HeaderTitle' onClick={() => scrollToSkills(skillsRef)}>Skills</p>
              <p className='HeaderTitle' onClick={() => scrollToExp(expRef)}>Exp</p>
              <p className='HeaderTitle' onClick={() => scrollToProjects(projectsRef)}>Projects</p>
            </div>
        </div>
    </div>
  );
}
