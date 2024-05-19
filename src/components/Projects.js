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
                  Pands와 Numpy를 사용하여 서울시와 천안시의 인구, 유동 인구, 면적 그리고 따릉이 데이터를 전처리하였고, 
                  Scikit-Learn의 선형 회귀 모델을 사용하여 적정 공공자전거 대여소 수와 자전거 수를 예측하였습니다.
                  또한, plotly와 Tableu를 통해 EDA과정을 시각화하였습니다.<br />
                  첫 프로젝트를 경험하며 Notion, Git Hub 등의 협업 프로세스 및 소통 방식에 대해 배울 수 있었습니다.
                  처음 도전한 공모전에서 비록 수상은 아니지만 본선에 진출하고 PT까지 준비하며 부트캠프에서 배운 내용을 
                  복습할 수 있었고 성취감과 흥미를 느껴 목표에 더욱 확신을 가지는 좋은 경험이 되었습니다.
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
                  LG 헬로비전 DX DATA School의 최종 프로젝트로, LG 헬로비전의 실제 로그 데이터를 활용해
                  개인화 맞춤 VOD 추천을 하는 서비스입니다. <br />
                  저는 React로 웹 페이지를 구현을 담당하였습니다. 피그마로 스토리 보드를 기획하였고
                  css와 styled components를 같이 이용하여 css 중복 생성을 최소화하였습니다.
                  리액트 훅들을 활용하여 찜, 평점, 리뷰와 같은 기능들을 구현하였습니다. 캐러셀, 모달 등의 기능을 구현할 때에도 다양한 라이브러리들을
                  적용하며 비교해 다양한 라이브러리들을 경험할 수 있었습니다. 또한, 리덕스 툴킷을 사용하여 데이터 전역 관리를 경험하였습니다.
                  Git과 AWS를 통해 CI/CD를 구현하였고 슬랙을 통해 팀간 소통, 노션을 통해 회의, 의견 등의 문서화를 하였습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ProjectContainer">
          <div className="Project">
            <a href="https://www.notion.so/kangansoo/FC-GG-11133c77929b4bf19c15d53a5bc1a04a" target="_blank" rel="noreferrer">
              <div className="ProjectTitle">FC온라인 전적 조회 서비스</div>
            </a>
            <div className="ProjectDetail">
              <p className="DetailTitle">• Tools :</p>
              <div className="ToolsContainer">
              <img className="Tools" src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="python" />
                <img className="Tools" src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" alt="javascript" />
                <img className="Tools" src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html" />
                <img className="Tools" src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css" />
                <img className="Tools" src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="react" />
                <img className="Tools" src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="git" />
                <img className="Tools" src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" alt="aws" />
                <img className="Tools" src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" alt="github" />
                <img className="Tools" src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" alt="slack" />
                <img className="Tools" src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="figma" />
              </div>
              <div className="DetailRow">
                <p className="DetailTitle">• Git Hub : </p>&nbsp;&nbsp;
                <a className="GitHubwrapper" href="https://github.com/kangansoo/FC.gg_Forked" target="_blank" rel="noreferrer">
                  <p className="DetailGitHub">https://github.com/kangansoo/FC.gg_Forked</p>
                </a>
              </div>
              <div className="DetailRow">
                <p className="DetailTitle">• Web Page : </p>&nbsp;&nbsp;
                <a className="GitHubwrapper" href="https://fcgg.netlify.app" target="_blank" rel="noreferrer">
                  <p className="DetailGitHub">https://fcgg.netlify.app</p>
                </a>
              </div>
              <div className="DetailTextContainer">
                <p className="DetailText">
                  인기 온라인 게임인 FC온라인 전적 조회 서비스입니다. <br/>
                  OP.GG(다른 게임의 전적 조회 서비스)와 같은 대규모 서비스가 없고, 해당 게임의 다른 서비스들에는 없는, 
                  또 팀원들, 친구들이 원하는 서비스를 만들어보고자 기획하였습니다. <br/>
                  AWS의 Serverless와 Terraform을 이용해 서버를 구축하였기 때문에 Python 코드로 API를 설계하였습니다.
                  이전 프로젝트와 달리 대량의 데이터를 다양하게 받아오기 때문에 각각에 맞는 데이터를 요청하고 
                  화면에 출력하며, 예외 처리를 하는 데에 집중하여 공부할 수 있는 좋은 기회가 되었습니다. 또한, 
                  실제 축구 스쿼드와 같이 출력하기 위해 css에 대해 학습할 수 있는 좋은 경험이었습니다.<br/>
                  현재도 꾸준하게 개발하고 있는 서비스로서, 모바일 사용자를 위한 반응형 웹으로의 변경을 목표로 하고 있습니다.
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
