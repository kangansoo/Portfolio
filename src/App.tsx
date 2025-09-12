import "./App.css"
import LandingComponent from "@/components/LandingComponent"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"

function App() {
  return (
    <div className="w-full h-screen">
      <LandingComponent />
      <div className="w-full h-full bg-main-bg">
        <div className="h-12 top-0 sticky flex">
          <Header />
        </div>
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-1/3 shrink-0">
            <Hero />
          </div>
          <div className="w-full h-2/3 shrink-0">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
