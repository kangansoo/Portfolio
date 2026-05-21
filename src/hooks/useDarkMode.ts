import { useState, useEffect } from "react"

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = localStorage.getItem("darkMode")
      if (stored !== null) return stored === "true"
      return window.matchMedia("(prefers-color-scheme: dark)").matches
    } catch {
      return false
    }
  })

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    localStorage.setItem("darkMode", String(isDark))
  }, [isDark])

  return { isDark, toggle: () => setIsDark((d) => !d) }
}
