import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import GradientText from "./GradientText"

const LandingComponent = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 2000)
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
          <GradientText className="text-3xl md:text-5xl font-nanumsquare font-bold text-center" isAnimated={true}>
            <>
              강안수's <br className="md:hidden" />
              Portfolio
            </>
          </GradientText>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LandingComponent
