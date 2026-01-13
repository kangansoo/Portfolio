import Strong from "@/components/Strong"
import { forwardRef } from "react"

const About = forwardRef<HTMLElement, any>((_, ref) => {
  return (
    <section className="w-full flex justify-center items-center select-none pt-20 pb-10" ref={ref} aria-labelledby="about-heading">
      <h2 id="about-heading" className="sr-only">
        About My Values
      </h2>
      <div className="w-[60%] h-[80%] flex flex-col justify-center">
        <h2 className="font-nanumsquare text-2xl font-bold text-font-color">About</h2>
        <div className="w-full flex flex-col font-nexon text-font-color/80 text-sm mt-5">
          <p>
            <Strong fontSize="md">좋은 서비스</Strong>는 사용자가 <Strong fontSize="md">믿고 쓸 수 있는 서비스</Strong>라고 생각합니다. 또한, 이 믿음은 <Strong fontSize="md">안정성</Strong>과{" "}
            <Strong fontSize="md">편의성</Strong>으로 완성된다고 믿습니다. <br />
            저는 이러한 가치를 바탕으로 사용자 중심의 개발을 실천하고자 노력하고 있으며 동시에 함께 성장하는 건강한 개발 문화를 만드는 데에도 기여하고 싶습니다.
            {/* <Strong fontSize="md">기술의 중심</Strong>에는 언제나 <Strong fontSize="md">사용자</Strong>가 있습니다. 기술은 <Strong fontSize="md">사용자의 문제</Strong>를 해결하고{" "}
            <Strong fontSize="md">더 나은 경험</Strong>을 제공하기 위한 <Strong fontSize="md">수단</Strong>이라고 생각하며 개발에 임하고 있습니다. <br />
            <br />
            더불어, <Strong fontSize="md">함께 성장</Strong>하는 개발 문화를 지향합니다. */}
          </p>
        </div>
      </div>
    </section>
  )
})

About.displayName = "About" // 디버깅 및 개발자 도구에서 컴포넌트 이름 확인 용이

export default About
