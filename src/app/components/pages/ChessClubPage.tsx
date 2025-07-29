"use client";
import { useState, useRef } from "react";
import { Header, NavBar } from "../layout";
import { MainContent } from "./";
import { NAV_ITEMS } from "../../data";

interface ChessClubPageProps {
  onScrollChange: (scrollX: number) => void;
}

export default function ChessClubPage({ onScrollChange }: ChessClubPageProps) {
  const [activeSection, setActiveSection] = useState<string>("home");
  const mainRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleNavClick = (idx: number, key: string) => {
    setActiveSection(key);
    // Scroll to the selected section
    sectionRefs.current[idx]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
  };

  const handleScroll = (scrollLeft: number) => {
    onScrollChange(scrollLeft);
  };

  const handleRefsReady = (refs: {
    mainRef: React.RefObject<HTMLDivElement | null>;
    sectionRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  }) => {
    mainRef.current = refs.mainRef.current;
    sectionRefs.current = refs.sectionRefs.current;
  };

  return (
    <div className="relative z-10 w-full flex flex-col items-center h-full">
      <Header />
      <NavBar
        navItems={NAV_ITEMS}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
      <MainContent
        onScroll={handleScroll}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onRefsReady={handleRefsReady}
      />
    </div>
  );
}
