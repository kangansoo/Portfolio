import Strong from "@/components/Strong"

const About = () => {
  return (
    <div className="w-full h-full flex justify-center items-center select-none">
      <div className="w-[60%] h-[80%] flex flex-col justify-center">
        <p className="font-nanumsquare text-2xl font-bold text-font-color mt-10">About</p>
        <div className="w-full flex flex-col font-nexon text-font-color/80 text-sm mt-5">
          <p>
            <Strong fontSize="md">좋은 서비스</Strong>란 사용자가 <Strong fontSize="md">믿고 쓸 수 있는</Strong> 서비스라고 생각합니다. 이러한 믿음은 언제나 일관되게 작동하는{" "}
            <Strong fontSize="md">안정성</Strong>, 사용자에게 최적의 경험을 제공하는 <Strong fontSize="md">편의성</Strong>에서 나온다고 믿습니다. 저는 이 두 가지 요소를 개발 철칙으로 사용자 경험
            중심의 개발을 실천하고 있으며 동시에 팀과 함께 성장할 수 있는 건강한 개발 문화를 만들어가는 데도 관심이 많습니다.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
