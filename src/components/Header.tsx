interface HeaderProps {
  onLogoClick: () => void
  onProjectsClick: () => void
  onAboutClick: () => void
  onSkillsClick: () => void
  onExpClick: () => void
}

const Header = ({ onLogoClick, onProjectsClick, onAboutClick, onSkillsClick, onExpClick }: HeaderProps) => {
  const navItemClasses =
    "relative cursor-pointer select-none pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-font-hover after:transition-all after:duration-300 hover:after:w-full hover:text-font-hover"
  return (
    <header className="w-full border-b-1 border-gray-300 flex flex-row items-center justify-center h-12 top-0 sticky z-40 bg-white shadow-md">
      <div className="w-[80%] h-full flex flex-row justify-between items-center text-font-color font-bold">
        <strong className="cursor-pointer select-none hover:animate-pulse-color text-lg" onClick={onLogoClick}>
          Ansoo
        </strong>
        <nav aria-label="메인 네비게이션">
          <ul className="flex flex-row gap-6">
            <li>
              <button type="button" className={navItemClasses} onClick={onProjectsClick}>
                projects
              </button>
            </li>
            <li>
              <button type="button" className={navItemClasses} onClick={onAboutClick}>
                about
              </button>
            </li>
            <li>
              <button type="button" className={navItemClasses} onClick={onSkillsClick}>
                skills
              </button>
            </li>
            <li>
              <button type="button" className={navItemClasses} onClick={onExpClick}>
                exp
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
