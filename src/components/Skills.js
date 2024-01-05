import React from 'react'
import '../css/Skills.css'

export default function Skills() {
  return (
    <div className='SkillsBG'>
        <div className="SkillsTitle">
            Skills
        </div>
        <div className="FrontEnd">
          프론트엔드
          <img src='https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white' />
          <img src='https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white' />
        </div>
        <div className="DataAnalysis">
          데이터 분석
        </div>
        <div className="Deploy">
          배포
        </div>
        <div className="Colaboration_Tools">
          협업 및 툴
        </div>
    </div>
  )
}
