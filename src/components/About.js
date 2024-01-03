import React from "react";
import "../css/About.css";

export default function About() {
  return (
    <div className="AboutBG">
      <div className="StarContainer">
        <div className="star1"></div>
        <div className="star2"></div>
        <div className="star3"></div>
      </div>
      <div className="AboutMe">
        About Me
      </div>
      <div className="About">
        <div className="AboutContainer">
          <div className="Memoji"></div>
          <div className="ProfileContainer">
            <div className="Name">
              강안수
            </div>
            <div className="Birth">
              1997.01.24
            </div>
            <div className="University">
              중국인민대학교
            </div>
            <div className="Number">
              +82-10-3622-8749
            </div>
            <div className="Email">
              ansoo971@gmail.com
            </div>
          </div>  
        </div>
        <div className='AboutText'>
          안녕하세요! IT 서비스 기획자가 최종 목표인 프론트엔드 개발자입니다.
        </div>
      </div>
    </div>
  );
}
