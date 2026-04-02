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

  const navItems = [
    { label: "projects", onClick: onProjectsClick },
    { label: "about", onClick: onAboutClick },
    { label: "skills", onClick: onSkillsClick },
    { label: "exp", onClick: onExpClick },
  ]

  return (
    <header className="w-full border-b-1 border-gray-300 flex flex-row items-center justify-center h-12 top-0 sticky z-40 bg-white shadow-md">
      <div className="w-[90%] md:w-[80%] h-full flex flex-row justify-between items-center text-font-color font-bold">
        <strong className="cursor-pointer select-none hover:animate-pulse-color text-lg" onClick={onLogoClick}>
          Ansoo
        </strong>

        {/* Desktop Navigation */}
        <nav aria-label="메인 네비게이션" className="hidden md:block">
          <ul className="flex flex-row gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <button type="button" className={navItemClasses} onClick={item.onClick}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
