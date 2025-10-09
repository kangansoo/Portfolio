import { MdOutlineFeaturedPlayList } from "react-icons/md"
import { FaRegCalendarCheck } from "react-icons/fa"
import { MdPeopleAlt } from "react-icons/md"
import { HiMiniSquare3Stack3D } from "react-icons/hi2"
import { RiAwardFill } from "react-icons/ri"
import { IoMdPerson } from "react-icons/io"
import { FaGithub } from "react-icons/fa"

const LayUp = () => {
  const url = import.meta.env.VITE_S3_URL
  const openGithub = () => {
    window.open("https://github.com/kangansoo/LayUp", "_blank", "noopener,noreferrer")
  }
  return (
    <div className="w-full h-full flex flex-col items-center bg-main-bg pb-20">
      <div className="w-full h-50">
        <img src={`${import.meta.env.VITE_S3_URL}/Logo.png`} className="w-full h-full object-cover" alt="logo" />
      </div>
      <div className="mt-10 max-w-1/2 flex flex-col">
        <div className="font-nanumsquare text-3xl font-extrabold text-font-color">LAY UP</div>
        <div className="my-5 flex flex-col gap-3">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center w-40 gap-2 text-landing-500">
              <MdOutlineFeaturedPlayList />
              <p className="text-sm font-nexon">한 줄 소개</p>
            </div>
            <div className="flex-1 text-landing-700">
              <p className="text-sm font-nexon">소상공인을 위한 AI 기반 SNS 마케팅 자동화 서비스</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center w-40 gap-2 text-landing-500">
              <FaRegCalendarCheck />
              <p className="text-sm font-nexon">프로젝트 기간</p>
            </div>
            <div className="flex-1 text-landing-700">
              <p className="text-sm font-nexon">2025.04 ~ 2025.05 (6주)</p>
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
              <p className="text-sm font-nexon">Next.js, React, TypeScript, Redux-ToolKit, react-query, Tailwind CSS, vite, Cursor AI</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center w-40 gap-2 text-landing-500">
              <RiAwardFill />
              <p className="text-sm font-nexon">수상</p>
            </div>
            <div className="flex-1 text-landing-700">
              <p className="text-sm font-nexon">SSAFY 2학기 자율 프로젝트 우수상</p>
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
            <div className="flex flex-col gap-2 font-nexon text-font-color">AI가 SNS 게시물 자동 포스팅부터 주간 성과 및 월간 트렌드 분석 리포트까지 제공하는 마케팅 자동화 서비스</div>
          </div>
          <div className="text-sm font-nexon text-landing-700">
            <p className="text-lg font-extrabold text-font-color font-nanumsquare">주요 기능</p>
            <div className="flex flex-col ml-5 gap-2 font-nexon text-font-color">
              <li>Auto Posting</li>
              <p>템플릿과 주기를 설정해두면 등록된 사업체 정보를 기반으로 AI가 글을 생성해서 자동으로 포스팅</p>
              <li>Manual Posting</li>
              <p>주제만 작성하면 사업체 정보를 기반으로 AI가 글을 생성하고 포스팅</p>
              <li>이미지 드라이브</li>
              <p>모바일과 연동되어 촬영한 이미지를 저장하고 그룹화 가능</p>
              <li>템플릿</li>
              <p>글 흐름, 글 스타일, 이미지 그룹 등을 기반으로 템플릿 생성</p>
              <li>사업체 정보 관리</li>
              <p>등록한 사업체의 정보 관리 기능</p>
              <li>모바일 메뉴 관리</li>
              <p>등록된 사업체(카페, 식당 등)의 메뉴 관리 기능</p>
              <li>리포트</li>
              <p>주 1회 마케팅 성과 리포트, 월 1회 트렌드 리서치 리포트 제공</p>
            </div>
          </div>
        </div>
        <div className="my-5 flex flex-col">
          <div className="font-nanumsquare text-2xl font-extrabold text-font-color mb-5">맡은 역할</div>
          <div className="mb-10">
            <p className="font-nanumsquare text-lg font-extrabold text-font-color">템플릿</p>
            <div className="w-full flex flex-col justify-center mt-3 gap-3">
              <img src={`${url}/template.gif`} alt="template_gif" className="rounded-sm" />
              <div className="w-full font-nexon text-sm text-font-color ml-5">
                <li>템플릿 추가/삭제/수정 기능</li>
                {/* <li>관심사 분리 기반 코드 구조화</li> */}
                <li>React-Query 캐싱 전략을 통한 데이터 응답 속도 및 안정성 확보</li>
                <li>Framer-motion을 활용한 4단계 UI 설계로 몰입감 있는 UX 제공</li>
                <li>SSR/CSR 분리 및 코드 스플리팅을 적용하여 초기 로딩 속도 향상</li>
                <li>체감 속도 향상을 위한 미리보기 단계에 스트리밍 처리 도입</li>
                <li>Redux-Toolkit 기반 전역 상태 관리로 복잡한 템플릿 데이터를 안정적으로 관리</li>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <p className="font-nanumsquare text-lg font-extrabold text-font-color">이미지 드라이브</p>
            <div className="w-full flex flex-col justify-center mt-3 gap-3">
              <img src={`${url}/drive.gif`} alt="drive_gif" className="rounded-sm" />
              <div className="w-full font-nexon text-sm text-font-color ml-5">
                <li>이미지 그룹 생성/삭제/수정 기능</li>
                <li>이미지 업로드/삭제/이동 기능</li>
                <li>이미지 그룹별 관리 및 가용 이미지 확인</li>
                <li>이미지 설명 태그 관리 기능</li>
                <li>SSR/CSR 분리 및 코드 스플리팅을 적용하여 초기 로딩 속도 향상</li>
                <li>초기 로딩 속도 개선과 상호 작용성 강화를 위한 SSR/CSR 분리 및 코드 스플리팅적용</li>
                <li>React-Query 캐싱 전략을 통한 데이터 응답 속도 및 안정성 확보, 무한 스크롤 구현</li>
                <li>스켈레톤 UI를 도입하여 데이터 로딩 중에도 사용자에게 부드러운 UX 제공</li>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <p className="font-nanumsquare text-lg font-extrabold text-font-color">이미지 드라이브(모바일)</p>
            <div className="w-full flex flex-row justify-center mt-3 gap-3">
              <img src={`${url}/mobile_drive.gif`} alt="mobile_drive_gif" className="w-1/2 rounded-sm" />
              <div className="w-full font-nexon text-sm text-font-color ml-5 mt-2">
                <li>PWA 기반 설계로 접근성 향상</li>
                <li>이미지 그룹 생성/삭제/수정 기능</li>
                <li>이미지 업로드/삭제/이동 기능</li>
                <li>React-Query 캐싱 전략을 통한 데이터 응답 속도 및 안정성 확보, 무한 스크롤 구현</li>
                <li>스켈레톤 UI를 도입하여 데이터 로딩 중에도 사용자에게 부드러운 UX 제공</li>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <p className="font-nanumsquare text-lg font-extrabold text-font-color">메뉴 관리(모바일)</p>
            <div className="w-full flex flex-row justify-center mt-3 gap-3">
              <img src={`${url}/mobile_menu.gif`} alt="mobile_menu_gif" className="w-1/2 rounded-sm" />
              <div className="w-full font-nexon text-sm text-font-color ml-5 mt-2">
                <li>메뉴 추가/삭제/수정 기능</li>
                <li>React-Query 캐싱 전략을 통한 데이터 응답 속도 및 안정성 확보, 무한 스크롤 구현</li>
              </div>
            </div>
          </div>
          <div className="my-5 flex flex-col">
            <div className="font-nanumsquare text-2xl font-extrabold text-font-color mb-5">성과</div>
            <div className="w-full font-nexon text-sm text-font-color ml-5">
              <li>Next.js를 활용하여 CSR과 SSR을 상황에 맞게 병행함으로써 로딩 속도 최적화 및 SEO 강화</li>
              <li>프론트엔드 아키텍처 설계 과정에서 관심사를 명확히 분리하여 코드의 가독성, 재사용성, 유지보수성 및 코드 품질을 향상시켰습니다.</li>
              <li>Redux-Toolkit과 React-Query를 통해 체계적인 상태 관리 및 효율적인 데이터 통신을 구현하여 안정적인 경험 제공</li>
              <li>스켈레톤 UI, 데이터 스트리밍 처리 등을 활용하여 몰입감있는 UX 제공</li>
              <li>Cursor AI 활용을 통해 개발 효율성 극대화</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayUp
