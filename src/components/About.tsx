import Strong from "@/components/Strong"
import { forwardRef } from "react"
import { useNavigate } from "react-router-dom"

const About = forwardRef<HTMLElement, any>((_, ref) => {
  const navigate = useNavigate()

  // /layup 페이지로 이동하면서 scrollTo라는 상태값 전달
  const handlePwaClick = () => {
    navigate("/layup", { state: { scrollTo: "pwa-section" } })
  }

  // /newkiz 페이지로 이동하면서 scrollTo라는 상태값 전달
  const handleAlgorithmClick = () => {
    navigate("/newkiz", { state: { scrollTo: "algorithm-section" } })
  }

  return (
    <section className="w-full flex justify-center items-center select-none pt-20 pb-10" ref={ref} aria-labelledby="about-heading">
      <h2 id="about-heading" className="sr-only">
        About My Values
      </h2>
      <div className="w-[92%] md:w-[60%] h-[80%] flex flex-col justify-center">
        <h2 className="font-nanumsquare text-2xl font-bold text-font-color">About</h2>
        <div className="w-full flex flex-col font-nexon text-font-color/80 text-sm mt-5">
          <p>
            프론트엔드 개발자로서 사용자 경험을 가장 중요한 가치로 여기며, 마주한 문제를 해결하기 위해 적절한 기술을 유연하게 도입하는 데 강점이 있습니다. <br /><br /> PC 웹의 한계를 극복하기 위한{" "}
            <Strong fontSize="md" onClick={handlePwaClick}>
              PWA 도입
            </Strong>
            이나 실시간 데이터 정합성을 위한{" "}
            <Strong fontSize="md" onClick={handleAlgorithmClick}>
              알고리즘 적용
            </Strong>
            , 개발 생산성 극대화를 위한{" "}
            <Strong fontSize="md" onClick={handlePwaClick}>
               AI 도구 도입
            </Strong>
            등 문제 상황에 적절한 기술들을 적용하며 해결해 왔습니다. <br /><br />팀 내에서는 긴밀하게 소통하며 더 좋은 방향이 있다면 달갑게 수용하고, 함께 최선의 결과물을 만들어내는 과정에 즐거움을
            느낍니다.
          </p>
        </div>
      </div>
    </section>
  )
})

About.displayName = "About" // 디버깅 및 개발자 도구에서 컴포넌트 이름 확인 용이

export default About
