import Strong from "@/components/Strong";
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

const About = forwardRef<HTMLElement>((_, ref) => {
  const navigate = useNavigate();

  const handlePwaClick = () => navigate("/project/layup#pwa-section");
  const handleAlgorithmClick = () => navigate("/project/newkiz#algorithm-section");
  const handleInterviewClick = () => navigate("/project/konciar");

  return (
    <section
      className="w-full flex justify-center items-center select-none pt-20 pb-10"
      ref={ref}
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className="sr-only">
        About My Values
      </h2>
      <div className="w-[92%] md:w-[60%] h-[80%] flex flex-col justify-center">
        <h2 className="font-nanumsquare text-2xl font-bold text-font-title">
          About
        </h2>
        <div className="w-full flex flex-col font-nexon text-font-body text-sm mt-5">
          <p>
            사용자 경험을 가장 중요한 가치로 여기며, 기술 자체보다 "왜 이 기능이 필요한가", "어떻게 하면 더 나은 경험을 만들 수 있나"를 고민하는 개발자입니다.
            {" "}
            <br />
            <br />그 과정에서 사용자 편의성 개선을 위한{" "}
            <Strong fontSize="md" onClick={handlePwaClick}>
              PWA 도입
            </Strong>
              이나 다양한 기기 해상도 환경에서 발생한 실시간 게임 캐릭터 좌표 불일치 문제를{" "}
            <Strong fontSize="md" onClick={handleAlgorithmClick}>
              Min-Max Scaling
            </Strong>
            으로 해결, 비즈니스 검증과 사용자 중심의 UX 설계를 위한{" "}
            <Strong fontSize="md" onClick={handleInterviewClick}>
              길거리 인터뷰
            </Strong>
            {" "}등 사용자 경험 개선을 위한 문제 해결에 집중해왔습니다. <br />
            <br />최근에는 AI 도구를 활용하며 코드 구현을 넘어 제품 전체의 가치를 함께 만들어가는 개발자로 성장하고자 합니다.
          </p>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About"; // 디버깅 및 개발자 도구에서 컴포넌트 이름 확인 용이

export default About;
