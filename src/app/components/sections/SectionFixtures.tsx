import { useState } from "react";

interface Fixture {
  player1: string;
  player2: string;
  result?: "player1" | "player2" | "draw" | null;
  completed?: boolean;
}

interface FixturesData {
  week1: {
    groupA: Fixture[];
    groupB: Fixture[];
    groupC: Fixture[];
    groupD: Fixture[];
  };
  week2: {
    groupA: Fixture[];
    groupB: Fixture[];
    groupC: Fixture[];
    groupD: Fixture[];
  };
  week3: {
    groupA: Fixture[];
    groupB: Fixture[];
    groupC: Fixture[];
    groupD: Fixture[];
  };
  week4: {
    groupA: Fixture[];
    groupB: Fixture[];
    groupC: Fixture[];
    groupD: Fixture[];
  };
  week5: {
    groupA: Fixture[];
    groupB: Fixture[];
    groupC: Fixture[];
    groupD: Fixture[];
  };
}

interface FixtureRowProps {
  fixture: Fixture;
}

function FixtureRow({ fixture }: FixtureRowProps) {
  const getResultDisplay = () => {
    if (fixture.player1 === "BYE" || fixture.player2 === "BYE") return "BYE";
    if (!fixture.completed || !fixture.result) return "VS";
    if (fixture.result === "draw") return "DRAW";
    return fixture.result === "player1" ? "W-L" : "L-W";
  };

  const getPlayer1Style = () => {
    if (!fixture.completed || !fixture.result) return "text-neutral-50";
    if (fixture.result === "player1") return "text-neutral-50 font-extrabold";
    if (fixture.result === "draw") return "text-neutral-50";
    return "text-neutral-50/50";
  };

  const getPlayer2Style = () => {
    if (!fixture.completed || !fixture.result) return "text-neutral-50";
    if (fixture.result === "player2") return "text-neutral-50 font-extrabold";
    if (fixture.result === "draw") return "text-neutral-50";
    return "text-neutral-50/50";
  };

  const getBadgeStyle = () => {
    if (fixture.player1 === "BYE" || fixture.player2 === "BYE")
      return "bg-neutral-50/10 border-neutral-900";
    if (!fixture.completed || !fixture.result)
      return "bg-neutral-950 border-neutral-900";
    if (fixture.result === "draw") return "bg-neutral-950 border-neutral-900";
    return "bg-neutral-50 border-neutral-50";
  };

  const isBye = fixture.player1 === "BYE" || fixture.player2 === "BYE";

  return (
    <div
      className={`px-6 py-5 transition-all duration-200 ${
        isBye
          ? "bg-neutral-50/5 hover:bg-neutral-50/10"
          : "hover:bg-neutral-50/5"
      }`}
    >
      {/* Mobile view */}
      <div className="md:hidden">
        <div className="flex items-center justify-between gap-2">
          <div className={`font-bold text-sm flex-1 text-right ${getPlayer1Style()}`}>
            {fixture.player1}
          </div>
          <div className="flex items-center justify-center">
            <div
              className={`w-14 h-7 ${getBadgeStyle()} rounded-full flex items-center justify-center border`}
            >
              <span
                className={`text-xs font-bold ${
                  fixture.completed &&
                  fixture.result &&
                  fixture.result !== "draw"
                    ? "text-neutral-950"
                    : "text-neutral-50"
                }`}
              >
                {getResultDisplay()}
              </span>
            </div>
          </div>
          <div className={`font-bold text-sm flex-1 text-left ${getPlayer2Style()}`}>
            {fixture.player2}
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex items-center justify-center">
        <div className="flex items-center space-x-6">
          <div className="text-right min-w-[200px]">
            <div className={`font-bold ${getPlayer1Style()}`}>
              {fixture.player1}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div
              className={`w-20 h-9 ${getBadgeStyle()} rounded-full flex items-center justify-center border shadow-sm`}
            >
              <span
                className={`text-xs font-bold ${
                  fixture.completed &&
                  fixture.result &&
                  fixture.result !== "draw"
                    ? "text-neutral-950"
                    : "text-neutral-50"
                }`}
              >
                {getResultDisplay()}
              </span>
            </div>
          </div>
          <div className="text-left min-w-[200px]">
            <div className={`font-bold ${getPlayer2Style()}`}>
              {fixture.player2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FixtureGroupProps {
  groupName: string;
  fixtures: Fixture[];
}

function FixtureGroup({ groupName, fixtures }: FixtureGroupProps) {
  return (
    <div className="bg-neutral-950 rounded-2xl shadow-xl overflow-hidden border border-neutral-900">
      <div className="bg-neutral-50 text-neutral-950 px-8 py-5">
        <h3 className="text-lg font-bold tracking-wide">{groupName}</h3>
      </div>

      <div className="divide-y divide-neutral-900">
        {fixtures.map((fixture, index) => (
          <FixtureRow key={index} fixture={fixture} />
        ))}
      </div>
    </div>
  );
}

interface SectionFixturesProps {
  fixtures: FixturesData;
  className?: string;
}

export default function SectionFixtures({
  fixtures,
  className = "",
}: SectionFixturesProps) {
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);

  const weeks = [
    {
      week: 5,
      title: "Week 5",
      groups: [
        { name: "Group A", fixtures: fixtures.week5.groupA },
        { name: "Group B", fixtures: fixtures.week5.groupB },
        { name: "Group C", fixtures: fixtures.week5.groupC },
        { name: "Group D", fixtures: fixtures.week5.groupD },
      ],
    },
    {
      week: 4,
      title: "Week 4",
      groups: [
        { name: "Group A", fixtures: fixtures.week4.groupA },
        { name: "Group B", fixtures: fixtures.week4.groupB },
        { name: "Group C", fixtures: fixtures.week4.groupC },
        { name: "Group D", fixtures: fixtures.week4.groupD },
      ],
    },
    {
      week: 3,
      title: "Week 3",
      groups: [
        { name: "Group A", fixtures: fixtures.week3.groupA },
        { name: "Group B", fixtures: fixtures.week3.groupB },
        { name: "Group C", fixtures: fixtures.week3.groupC },
        { name: "Group D", fixtures: fixtures.week3.groupD },
      ],
    },
    {
      week: 2,
      title: "Week 2",
      groups: [
        { name: "Group A", fixtures: fixtures.week2.groupA },
        { name: "Group B", fixtures: fixtures.week2.groupB },
        { name: "Group C", fixtures: fixtures.week2.groupC },
        { name: "Group D", fixtures: fixtures.week2.groupD },
      ],
    },
    {
      week: 1,
      title: "Week 1",
      groups: [
        { name: "Group A", fixtures: fixtures.week1.groupA },
        { name: "Group B", fixtures: fixtures.week1.groupB },
        { name: "Group C", fixtures: fixtures.week1.groupC },
        { name: "Group D", fixtures: fixtures.week1.groupD },
      ],
    },
  ];

  const currentWeek = weeks[currentWeekIndex];

  const handlePrevWeek = () => {
    setCurrentWeekIndex((prev) => (prev < weeks.length - 1 ? prev + 1 : 0));
  };

  const handleNextWeek = () => {
    setCurrentWeekIndex((prev) => (prev > 0 ? prev - 1 : weeks.length - 1));
  };

  return (
    <section className={`max-w-6xl w-full text-center ${className}`}>
      <div className="space-y-8">
        {/* Navigation Header */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <button
            onClick={handlePrevWeek}
            className="p-3 rounded-full bg-neutral-950 border border-neutral-900 text-neutral-50 hover:bg-neutral-50 hover:text-neutral-950 transition-all duration-200"
            aria-label="Previous week"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <h2 className="text-3xl font-bold text-neutral-50 min-w-[150px]">
            {currentWeek.title}
          </h2>

          <button
            onClick={handleNextWeek}
            className="p-3 rounded-full bg-neutral-950 border border-neutral-900 text-neutral-50 hover:bg-neutral-50 hover:text-neutral-950 transition-all duration-200"
            aria-label="Next week"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Fixtures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentWeek.groups.map((group) => (
            <FixtureGroup
              key={`${currentWeek.week}-${group.name}`}
              groupName={group.name}
              fixtures={group.fixtures}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
