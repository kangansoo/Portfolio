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
import ScrollReveal from "@/components/ScrollReveal"

function Home() {
  const [showLanding, setShowLanding] = useState<boolean>(true)

  const projectsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const expRef = useRef<HTMLDivElement>(null)

  useScrollLock(showLanding)

  useEffect(() => {
    // sessionStorage에서 방문 기록 확인
    const hasVisited = sessionStorage.getItem("hasVisitedPortfolio")

    if (hasVisited) {
      // 방문 기록이 있다면
      setShowLanding(false)
    } else {
      // 첫 방문이면
      // 4초 후 LandingComponent 숨기고 방문 기록 저장
      const timer = setTimeout(() => {
        setShowLanding(false)
        sessionStorage.setItem("hasVisitedPortfolio", "true")
      }, 4000)

      return () => clearTimeout(timer)
    }
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
      behavior: "smooth",
    })
  }

  return (
    <div className="w-full h-screen bg-main-bg">
      {showLanding && <LandingComponent />}
      <Header
        onLogoClick={scrollToTop}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onExpClick={() => scrollToSection(expRef)}
      />
      <main className="w-full min-h-screen flex flex-col bg-main-bg">
        <Hero showLanding={showLanding} />
        <ScrollReveal direction="up" delay={0.4}>
          <Projects ref={projectsRef} />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <About ref={aboutRef} />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <Skills ref={skillsRef} />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.3}>
          <Exprience ref={expRef} />
        </ScrollReveal>
        <Footer />
      </main>
    </div>
  )
}

export default Home
