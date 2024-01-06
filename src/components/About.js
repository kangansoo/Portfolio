import React, { forwardRef } from "react";
import "../css/About.css";
import user from '../assets/user.png';
import bachelor from '../assets/bachelor.png';
import birth from '../assets/birth.png';
import link from '../assets/link.png';
import phone from '../assets/phone.png';
import email from '../assets/email.png';

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="AboutBG">
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
            <div className="ProfilSmallContainer">
              <img src={user} alt="user" className="ProfileIcon" />
              <div className="Profile">
                강안수
              </div>
            </div>
            <div className="ProfilSmallContainer">
              <img src={birth} alt="birth" className="ProfileIcon" />
              <div className="Profile">
                1997.01.24
              </div>
            </div>
            <div className="ProfilSmallContainer">
              <img src={phone} alt="phone" className="ProfileIcon" />
              <div className="Profile">
                +82-10-3622-8749
              </div>
            </div>
            <div className="ProfilSmallContainer">
              <img src={link} alt="home" className="ProfileIcon" />
              <div className="Profile">
              <div className="BadgesContainer">
                <div className="BadgeContainer">
                  <a href="https://github.com/kangansoo" target="_black">
                    <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" alt="" />
                  </a>
                </div>
                <div className="BadgeContainer">
                  <a href="https://kangansoo.notion.site/ec28d8266ae14aa7a9cb1e513ea773d3?pvs=4" target="_black">
                    <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white" alt="" /> 
                  </a>
                </div>
              </div>
              </div>
            </div>
            <div className="ProfilSmallContainer">
              <img src={bachelor} alt="bachelor" className="ProfileIcon" />
              <div className="Profile">
                중국인민대학교(경제학)
              </div>
            </div>
            <div className="ProfilSmallContainer">
              <img src={email} alt="email" className="ProfileIcon" />
              <div className="Profile">
                ansoo971@gmail.com
              </div>
            </div>
          </div>  
        </div>
        <div className='AboutTextContainer'>
          <p className='aboutText'>
            안녕하세요! IT 서비스 기획자가 최종 목표인 프론트엔드 개발자입니다.
          </p>
          <p className='aboutText'>
            다름을 인정하고 시야를 넓히기 위해 배우는 자세로 소통하며,
          </p>
          <p className='aboutText'>
            성장하기 위해 노력하고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
})

export default About;