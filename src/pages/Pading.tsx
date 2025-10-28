import { MdOutlineFeaturedPlayList } from "react-icons/md"
import { FaRegCalendarCheck } from "react-icons/fa"
import { MdPeopleAlt } from "react-icons/md"
import { HiMiniSquare3Stack3D } from "react-icons/hi2"
import { RiAwardFill } from "react-icons/ri"
import { IoMdPerson } from "react-icons/io"
import { FaGithub } from "react-icons/fa"

const Pading = () => {
  const url = import.meta.env.VITE_S3_URL
  const openGithub = () => {
    window.open("https://github.com/ssafy-pading/pading", "_blank", "noopener,noreferrer")
  }
  return (
    <div className="w-full h-full flex flex-col items-center bg-main-bg pb-20">
      <div className="w-full h-50">
        <img src={`${import.meta.env.VITE_S3_URL}/pading_logo.png`} className="w-full h-full object-cover" alt="logo" />
      </div>
      <div className="mt-10 max-w-1/2 flex flex-col">
        <div className="font-nanumsquare text-3xl font-extrabold text-font-color">Pading</div>
        <div className="my-5 flex flex-col gap-3">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center w-40 gap-2 text-landing-500">
              <MdOutlineFeaturedPlayList />
              <p className="text-sm font-nexon">한 줄 소개</p>
            </div>
            <div className="flex-1 text-landing-700">
              <p className="text-sm font-nexon">페어프로그래밍을 위한 웹 IDE 및 관리 시스템</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center w-40 gap-2 text-landing-500">
              <FaRegCalendarCheck />
              <p className="text-sm font-nexon">프로젝트 기간</p>
            </div>
            <div className="flex-1 text-landing-700">
              <p className="text-sm font-nexon">2025.01 ~ 2025.02 (7주)</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center w-40 gap-2 text-landing-500">
              <MdPeopleAlt />
              <p className="text-sm font-nexon">팀 구성</p>
            </div>
            <div className="flex-1 text-landing-700">
              <p className="text-sm font-nexon">BE 2명, FE 4명</p>
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
              <p className="text-sm font-nexon">React, TypeScript, Redux-ToolKit, Tailwind CSS, vite, Web Socket, WebRTC</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center w-40 gap-2 text-landing-500">
              <RiAwardFill />
              <p className="text-sm font-nexon">수상</p>
            </div>
            <div className="flex-1 text-landing-700">
              <p className="text-sm font-nexon">SSAFY 2학기 공통 프로젝트 우수상</p>
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
          <div className="text-sm font-nexon text-landing-700 mb-10">
            <p className="text-lg font-extrabold text-font-color font-nanumsquare mb-2">프로젝트 소개</p>
            <div className="flex flex-col gap-2 font-nexon text-font-color">
              원격 환경에서도 효과적인 페어프로그래밍 및 협업이 가능한 웹 IDE 통합 서비스. 실시간 동시 코드 편집, 화상 회의, 채팅 등을 통해 브라우저 환경에서 프로젝트 생성부터 실행, 배포까지 전체 개발
              파이프라인을 실시간으로 협업하고 관리 가능. 그룹 생성/관리를 통해 참여자를 초대하고 각 프로젝트에 인원 할당 등 관리 가능.
            </div>
          </div>
          <div className="text-sm font-nexon text-landing-700">
            <p className="text-lg font-extrabold text-font-color font-nanumsquare">주요 기능</p>
            <div className="flex flex-col ml-5 gap-2 font-nexon text-font-color">
              <li>매니징 시스템</li>
              <p>
                오너, 매니저, 멤버로 구성. <br /> 그룹 및 프로젝트 관리(그룹 내에 멤버들을 초대하고 여러 개의 프로젝트 생성 가능)
              </p>
              <li>그룹 페이지</li>
              <p>
                자신이 속한 그룹 페이지 내에서 그룹의 정보와 프로젝트, 멤버 등의 정보 확인 및 변경
                <br />
              </p>
              <li>권한 설정</li>
              <p>오너는 매니저와 일반 멤버를 초대 및 권한 변경 가능</p>
              <li>프로젝트 생성</li>
              <p>프로젝트 이름, 언어, OS, 성능, 참여자를 선택하여 생성</p>
              <li>공동 편집 IDE</li>
              <p>실시간 공동 편집 지원 IDE, 파일 탐색기, 화상 회의, 채팅, AI 코드 리뷰, 터미널 기능 및 실행과 배포 가능</p>
            </div>
          </div>
        </div>
        <div className="my-5 flex flex-col">
          <div className="font-nanumsquare text-2xl font-extrabold text-font-color mb-5">맡은 역할</div>
          <div className="mb-10">
            <p className="font-nanumsquare text-lg font-extrabold text-font-color">프로젝트 설계</p>
            <div className="w-full flex flex-col justify-center mt-3 gap-3">
              <img src={`${url}/project.png`} alt="IDE_page_image" className="rounded-sm border-1 border-gray-200" />
              <div className="w-full font-nexon text-sm text-font-color ml-5">
                <li>코드 복잡도 관리 및 확장성 향상을 위해 FSD 아키텍처 채택</li>
                <li>디자인 및 레이아웃 설계 전 과정을 맡아 사용자 친화적인 UI와 레이아웃 설계 및 구현</li>
                <li>Resizable Box를 적용하여 사용자 맞춤형 UI 제공</li>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <p className="font-nanumsquare text-lg font-extrabold text-font-color">화상회의</p>
            <div className="w-full h-full flex flex-col justify-center mt-3 gap-3">
              <div className="w-full h-1/4 flex flex-row gap-3">
                <img src={`${url}/video.gif`} alt="video_gif_1" className="flex-1 h-full rounded-sm border-1 border-gray-200" />
                <img src={`${url}/video2.gif`} alt="video_gif_2" className="flex-1 w-1/5 rounded-sm border-1 border-gray-200" />
              </div>
              <div className="w-full font-nexon text-sm `   text-font-color ml-3">
                <li>Open Vidu 라이브러리를 활용하여 화상회의 기능 구현, 로컬과 원격 참여자로 데이터를 분리하여 관리함으로써 렌더링 효율 향상, 상태관리 단순화 및 UI 호환성 향상</li>
                <li>카메라/마이크 사전 테스트, 마이크 및 오디오 온/오프 제어 기능 등 사용자 편의성 향상</li>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <p className="font-nanumsquare text-lg font-extrabold text-font-color">파일 탐색기(Web Socket 기반)</p>
            <div className="w-full flex flex-col justify-center mt-3 gap-3">
              <img src={`${url}/file_explorer.gif`} alt="file_explorer_gif" className="rounded-sm border-1 border-gray-200" />
              <div className="w-full font-nexon text-sm text-font-color ml-5">
                <li>Stomp와 Sock.js를 통한 실시간 통신 안정성과 효율성 확보</li>
                <li>Resizable Box 적용으로 사용자 맞춤형 UI 제공</li>
                <li>파일/폴더의 생성/삭제/수정/이동 기능</li>
                <li>Map 자료구조를 활용하여 재귀 탐색 성능 향상</li>
              </div>
            </div>
          </div>
          <div className="my-5 flex flex-col">
            <div className="font-nanumsquare text-2xl font-extrabold text-font-color mb-5">성과</div>
            <div className="w-full font-nexon text-sm text-font-color ml-5">
              <li>UI/UX 설계를 주도하며 다양한 레퍼런스를 분석하고 반영하는 과정을 통해 사용자 중심의 설계 능력 향상</li>
              <li>WebSocket과 WebRTC를 활용하며 실시간 통신에 대한 이해도 향상</li>
              <li>파일 탐색기 기능 구현 과정에서 복잡한 기능을 작은 단위로 구현하며 조합하는 바텀업 방식에 대한 이해도 향상</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pading
