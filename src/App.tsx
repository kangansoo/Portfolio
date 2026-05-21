import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"

const Home = lazy(() => import("@/components/Home"))
const ProjectDetail = lazy(() => import("@/pages/ProjectDetail"))

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Suspense>
  )
}

export default App
