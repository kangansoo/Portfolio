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
      <main className="w-full h-full flex flex-col bg-main-bg">
        <section className="w-full h-1/3 shrink-0">
          <Hero showLanding={showLanding} />
        </section>
        <section ref={projectsRef} className="w-full h-2/3 shrink-0">
          <ScrollReveal direction="up" delay={0.4}>
            <Projects />
          </ScrollReveal>
        </section>
        <section ref={aboutRef} className="w-full min-h-[40vh] shrink-0">
          <ScrollReveal direction="up" delay={0.2}>
            <About />
          </ScrollReveal>
        </section>
        <section ref={skillsRef} className="w-full min-h-[50vh] shrink-0">
          <ScrollReveal direction="up" delay={0.2}>
            <Skills />
          </ScrollReveal>
        </section>
        <section ref={expRef} className="w-full min-h-[30vh] shrink-0 my-10">
          <ScrollReveal direction="up" delay={0.3}>
            <Exprience />
          </ScrollReveal>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default Home
