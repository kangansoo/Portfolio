import { MdEmail } from "react-icons/md"
import { FaGithub } from "react-icons/fa"
import { useState } from "react"

const Footer = () => {
  const [copiedType, setCopiedType] = useState("")

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedType(type)

      // 2초 후 복사 상태 초기화
      setTimeout(() => {
        setCopiedType("")
      }, 2000)
    } catch (err) {
      console.error("클립보드 복사 실패:", err)
      // 폴백: 구버전 브라우저 지원
      fallbackCopyTextToClipboard(text, type)
    }
  }

  // 구버전 브라우저 폴백
  const fallbackCopyTextToClipboard = (text: string, type: string) => {
    const textArea = document.createElement("textarea")
    textArea.value = text
    textArea.style.top = "0"
    textArea.style.left = "0"
    textArea.style.position = "fixed"

    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    try {
      document.execCommand("copy")
      setCopiedType(type)
      setTimeout(() => setCopiedType(""), 2000)
    } catch (err) {
      console.error("폴백 복사 실패:", err)
    }

    document.body.removeChild(textArea)
  }

  const openGithub = () => {
    window.open("https://github.com/kangansoo", "_blank", "noopener,noreferrer")
  }

  return (
    <footer className="w-full py-6 flex flex-row justify-center items-center bg-landing-700">
      <h2 className="sr-only">Home Page Footer</h2>
      <div className="w-[60%] h-[80%] flex flex-row justify-start items-center gap-7 text-gray-500 font-nexon">
        <section
          aria-labelledby="EmailAddress"
          className="text-xs cursor-pointer hover:animate-pulse-color flex flex-row justify-center items-center gap-2"
          onClick={() => copyToClipboard("ansoo971@gmail.com", "email")}
        >
          <h3 id="EmailAddress" className="sr-only">
            Email address
          </h3>
          <MdEmail />
          <p>{copiedType === "email" ? "✓ 복사됨!" : "ansoo971@gmail.com"}</p>
        </section>
        <section aria-labelledby="GithubAccount" className="text-xs cursor-pointer hover:animate-pulse-color flex flex-row justify-center items-center gap-2" onClick={() => openGithub()}>
          <h3 id="GithubAccount" className="sr-only">
            Github account
          </h3>
          <FaGithub />
          <p>{copiedType === "github" ? "✓ 복사됨!" : "kangansoo"}</p>
        </section>
      </div>
    </footer>
  )
}

export default Footer
