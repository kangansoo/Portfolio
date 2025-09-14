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
    <div className="w-full h-full border-b-1 border-gray-300 flex flex-row items-center justify-center">
      <div className="w-[80%] h-full flex flex-row justify-between items-center text-font-color font-bold">
        <div className="cursor-pointer select-none hover:animate-pulse-color text-lg" onClick={onLogoClick}>
          Ansoo
        </div>
        <div className="flex flex-row gap-6 cursor-pointer select-none">
          <div className={navItemClasses} onClick={onProjectsClick}>
            projects
          </div>
          <div className={navItemClasses} onClick={onAboutClick}>
            about
          </div>
          <div className={navItemClasses} onClick={onSkillsClick}>
            skills
          </div>
          <div className={navItemClasses} onClick={onExpClick}>
            exp
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
