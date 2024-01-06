import React, { forwardRef } from "react";
import "../css/Projects.css";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="Projects">
      <div className="ProjectsTitle">Projects</div>
      <div className="ProjectsContainer">
        <div className="ProjectContainer">
          <div className="Project">
            <div className="ProjectTitle">
              천안시 데이터 시각화 아이디어 공모전
            </div>
            <div className="ProjectDetai"></div>
          </div>
        </div>
        <div className="ProjectContainer2">
          <div className="Project">
            <div className="ProjectTitle">
              개인화 맞춤형 VOD 추천 서비스
            </div>
            <div className="ProjectDetail"></div>
          </div>
        </div>
      </div>
    </div>
  );
})

export default Projects;