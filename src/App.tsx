import { Routes, Route } from "react-router-dom"
import Home from "@/components/Home"
import LayUp from "@/pages/LayUp"
import NewKiz from "@/pages/NewKiz"
import Pading from "@/pages/Pading"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/layup" element={<LayUp />} />
      <Route path="/newkiz" element={<NewKiz />} />
      <Route path="/pading" element={<Pading />} />
    </Routes>
  )
}

export default App
