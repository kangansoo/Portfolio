import React, { forwardRef } from "react";
import "../css/Exp.css";
import arrow from "../assets/arrow.png";

const Exp = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="ExpBg">
      <div className="ExpTitle"></div>
      <div className="ExpContainer">
        <img src={arrow} alt="arrow" className="ExpArrow" />
        <div className="ExpColumn">
          <div className="ExpSmallContainer">
            <div className="Exprow">
              <p className="ExpSmallTitle">LG 헬로비전 DX DATA School 1기</p>
              &nbsp;&nbsp;
              <p classNmae="Expperiod">(2023.06.28 ~ 2023.12.29)</p>
            </div>
            <p className="ExpDetail">
              파이썬을 기반으로 데이터 수집 및 전처리, 분석, 시각화와 DB 및 CI/CD에 대한 교육
            </p>
          </div>
          <div className="ExpSmallContainer">
            <div className="Exprow">
              <p className="ExpSmallTitle">
                천안시 데이터 시각화 아이디어 공모전
              </p>
              &nbsp;&nbsp;
              <p classNmae="Expperiod">(2023.08.05 ~ 2023.08.30)</p>
            </div>
            <p className="ExpDetail">
              천안시 데이터 시각화 아이디어 공모전 참여 (본선 진출)
            </p>
          </div>
          <div className="ExpSmallContainer">
            <div className="Exprow">
              <p className="ExpSmallTitle">
                LG헬로비전 DX DATA School 최종 프로젝트
              </p>
              &nbsp;&nbsp;
              <p classNmae="Expperiod">(2023.10.17 ~ 2023.12.28)</p>
            </div>
            <p className="ExpDetail">
              부트캠프 최종 프로젝트 (대상)
            </p>
          </div>
          <div className="ExpSmallContainer">
            <div className="Exprow">
              <p className="ExpSmallTitle">
                KOSTA Web Full-Stack 개발자 양성 과정
              </p>
              &nbsp;&nbsp;
              <p classNmae="Expperiod">(2024.1.23 ~ )</p>
            </div>
            <p className="ExpDetail">
              프로젝트 기반 Web Full-Stack 교육 과정
            </p>
          </div>
        </div>
      </div>
    </div>
  );
})

export default Exp;
