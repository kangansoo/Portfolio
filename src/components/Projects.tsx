import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useNavigate } from "react-router-dom"

const Projects = () => {
  const navigate = useNavigate()

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

  const projects = [
    {
      id: 1,
      title: "LAY UP",
      image: `${import.meta.env.VITE_S3_URL}/Logo.png`,
      description: "소상공인을 위한 AI 기반 SNS 마케팅 자동화 서비스",
      route: "/layup",
    },
    {
      id: 2,
      title: "뉴키즈",
      image: `${import.meta.env.VITE_S3_URL}/main.png`,
      description: "어린이를 위한 뉴스 플랫폼",
      route: "/newkiz",
    },
    {
      id: 3,
      title: "Pading",
      image: `${import.meta.env.VITE_S3_URL}/pading.png`,
      description: "협업을 위한 웹 IDE 및 관리 시스템",
      route: "/pading",
    },
  ]

  return (
    <div className="h-full w-full bg-blue-gray-500/40 flex items-center justify-center">
      <div className="w-[60%] h-[90%] flex flex-col">
        <div className="flex-1 flex items-center">
          <Slider {...settings} className="w-full">
            {projects.map((project) => (
              <div key={project.id} className="px-2">
                <div className="bg-white rounded-lg overflow-hidden mx-2 transform transition-transform hover:scale-105" onClick={() => handleProjectClick(project.route)}>
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 font-nanumsquare">{project.title}</h3>
                    <p className="text-gray-600 text-sm font-nexon truncate">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Projects
