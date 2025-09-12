import "./App.css"
import LandingComponent from "@/components/LandingComponent"
import Header from "@/components/Header"
import Hero from "./components/Hero"

function App() {
  return (
    <div className="w-screen h-screen">
      <LandingComponent />
      <div className="w-full h-full bg-main-bg">
        <Header />
        <Hero />
      </div>
    </div>
  )
}

export default App
