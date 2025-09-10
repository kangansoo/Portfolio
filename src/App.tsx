import "./App.css"
import LandingComponent from "@/components/LandingComponent"
import Header from "@/components/Header"

function App() {
  return (
    <div className="w-screen h-screen">
      <LandingComponent />
      <div className="w-full h-full bg-main-bg">
        <Header />
      </div>
    </div>
  )
}

export default App
