import { MdOutlineFeaturedPlayList } from "react-icons/md"
import { FaRegCalendarCheck } from "react-icons/fa"
import { MdPeopleAlt } from "react-icons/md"
import { HiMiniSquare3Stack3D } from "react-icons/hi2"
import { RiAwardFill } from "react-icons/ri"
import { IoMdPerson } from "react-icons/io"

const LayUp = () => {
  const url = import.meta.env.VITE_S3_URL
  return (
    <div className="w-full h-full flex flex-col items-center bg-main-bg pb-20">
      <div className="w-full h-50">
        <img src={`${import.meta.env.VITE_S3_URL}/Logo.png`} className="w-full h-full object-cover" alt="logo" />
      </div>
      <div className="mt-10 max-w-[60%] flex flex-col">
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
              <p className="text-sm font-nexon">Next.js, React.js, TypeScript, Redux-ToolKit, react-query, Tailwind CSS, vite, Cursor AI</p>
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
        </div>
        <div className="my-5 flex flex-col">
          <div className="font-nanumsquare text-2xl font-extrabold text-font-color mb-5">상세 내용</div>
          <div className="text-sm font-nexon text-landing-700">
            <p className="text-lg font-extrabold text-font-color font-nanumsquare">주요 기능</p>
            <div className="flex flex-col ml-5 gap-2 font-nexon text-font-color">
              <li>Auto Posting</li>
              <p>템플릿과 주기를 설정해두면 등록된 사업체 정보를 기반으로 AI가 글을 생성해서 자동으로 포스팅</p>
              <li>Manual Posting</li>
              <p>주제만 작성하면 사업체 정보를 기반으로 AI가 글을 생성하고 포스팅</p>
              <li>이미지 드라이브</li>
              <p>모바일과 연동되어 촬영한 이미지를 저장하고 그룹화 가능</p>
              <li>템플릿 생성</li>
              <p>글 흐름, 글 스타일, 이미지 그룹 등 저장</p>
              <li>사업체 정보 관리</li>
              <p>등록한 사업체의 정보 관리 기능</p>
              <li>모바일 메뉴 관리</li>
              <p>등록된 사업체(카페, 식당 등)의 메뉴 관리 기능</p>
            </div>
          </div>
        </div>
        <div className="my-5 flex flex-col">
          <div className="font-nanumsquare text-2xl font-extrabold text-font-color mb-5">맡은 역할</div>
          <div className="mb-10">
            <p className="font-nanumsquare text-lg font-extrabold text-font-color">템플릿</p>
            <div className="w-full flex flex-col justify-center mt-3 gap-3">
              <img src={`${url}/template.gif`} alt="template_gif" />
              <div className="w-full font-nexon text-sm text-font-color ml-3">
                <li>템플릿 추가/삭제/수정 기능</li>
                <li>관심사 분리 기반 코드 구조화</li>
                <li>react-query 캐싱 전략을 통한 데이터 응답 속도 및 안정성 확보</li>
                <li>4단계 UI 설계, Framer-motion 적용으로 몰입감 있는 UX 제공</li>
                <li>초기 로딩 속도 개선과 상호 작용성 강화를 위한 SSR/CSR 분리 및 코드 스플리팅적용</li>
                <li>체감 속도 향상을 위한 미리보기 단계에 스트리밍 처리 도입</li>
                <li>Redux-Toolkit 기반 전역 상태 관리</li>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <p className="font-nanumsquare text-lg font-extrabold text-font-color">이미지 드라이브</p>
            <div className="w-full flex flex-col justify-center mt-3 gap-3">
              <img src={`${url}/drive.gif`} alt="drive_gif" />
              <div className="w-full font-nexon text-sm text-font-color ml-3">
                <li>이미지 그룹 생성/삭제/수정 기능</li>
                <li>이미지 업로드/삭제/이동 기능</li>
                <li>이미지 그룹별 관리 및 가용 이미지 확인</li>
                <li>이미지 설명 태그 관리 기능</li>
                <li>초기 로딩 속도 개선과 상호 작용성 강화를 위한 SSR/CSR 분리 및 코드 스플리팅적용</li>
                <li>react-query 활용 캐싱 및 무한 스크롤 구현</li>
                <li>UX 향상을 위한 스켈레톤 UI 도입</li>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <p className="font-nanumsquare text-lg font-extrabold text-font-color">이미지 드라이브(모바일)</p>
            <div className="w-full flex flex-row justify-center mt-3 gap-3">
              <img src={`${url}/mobile_drive.gif`} alt="mobile_drive_gif" className="w-1/2" />
              <div className="w-full font-nexon text-sm text-font-color ml-3 mt-2">
                <li>접근성 향상을 위한 PWA 기반 설계</li>
                <li>이미지 그룹 생성/삭제/수정 기능</li>
                <li>이미지 업로드/삭제/이동 기능</li>
                <li>react-query 활용 캐싱 및 무한 스크롤 구현</li>
                <li>UX 향상을 위한 스켈레톤 UI 도입</li>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <p className="font-nanumsquare text-lg font-extrabold text-font-color">메뉴 관리(모바일)</p>
            <div className="w-full flex flex-row justify-center mt-3 gap-3">
              <img src={`${url}/mobile_menu.gif`} alt="mobile_menu_gif" className="w-1/2" />
              <div className="w-full font-nexon text-sm text-font-color ml-3 mt-2">
                <li>메뉴 추가/삭제/수정 기능</li>
                <li>react-query 활용 캐싱 및 무한 스크롤 구현</li>
              </div>
            </div>
          </div>
          <div className="my-5 flex flex-col">
            <div className="font-nanumsquare text-2xl font-extrabold text-font-color mb-5">성과</div>
            <div className="w-full font-nexon text-sm text-font-color ml-5">
              <li>Next.js를 활용하여 CSR과 SSR을 상황에 맞게 병행함으로써 로딩 속도 최적화와 SEO 강화라는 두 가지 목표를 동시에 달성했습니다.</li>
              <li>프론트엔드 아키텍처 설계 과정에서 관심사를 명확히 분리하여 코드의 가독성, 재사용성, 유지보수성을 높였고 전반적인 코드 품질을 향상시켰습니다.</li>
              <li>복잡해진 상태 관리를 Redux Toolkit으로 체계적으로 구성하였고 React-Query 기반 캐싱 전략을 통해 통신을 최적화하여 지연 없는 빠른 화면 전환과 안정적인 UX를 제공했습니다.</li>
              <li>스켈레톤 UI, 데이터 스트리밍 처리 등을 활용하여 몰입갑을 높일 수 있었습니다.</li>
              <li>Cursor AI를 활용해 반복 코드를 줄이고 개발 효율성을 향상시켰으며 이를 기반으로 약 3주 만에 프로젝트를 성공적으로 완성할 수 있었습니다.</li>
              <li>초기 설계에 없던 모바일 기능을 직접 제안하고 주도하여 사용자 중심 개발 역량을 쌓을 수 있었습니다.</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayUp
