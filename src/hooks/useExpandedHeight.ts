import { useState, useEffect } from "react"

const DESKTOP_HEIGHT = 680
const IS_MOBILE = () => typeof window !== "undefined" && window.innerWidth < 640

const calc = () => {
  if (typeof window === "undefined") return { height: DESKTOP_HEIGHT, bottom: "78px" }
  if (!IS_MOBILE()) return { height: DESKTOP_HEIGHT, bottom: "78px" }
  // visualViewport: 가상 키보드가 올라온 실제 가시 영역 높이
  const vh = window.visualViewport?.height ?? window.innerHeight
  return {
    height: Math.min(DESKTOP_HEIGHT, vh - 40), // 패널 상하 여백 40px 확보
    bottom: "20px",
  }
}

export const useExpandedHeight = () => {
  const [values, setValues] = useState(calc)

  useEffect(() => {
    const update = () => setValues(calc())

    // visualViewport resize: 가상 키보드 열림/닫힘 감지
    window.visualViewport?.addEventListener("resize", update)
    // window resize: 화면 회전, 브라우저 크기 변경 감지
    window.addEventListener("resize", update)

    return () => {
      window.visualViewport?.removeEventListener("resize", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return values
}
