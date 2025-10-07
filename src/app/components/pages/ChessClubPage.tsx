"use client";
import { useState, useRef } from "react";
import { Header, NavBar } from "../layout";
import { MainContent } from "./";
import { NAV_ITEMS } from "../../data";

export default function ChessClubPage() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const mainRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleNavClick = (idx: number, key: string) => {
    setActiveSection(key);
    // Scroll to the selected section horizontally
    sectionRefs.current[idx]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest", // Prevents vertical scrolling
    });
  };

  const handleRefsReady = (refs: {
    mainRef: React.RefObject<HTMLDivElement | null>;
    sectionRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  }) => {
    mainRef.current = refs.mainRef.current;
    sectionRefs.current = refs.sectionRefs.current;
  };

  return (
    <div className="relative z-10 w-full flex flex-col items-center min-h-screen">
      <Header />
      <NavBar
        navItems={NAV_ITEMS}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
      <MainContent
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onRefsReady={handleRefsReady}
      />
    </div>
  );
}
