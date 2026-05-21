import { LuMoon, LuSun } from "react-icons/lu";

interface HeaderProps {
  onLogoClick: () => void;
  onProjectsClick: () => void;
  onAboutClick: () => void;
  onSkillsClick: () => void;
  onExpClick: () => void;
  isDark: boolean;
  onToggleDark: () => void;
}

const Header = ({
  onLogoClick,
  onProjectsClick,
  onAboutClick,
  onSkillsClick,
  onExpClick,
  isDark,
  onToggleDark,
}: HeaderProps) => {
  const navItemClasses =
    "relative cursor-pointer select-none pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-point after:transition-all after:duration-300 hover:after:w-full hover:text-point";

  const navItems = [
    { label: "projects", onClick: onProjectsClick },
    { label: "about", onClick: onAboutClick },
    { label: "skills", onClick: onSkillsClick },
    { label: "exp", onClick: onExpClick },
  ];

  return (
    <header className="w-full border-b-1 border-gray-300 dark:border-gray-900 flex flex-row items-center justify-center h-12 top-0 sticky z-40 bg-white dark:bg-[#16191f] shadow-md transition-colors duration-300">
      <div className="w-[90%] md:w-[80%] h-full flex flex-row justify-between items-center text-font-title font-bold">
        <strong
          className="cursor-pointer select-none hover:animate-pulse-color text-lg"
          onClick={onLogoClick}
        >
          Ansoo
        </strong>

        <div className="flex items-center gap-5">
          {/* Desktop Navigation */}
          <nav aria-label="메인 네비게이션" className="hidden md:block">
            <ul className="flex flex-row gap-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    className={navItemClasses}
                    onClick={item.onClick}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Dark mode toggle */}
          <button
            type="button"
            onClick={onToggleDark}
            className="flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 text-font-title hover:text-point"
            aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
          >
            {isDark ? (
              <LuSun className="text-base" />
            ) : (
              <LuMoon className="text-base" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
