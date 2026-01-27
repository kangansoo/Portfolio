import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import GradientText from "./GradientText"

const LandingComponent = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="h-full w-full flex items-center justify-center bg-landing-900 absolute top-0 left-0 z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <GradientText className="text-5xl font-nanumsquare font-bold" isAnimated={true}>
            강안수's Portfolio
          </GradientText>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LandingComponent
