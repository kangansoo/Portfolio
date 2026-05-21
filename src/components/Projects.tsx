import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import projects from "@/data/projects.json";
import { forwardRef } from "react";

const CustomNextArrow = (props: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 rounded-full shadow-md cursor-pointer transition-all border border-gray-200 dark:border-gray-800 hidden md:flex"
      onClick={onClick}
      aria-label="다음 프로젝트"
    >
      <span className="text-font-caption text-xs">❯</span>
    </button>
  );
};

const CustomPrevArrow = (props: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 rounded-full shadow-md cursor-pointer transition-all border border-gray-200 dark:border-gray-800 hidden md:flex"
      onClick={onClick}
      aria-label="이전 프로젝트"
    >
      <span className="text-font-caption text-xs">❮</span>
    </button>
  );
};

const Projects = forwardRef<HTMLElement, unknown>((_, ref) => {
  const navigate = useNavigate();

  const reversedProjects = [...projects].reverse();

  const handleProjectClick = (route: string) => {
    navigate(route);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "40px",
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "20px",
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      ref={ref}
      className="w-full bg-sub/20 dark:bg-[#4875eb]/10 flex items-center justify-center py-12"
      aria-labelledby="projects-heading"
    >
      <div className="w-[92%] md:w-[60%] flex flex-col relative">
        <h2 id="projects-heading" className="sr-only">
          프로젝트 목록
        </h2>
        <div role="region" aria-roledescription="carousel" className="w-full">
          <Slider {...settings} className="w-full">
            {reversedProjects.map((project) => (
              <div key={project.id} className="outline-none py-4 px-2">
                <article className="bg-white dark:bg-[#1e2230] rounded-2xl overflow-hidden transform transition-all h-full aspect-square md:aspect-auto md:min-h-[400px]">
                  <button
                    type="button"
                    className="w-full h-full flex flex-col focus:outline-none"
                    onClick={() => handleProjectClick(project.route)}
                    aria-label={`${project.title} 프로젝트 상세보기`}
                  >
                    <figure className="w-full h-full flex flex-col">
                      <div className="relative aspect-video overflow-hidden flex-shrink-0">
                        <img
                          src={`${import.meta.env.VITE_S3_URL}${project.image}`}
                          alt=""
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 dark:bg-black/10 pointer-events-none transition-colors duration-300" />
                      </div>
                      <figcaption className="p-2 md:p-6 text-left flex-1 flex flex-col">
                        <h3 className="text-lg md:text-xl font-bold md:mb-2 text-font-title font-nanumsquare">
                          {project.title}
                        </h3>
                        <p className="text-xs md:text-sm text-font-caption font-nexon line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>
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
  );
});

Projects.displayName = "Projects"; // 디버깅 및 개발자 도구에서 컴포넌트 이름 확인 용이
export default Projects;
