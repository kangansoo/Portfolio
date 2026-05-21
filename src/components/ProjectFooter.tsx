import { useNavigate } from "react-router-dom"
import projects from "@/data/projects.json"
import { useState } from "react"
import { AiFillHome } from "react-icons/ai"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"

interface ProjectFooterProps {
  id: number
}

const ProjectFooter = ({ id }: ProjectFooterProps) => {
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null)

  const navigate = useNavigate()

  const currentIdx = projects.findIndex((project) => project.id === id)

  const prevProject = projects[currentIdx + 1]
  const nextProject = projects[currentIdx - 1]

  const goToPrev = () => {
    navigate(prevProject.route)
  }

  const goToNext = () => {
    navigate(nextProject.route)
  }

  const goToHome = () => {
    navigate("/")
  }

  const Tooltip = ({ description }: { description: string }) => (
    <div className="absolute z-10 p-2 text-xs text-white bg-gray-500 rounded-md shadow-lg whitespace-nowrap bottom-full left-1/2 -translate-x-1/2 mb-2">
      {description}
    </div>
  )

  return (
    <div className="w-full h-20 flex flex-row justify-center items-center bg-main-bg mt-10 border-t-1 border-gray-200 dark:border-gray-800">
      <div className="w-[92%] md:w-1/2 flex flex-row justify-between items-center font-nexon text-sm text-font-sub">
        {/* 이전 프로젝트 영역 */}
        <div className="flex-1 flex flex-col items-start h-full justify-center">
          {prevProject ? (
            <button
              className="group relative flex flex-row items-center cursor-pointer transition-colors duration-300 ease-in-out whitespace-nowrap"
              onClick={goToPrev}
              onMouseEnter={() => setHoveredProjectId(prevProject.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
            >
              <GrFormPrevious className="text-2xl transition-transform duration-200 ease-in-out group-hover:-translate-x-1 -translate-y-px shrink-0" />
              <span className="hidden xs:inline">이전 프로젝트</span>
              <span className="xs:hidden">이전</span>
              {hoveredProjectId === prevProject.id && <Tooltip description={prevProject.description} />}
            </button>
          ) : (
            <div className="invisible whitespace-nowrap flex flex-row items-center">
              <GrFormPrevious className="text-2xl shrink-0" />
              <span className="hidden xs:inline">이전 프로젝트</span>
              <span className="xs:hidden">이전</span>
            </div>
          )}
        </div>

        {/* 홈 버튼 영역 */}
        <div className="flex flex-col justify-center items-center px-4">
          <button className="cursor-pointer flex items-center justify-center hover:text-point transition-colors duration-300 ease-in-out text-2xl" onClick={goToHome}>
            <AiFillHome />
          </button>
        </div>

        {/* 다음 프로젝트 영역 */}
        <div className="flex-1 flex flex-col items-end h-full justify-center">
          {nextProject ? (
            <div
              className="group relative flex flex-row items-center cursor-pointer transition-colors duration-300 ease-in-out whitespace-nowrap"
              onClick={goToNext}
              onMouseEnter={() => setHoveredProjectId(nextProject.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
            >
              <span className="hidden xs:inline">다음 프로젝트</span>
              <span className="xs:hidden">다음</span>
              <GrFormNext className="text-2xl transition-transform duration-200 ease-in-out group-hover:translate-x-1 -translate-y-px shrink-0" />
              {hoveredProjectId === nextProject.id && <Tooltip description={nextProject.description} />}
            </div>
          ) : (
            <div className="invisible whitespace-nowrap flex flex-row items-center">
              <span className="hidden xs:inline">다음 프로젝트</span>
              <span className="xs:hidden">다음</span>
              <GrFormNext className="text-2xl shrink-0" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectFooter
