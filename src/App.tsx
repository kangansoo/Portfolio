import "@/App.css"
import "@/style/CustomScroll.css"
import LandingComponent from "@/components/LandingComponent"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Exprience from "@/components/Exprience"
import Footer from "@/components/Footer"
import About from "@/components/About"
import { useScrollLock } from "@/hooks/useScrollLock"
import { useState, useEffect, useRef } from "react"

function App() {
  const [showLanding, setShowLanding] = useState<boolean>(true)

  const projectsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const expRef = useRef<HTMLDivElement>(null)

  useScrollLock(showLanding)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className="w-full h-screen">
      {showLanding && <LandingComponent />}
      <div className="w-full h-full bg-main-bg">
        <div className="h-12 top-0 sticky flex bg-main-bg z-40">
          <Header
            onLogoClick={scrollToTop}
            onProjectsClick={() => scrollToSection(projectsRef)}
            onAboutClick={() => scrollToSection(aboutRef)}
            onSkillsClick={() => scrollToSection(skillsRef)}
            onExpClick={() => scrollToSection(expRef)}
          />
        </div>
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-1/3 shrink-0">
            <Hero />
          </div>
          <div ref={projectsRef} className="w-full h-2/3 shrink-0">
            <Projects />
          </div>
          <div ref={aboutRef} className="w-full h-1/3 shrink-0">
            <About />
          </div>
          <div ref={skillsRef} className="w-full h-1/2 shrink-0">
            <Skills />
          </div>
          <div ref={expRef} className="w-full h-1/4 shrink-0">
            <Exprience />
          </div>
          <div className="w-full h-12 bg-landing-700">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
