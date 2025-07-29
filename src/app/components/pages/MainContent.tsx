"use client";
import { useRef, useEffect } from "react";
import {
  SectionHome,
  SectionLeague,
  SectionRules,
  SectionFixtures,
  SectionLeaderboard,
  SectionContact,
} from "../sections";
import {
  NAV_ITEMS,
  INTRO,
  LEAGUE_INFO,
  FIXTURES,
  LEADERBOARD,
} from "../../data";

interface MainContentProps {
  onScroll: (scrollLeft: number) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  onRefsReady: (refs: {
    mainRef: React.RefObject<HTMLDivElement | null>;
    sectionRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  }) => void;
}

export default function MainContent({
  onScroll,
  activeSection,
  setActiveSection,
  onRefsReady,
}: MainContentProps) {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mainRef = useRef<HTMLDivElement | null>(null);

  // Pass refs to parent component when they're ready
  useEffect(() => {
    onRefsReady({ mainRef, sectionRefs });
  }, [onRefsReady]);

  const handleScroll = () => {
    if (!mainRef.current) return;
    const scrollLeft = mainRef.current.scrollLeft;
    onScroll(scrollLeft);
    const width = mainRef.current.offsetWidth;
    const idx = Math.round(scrollLeft / width);
    const navKey = NAV_ITEMS[idx]?.key;
    if (navKey && navKey !== activeSection) {
      setActiveSection(navKey);
    }
  };

  return (
    <main
      ref={mainRef}
      className="w-full h-full overflow-x-auto scroll-smooth snap-x snap-mandatory"
      onScroll={handleScroll}
    >
      <div className="flex flex-nowrap w-full h-full items-start">
        <div
          ref={(el) => {
            sectionRefs.current[0] = el;
          }}
          className="min-w-full max-w-full h-full px-4 flex flex-col items-center snap-start overflow-y-auto"
        >
          <SectionHome intro={INTRO} className="mt-2" />
        </div>
        <div
          ref={(el) => {
            sectionRefs.current[1] = el;
          }}
          className="min-w-full max-w-full h-full px-4 flex flex-col items-center snap-start overflow-y-auto pb-8"
        >
          <SectionRules className="mt-2" />
        </div>
        <div
          ref={(el) => {
            sectionRefs.current[2] = el;
          }}
          className="min-w-full max-w-full h-full px-4 flex flex-col items-center snap-start overflow-y-auto"
        >
          <SectionLeague leagueInfo={LEAGUE_INFO} className="mt-2" />
        </div>
        <div
          ref={(el) => {
            sectionRefs.current[3] = el;
          }}
          className="min-w-full max-w-full h-full px-4 flex flex-col items-center snap-start overflow-y-auto"
        >
          <SectionFixtures fixtures={FIXTURES} className="mt-2" />
        </div>
        <div
          ref={(el) => {
            sectionRefs.current[4] = el;
          }}
          className="min-w-full max-w-full h-full px-4 flex flex-col items-center snap-start overflow-y-auto"
        >
          <SectionLeaderboard leaderboard={LEADERBOARD} className="mt-2" />
        </div>
        <div
          ref={(el) => {
            sectionRefs.current[5] = el;
          }}
          className="min-w-full max-w-full h-full px-4 flex flex-col items-center snap-start overflow-y-auto"
        >
          <SectionContact className="mt-2" />
        </div>
      </div>
    </main>
  );
}

export { NAV_ITEMS };
