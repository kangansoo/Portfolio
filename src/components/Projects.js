import React, { forwardRef } from "react";
import "../css/Projects.css";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="Projects">
      <div className="ProjectsTitle">Projects</div>
      <div className="ProjectsContainer">
        <div className="ProjectContainer">
          <div className="Project">
            <a href="https://kangansoo.notion.site/169ba524ce6a434d9410894291a57045" target="_blank" rel="noreferrer">
              <div className="ProjectTitle">천안시 데이터 시각화 아이디어 공모전</div>
            </a>
            <div className="ProjectDetail">
              <p className="DetailTitle">• Tools :</p>
              <div className="ToolsContainer">
                <img className="Tools" src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="python" />
                <img className="Tools" src="https://img.shields.io/badge/scikitlearn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white" alt="scikitlearn" />
                <img className="Tools" src="https://img.shields.io/badge/pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" alt="pandas" />
                <img className="Tools" src="https://img.shields.io/badge/numpy-013243?style=for-the-badge&logo=numpy&logoColor=white" alt="numpy" />
                <img className="Tools" src="https://img.shields.io/badge/plotly-3F4F75?style=for-the-badge&logo=plotly&logoColor=white" alt="plotly" />
                <img className="Tools" src="https://img.shields.io/badge/tableau-E97627?style=for-the-badge&logo=tableau&logoColor=white" alt="tableau" />
              </div>
              <div className="DetailRow">
                <p className="DetailTitle">• Git Hub :</p>&nbsp;&nbsp;
                <a className="GitHubwrapper" href="https://github.com/LGHelloVisionProj" target="_black" rel="noreferrer">
                  <p className="DetailGitHub">https://github.com/LGHelloVisionProj</p>
                </a>
              </div>
              <div className="DetailTextContainer">
                <p className="DetailText">
                  천안시 교통 문제를 인지하고 공공자전거 설치를 통해 교통 문제 완화에 기여하고자 공모전에 참여하였습니다.<br />
                  파이썬을 기반으로
                  Pands와 Numpy를 사용하여 서울시와 천안시의 인구, 유동 인구, 면적 그리고 따릉이 데이터를 전처리하였고, 
                  Scikit-Learn의 선형 회귀 모델을 사용하여 적정 공공자전거 대여소 수를 예측하였습니다.
                  또한, plotly를 사용하여 실제 천안시 지도에 공공자전거 대여소의 좌표를 표시하였고, Tableu를 통해 EDA 및 
                  데이터 분석 과정을 시각화하였습니다.<br />
                  첫 프로젝트를 경험하며 Notion, Git Hub 등의 협업 및 소통 방식에 대해 배울 수 있었고 
                  부트캠프에서 배운 내용을 복습하였고, 첫 공모전에서 비록 수상은 아니지만
                  실제 PT까지 준비하며 도전의 성취감을 느낄 수 있었습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ProjectContainer">
          <div className="Project">
            <a href="https://kangansoo.notion.site/VOD-adf62df4460a47a7a3374b49ca087271" target="_blank" rel="noreferrer">
              <div className="ProjectTitle">개인화 맞춤형 VOD 추천 서비스</div>
            </a>
            <div className="ProjectDetail">
              <p className="DetailTitle">• Tools :</p>
              <div className="ToolsContainer">
                <img className="Tools" src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" alt="javascript" />
                <img className="Tools" src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html" />
                <img className="Tools" src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css" />
                <img className="Tools" src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="react" />
                <img className="Tools" src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="git" />
                <img className="Tools" src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="redux" />
                <img className="Tools" src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" alt="styledcomponents" />
                <img className="Tools" src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="bootstrap" />
                <img className="Tools" src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" alt="aws" />
                <img className="Tools" src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" alt="github" />
                <img className="Tools" src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" alt="slack" />
                <img className="Tools" src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="figma" />
              </div>
              <div className="DetailRow">
                <p className="DetailTitle">• Git Hub : </p>&nbsp;&nbsp;
                <a className="GitHubwrapper" href="https://github.com/LV-3" target="_blank" rel="noreferrer">
                  <p className="DetailGitHub">https://github.com/LV-3</p>
                </a>
              </div>
              <div className="DetailRow">
                <p className="DetailTitle">• Web Page : </p>&nbsp;&nbsp;
                <a className="GitHubwrapper" href="https://www.hellogptv.com" target="_blank" rel="noreferrer">
                  <p className="DetailGitHub">https://www.hellogptv.com</p>
                </a>
              </div>
              <div className="DetailTextContainer">
                <p className="DetailText">
                  LG 헬로비전 DX DATA School의 최종 프로젝트로서, LG 헬로비전의 실제 로그 데이터를 활용해
                  개인화 맞춤 VOD 추천을 하는 서비스입니다. <br />
                  저는 프론트엔드를 담당하였고, React로 웹 페이지를 구현하였습니다. 프로젝트 시작 전 피그마를 활용하여 웹 페이지를 기획하였고
                  css와 styledcomponents를 같이 이용하여 css 중복 생성을 최소화하였습니다.
                  리액트 훅들을 적극 활용하여 찜, 평점, 리뷰와 같은 기능들을 구현하였습니다. 기능들, 예를 들어 캐러셀, 모달 등을 구현할 때에도 다양한 라이브러리들을
                  적용하며 비교해 다양한 라이브러리들을 경험할 수 있었습니다. 서버에서 받아오는 데이터들의 상태를 리덕스로 관리하여 로딩페이지를 구현하였습니다.
                  Git과 AWS를 통해 CI/CD를 구현하였고 슬랙을 통해 팀간 소통을 하였고 노션을 통해 회의, 의견 등의 문서화를 하였습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;
