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
    <div
      className={`absolute z-10 p-2 text-xs text-white bg-gray-800 opacity-40 rounded-md shadow-lg min-w-24 whitespace-nowrap transition-opacity duration-300 ease-in-out 
                      bottom-full mb-5 transform translate-y-1/2 flex justify-center`}
    >
      {description}
    </div>
  )

  return (
    <div className="w-full h-20 flex flex-row justify-center items-center bg-main-bg mt-10 border-t-1 border-gray-200">
      <div className="w-[92%] md:w-1/2 flex flex-row justify-between items-center font-nexon text-sm text-gray-700">
        {/* 이전 프로젝트 영역 */}
        <div
          className="flex-1 flex flex-col items-start relative h-full justify-center"
          onMouseEnter={() => setHoveredProjectId(prevProject ? prevProject.id : null)}
          onMouseLeave={() => setHoveredProjectId(null)}
        >
          {prevProject ? (
            <button
              className="group flex flex-row items-center cursor-pointer hover:text-font-hover transition-colors duration-300 ease-in-out whitespace-nowrap"
              onClick={goToPrev}
            >
              <GrFormPrevious className="text-2xl transition-transform duration-200 ease-in-out group-hover:-translate-x-1 -translate-y-px shrink-0" />
              <span className="hidden xs:inline">이전 프로젝트</span>
              <span className="xs:hidden">이전</span>
            </button>
          ) : (
            <div className="invisible whitespace-nowrap flex flex-row items-center">
              <GrFormPrevious className="text-2xl shrink-0" />
              <span className="hidden xs:inline">이전 프로젝트</span>
              <span className="xs:hidden">이전</span>
            </div>
          )}
          {prevProject && hoveredProjectId === prevProject.id && <Tooltip description={prevProject.description} />}
        </div>

        {/* 홈 버튼 영역 */}
        <div className="flex flex-col justify-center items-center px-4">
          <button className="cursor-pointer flex items-center justify-center hover:text-font-hover transition-colors duration-300 ease-in-out text-2xl" onClick={goToHome}>
            <AiFillHome />
          </button>
        </div>

        {/* 다음 프로젝트 영역 */}
        <div
          className="flex-1 flex flex-col items-end relative h-full justify-center"
          onMouseEnter={() => setHoveredProjectId(nextProject ? nextProject.id : null)}
          onMouseLeave={() => setHoveredProjectId(null)}
        >
          {nextProject ? (
            <div
              className="group flex flex-row items-center cursor-pointer hover:text-font-hover transition-colors duration-300 ease-in-out whitespace-nowrap"
              onClick={goToNext}
            >
              <span className="hidden xs:inline">다음 프로젝트</span>
              <span className="xs:hidden">다음</span>
              <GrFormNext className="text-2xl transition-transform duration-200 ease-in-out group-hover:translate-x-1 -translate-y-px shrink-0" />
            </div>
          ) : (
            <div className="invisible whitespace-nowrap flex flex-row items-center">
              <span className="hidden xs:inline">다음 프로젝트</span>
              <span className="xs:hidden">다음</span>
              <GrFormNext className="text-2xl shrink-0" />
            </div>
          )}
          {nextProject && hoveredProjectId === nextProject.id && <Tooltip description={nextProject.description} />}
        </div>
      </div>
    </div>
  )
}

export default ProjectFooter
