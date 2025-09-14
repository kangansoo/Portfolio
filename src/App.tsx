import "./App.css"
import LandingComponent from "@/components/LandingComponent"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Exprience from "./components/Exprience"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="w-full h-screen">
      <LandingComponent />
      <div className="w-full h-full bg-main-bg">
        <div className="h-12 top-0 sticky flex bg-main-bg z-40">
          <Header />
        </div>
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-1/3 shrink-0">
            <Hero />
          </div>
          <div className="w-full h-2/3 shrink-0">
            <Projects />
          </div>
          <div className="w-full h-1/2 shrink-0">
            <Skills />
          </div>
          <div className="w-full h-1/4 shrink-0">
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
