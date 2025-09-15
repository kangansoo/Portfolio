import { MdOutlineFeaturedPlayList } from "react-icons/md"
import { FaGithub, FaRegCalendarCheck } from "react-icons/fa"
import { MdPeopleAlt } from "react-icons/md"
import { HiMiniSquare3Stack3D } from "react-icons/hi2"
import { IoMdPerson } from "react-icons/io"

const NewKiz = () => {
  const url = import.meta.env.VITE_S3_URL
  const openGithub = () => {
    window.open("https://github.com/Aren-t-you-eating/newkiz_readme", "_blank", "noopener,noreferrer")
  }
  return (
    <div className="w-full h-full flex flex-col items-center bg-main-bg pb-20">
      <div className="w-full h-50">
        <img src={`${import.meta.env.VITE_S3_URL}/main.png`} className="w-full h-full object-cover" alt="logo" />
      </div>
      <div className="mt-10 max-w-1/2 flex flex-col">
        <div className="font-nanumsquare text-3xl font-extrabold text-font-color">NewKiz</div>
        <div className="my-5 flex flex-col gap-3">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center w-40 gap-2 text-landing-500">
              <MdOutlineFeaturedPlayList />
              <p className="text-sm font-nexon">한 줄 소개</p>
            </div>
            <div className="flex-1 text-landing-700">
              <p className="text-sm font-nexon">어린이를 위한 종합 뉴스 플랫폼</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center w-40 gap-2 text-landing-500">
              <FaRegCalendarCheck />
              <p className="text-sm font-nexon">프로젝트 기간</p>
            </div>
            <div className="flex-1 text-landing-700">
              <p className="text-sm font-nexon">2025.02 ~ 2025.04 (7주)</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center w-40 gap-2 text-landing-500">
              <MdPeopleAlt />
              <p className="text-sm font-nexon">팀 구성</p>
            </div>
            <div className="flex-1 text-landing-700">
              <p className="text-sm font-nexon">BE 3명, FE 3명</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center w-40 gap-2 text-landing-500">
              <IoMdPerson />
              <p className="text-sm font-nexon">참여 역할</p>
            </div>
            <div className="flex-1 text-landing-700">
              <p className="text-sm font-nexon">FE 개발</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center w-40 gap-2 text-landing-500">
              <HiMiniSquare3Stack3D />
              <p className="text-sm font-nexon">스택</p>
            </div>
            <div className="flex-1 text-landing-700">
              <p className="text-sm font-nexon">React.js, TypeScript, Redux-ToolKit, react-query, Tailwind CSS, vite, PWA</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center w-40 gap-2 text-landing-500">
              <FaGithub />
              <p className="text-sm font-nexon">Git Hub</p>
            </div>
            <div className="flex-1 text-landing-700">
              <p className="text-sm font-nexon underline underline-offset-4 cursor-pointer hover:text-font-hover transition-colors duration-300 ease-in-out" onClick={() => openGithub()}>
                바로 가기
              </p>
            </div>
          </div>
        </div>
        <div className="my-5 flex flex-col">
          <div className="font-nanumsquare text-2xl font-extrabold text-font-color mb-5">상세 내용</div>
          <div className="text-sm font-nexon text-landing-700">
            <p className="text-lg font-extrabold text-font-color font-nanumsquare">주요 기능</p>
            <div className="flex flex-col ml-5 gap-2 font-nexon text-font-color">
              <li>뉴스 추천</li>
              <p>오늘의 핫 토픽 추천 / 개인형 맞춤 추천</p>
              <li>난이도 별 뉴스</li>
              <p>어린이가 이해하기 쉽도록 상/중/하 난이도로 뉴스를 제공</p>
              <li>뉴스 해설</li>
              <p>생성형 AI 챗봇을 활용하여 뉴스 내 단어 해설 및 질문 답변</p>
              <li>스크랩</li>
              <p>관심 기사 스크랩</p>
              <li>객관식 퀴즈</li>
              <p>뉴스 내용 기반 객관식 문제</p>
              <li>실시간 OX 퀴즈 게임</li>
              <p>오늘의 핫 토픽 기사 기반 OX 퀴즈 게임</p>
              <li>기자단</li>
              <p>SNS와 유사한 기사 작성 등을 통한 기자 활동 체험</p>
            </div>
          </div>
        </div>
        <div className="my-5 flex flex-col">
          <div className="font-nanumsquare text-2xl font-extrabold text-font-color mb-5">맡은 역할</div>
          <div className="mb-10">
            <p className="font-nanumsquare text-lg font-extrabold text-font-color">아키텍처 설계</p>
            <div className="w-full flex flex-col justify-center mt-3 gap-3">
              <div className="w-full font-nexon text-sm text-font-color ml-3">
                <li>프로젝트 복잡성 관리 및 코드 모듈화와 유지보수성, 확장성 향상을 위해 FSD 아키텍처 채용</li>
                <li>관심사 분리 기반 코드 구조화</li>
                <li>사용자 접근성을 고려하여 PWA 적용</li>
                <li>반응형 웹 설계</li>
                <li>어린이 타겟 UX를 고려하여 색상 대비, 네비게이션 구조, 접근성 중심 UI 설계</li>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <p className="font-nanumsquare text-lg font-extrabold text-font-color">실시간 OX 퀴즈 게임</p>
            <div className="w-full flex flex-col justify-center mt-3 gap-3">
              <div className="w-full flex flex-row gap-3">
                <video controls autoPlay muted loop className="flex-1 w-1/3 rounded-sm">
                  <source src={`${url}/game.mp4`} type="video/mp4" />
                </video>
                <img src={`${url}/game_min_max_scailing.gif`} alt="min_max_scailing_example_gif" className="flex-1 object-fit w-2/3 rounded-sm" />
              </div>
              <div className="w-full font-nexon text-sm `   text-font-color ml-3">
                <li>재사용성과 확장성을 고려한 추상화</li>
                <li>렌더링 지연 문제 해결을 위해 스프라이트 이미지 프리로딩 적용</li>
                <li>Min-Max Scaling으로 다양한 해상도 독립성 및 좌표 일관성 확보</li>
                <li>Stomp와 Sock.js를 통한 실시간 통신 안정성과 효율성 확보</li>
                <li>참여자의 움직임을 감지하여 전송 주기를 동적으로 조절하는 방식과 보간법을 적용하여 네트워크 부하를 약 60% 이상 절감</li>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <p className="font-nanumsquare text-lg font-extrabold text-font-color">카테고리/세부 카테고리 페이지</p>
            <div className="w-full flex flex-row justify-center mt-3 gap-3">
              <img src={`${url}/category.gif`} alt="mobile_drive_gif" className="w-1/2" />
              <div className="w-full font-nexon text-sm text-font-color ml-3 mt-2">
                <li>초기 단순 카테고리를 페이지 단위로 개선하여 세부 카테고리 페이지까지 확장</li>
              </div>
            </div>
          </div>
          <div className="my-5 flex flex-col">
            <div className="font-nanumsquare text-2xl font-extrabold text-font-color mb-5">성과</div>
            <div className="w-full font-nexon text-sm text-font-color ml-5">
              <li>프로젝트의 전반적인 설계부터 개발 환경 세팅, 기술 스택 선정, 아키텍처 구성까지 주도하며 체계적인 개발 프로세스를 이끌었습니다.</li>
              <li>
                이전 프로젝트에서도 FSD 아키텍처를 도입했으나 핵심 개념에 대한 이해 부족으로 계층 분리를 제대로 구현하지 못하고 추상화 레벨이 혼재된 구조를 사용했습니다. 이후 FSD 원리를 심화 학습하여
                계층별 명확한 책임 분리와 올바른 계층 구조를 적용한 아키텍처를 재설계했고 이를 통해 코드의 모듈화와 유지보수성을 크게 향상시켰으며 학습한 내용과 개선 과정을 팀원들과 공유하여 전체 개발
                품질을 높였습니다.
              </li>
              <li>어린이 사용자를 주요 타겟으로 한 서비스 특성을 고려해 쉬운 이용, 명확한 구조, 글자 크기 조정 등 접근성을 강화한 UI/UX를 설계 및 개선했습니다.</li>
              <li>
                게임 개발 과정에서 다수의 플레이어 상호작용, 실시간 동기화, 예외 상황 처리 등 수많은 문제 상황을 마주하며 다양한 경우의 수를 체계적으로 고려해야 한다는 것을 깊이 체감했습니다. 이를
                통해 작은 단위의 문제를 먼저 파악하고 해결한 후, 이를 조합하여 전체 시스템을 구축하는 바텀업 방식의 문제 해결 능력을 키웠으며 다양한 변수와 예외 상황을 미리 고려하는 분석적 사고력을
                크게 향상시켰습니다.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewKiz
