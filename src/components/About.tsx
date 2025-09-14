const About = () => {
  return (
    <div className="w-full h-full flex justify-center items-center select-none">
      <div className="w-[60%] h-[80%] flex flex-col justify-center">
        <p className="font-nanumsquare text-2xl font-bold text-font-color mt-10">About</p>
        <div className="w-full flex flex-col font-nexon text-font-color/80 text-sm mt-5">
          <p>
            좋은 서비스란 사용자가 '믿고 쓸 수 있는' 서비스라고 생각합니다. 이러한 신뢰는 언제나 안정적으로 작동하는 안정성, 직관적이고 편리한 사용성, 그리고 사용자의 니즈를 정확히 반영하는 편의성에서
            나온다고 믿습니다. 저는 이 세 가지 원칙을 개발 철칙으로 사용자 경험 중심의 개발을 실천하고 있으며 동시에 팀과 함께 성장할 수 있는 건강한 개발 문화를 만들어가는 데도 깊은 관심을 가지고
            있습니다.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
