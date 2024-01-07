import React, { forwardRef } from "react";
import "../css/Skills.css";
import frontend from "../assets/frontend.png";
import language from "../assets/language.png";
import deploy from "../assets/deploy.png";
import tools from "../assets/tools.png";

const Skills = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="SkillsBG">
      <div className="SkillsTitle">Skills</div>
      <div className="SkillsContainer">
        <div className="SkillsWrapper1">
          <img src={language} alt="laguage" className="SkillsImg1" />
        </div>
        <div className="SkillsWrapper2">
          <img src={frontend} alt="frontend" className="SkillsImg2" />
        </div>
        <div className="SkillsSmallContainer">
          <div className="SkillsSmallWrapper1">
            <img src={deploy} alt="deploy" className="SkillsImg3" />
          </div>
          <div className="SkillsSmallWrapper2">
            <img src={tools} alt="tools" className="SkillsImg4" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Skills;
