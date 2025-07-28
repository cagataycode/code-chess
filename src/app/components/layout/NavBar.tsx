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
    <nav className="w-full bg-gray-100 border-b border-gray-200 flex justify-center overflow-x-auto whitespace-nowrap scrollbar-hide">
      <ul className="flex gap-2 md:gap-6 py-6 min-w-max items-center px-4">
        {navItems.map((item, idx) => (
          <li key={item.key} className="inline-block">
            <button
              className={`px-2 md:px-4 py-2 rounded transition font-medium text-xs md:text-base whitespace-nowrap ${
                activeSection === item.key
                  ? "bg-gray-800 text-white"
                  : "text-gray-700 hover:bg-gray-200"
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
