interface NavBarProps {
  navItems: { key: string; label: string }[];
  activeSection: string;
  onNavClick: (idx: number, key: string) => void;
}

export default function NavBar({
  navItems,
  activeSection,
  onNavClick,
}: NavBarProps) {
  return (
    <nav className="w-full bg-neutral-950 border-b border-neutral-900 flex justify-start md:justify-center overflow-x-auto whitespace-nowrap scrollbar-hide sticky top-0 z-50 backdrop-blur-sm bg-neutral-950/95">
      <ul className="flex gap-1 md:gap-2 py-4 items-center px-4">
        {navItems.map((item, idx) => (
          <li key={item.key} className="inline-block">
            <button
              className={`px-3 md:px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-xs md:text-sm whitespace-nowrap ${
                activeSection === item.key
                  ? "bg-neutral-50 text-neutral-950 shadow-lg shadow-neutral-50/10"
                  : "text-neutral-50 hover:bg-neutral-50/10 hover:text-neutral-50"
              }`}
              onClick={() => onNavClick(idx, item.key)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
