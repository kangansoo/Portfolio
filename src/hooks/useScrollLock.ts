import { useEffect } from "react"

export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow

    if (isLocked) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
    } else {
      document.body.style.overflow = originalStyle
      document.body.style.position = "static"
      document.body.style.width = "auto"
    }

    return () => {
      document.body.style.overflow = originalStyle
      document.body.style.position = "static"
      document.body.style.width = "auto"
    }
  }, [isLocked])
}
