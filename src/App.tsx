import { Routes, Route } from "react-router-dom"
import Home from "@/components/Home"
import LayUp from "@/pages/LayUp"
import NewKiz from "@/pages/NewKiz"
import Pading from "@/pages/Pading"
import Konciar from "@/pages/Konciar"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/layup" element={<LayUp />} />
      <Route path="/newkiz" element={<NewKiz />} />
      <Route path="/pading" element={<Pading />} />
      <Route path="/konciar" element={<Konciar />} />
    </Routes>
  )
}

export default App
