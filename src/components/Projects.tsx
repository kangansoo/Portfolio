import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useNavigate } from "react-router-dom"
import projects from "@/data/projects.json"
import { forwardRef } from "react"

const Projects = forwardRef<HTMLElement, any>((_, ref) => {
  const navigate = useNavigate()

  const reversedProjects = [...projects].reverse()

  const handleProjectClick = (route: string) => {
    navigate(route)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "20px",
        },
      },
    ],
  }

  return (
    <section ref={ref} className="w-full bg-blue-gray-500/50 flex items-center justify-center py-12" aria-labelledby="projects-heading">
      <div className="w-[60%] h-[80%] flex flex-col">
        <h2 id="projects-heading" className="sr-only">
          프로젝트 목록
        </h2>
        <div role="region" aria-roledescription="carousel" className="flex-1 flex items-center">
          <Slider {...settings} className="w-full">
            {reversedProjects.map((project) => (
              <div key={project.id} className="outline-none py-4">
                <article className="mx-4 bg-white rounded-2xl overflow-hidden transform transition-all">
                  <button type="button" className="w-full flex flex-col focus:outline-none" onClick={() => handleProjectClick(project.route)} aria-label={`${project.title} 프로젝트 상세보기`}>
                    <figure className="w-full">
                      <div className="relative aspect-video overflow-hidden">
                        <img src={`${import.meta.env.VITE_S3_URL}${project.image}`} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                      </div>
                      <figcaption className="p-8 text-left">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 font-nanumsquare">{project.title}</h3>
                        <p className="text-sm text-gray-500 font-nexon line-clamp-2 leading-relaxed">{project.description}</p>
                      </figcaption>
                    </figure>
                  </button>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
})

Projects.displayName = "Projects" // 디버깅 및 개발자 도구에서 컴포넌트 이름 확인 용이
export default Projects
