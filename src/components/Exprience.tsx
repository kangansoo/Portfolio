const Exprience = () => {
  return (
    <div className="w-full h-full flex justify-center items-center select-none">
      <div className="w-[60%] h-[80%] flex flex-col justify-center">
        <p className="font-nanumsquare text-2xl font-bold text-font-color">Exp</p>
        <div className="w-full flex flex-col font-nexon text-font-color/80 text-sm mt-5 gap-3">
          <p className="text-lg">LG헬로비전 DX DATA SCHOOL (2023.06 ~ 2023.12)</p>
          <div className="ml-7 flex flex-col gap-1">
            <li>최종 프로젝트 대상</li>
            <p>프롬프트 엔지니어링을 활용한 개인화 맞춤형 VOD 추천 서비스</p>
          </div>
          <p className="text-lg">삼성 청년 SW 아카데미 (2024.07 ~ 2025.06)</p>
          <div className="ml-7 flex flex-col gap-1">
            <li>2학기 공통(첫 번째) 프로젝트 우수상</li>
            <p>페어프로그래밍을 위한 웹 IDE 및 관리 시스템</p>
          </div>
          <div className="ml-7 flex flex-col gap-1">
            <li>2학기 자율(세 번째) 프로젝트 우수상</li>
            <p>소상공인을 위한 AI 기반 SNS 마케팅 자동화 서비스</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exprience
