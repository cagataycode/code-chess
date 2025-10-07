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
    if (!fixture.completed || !fixture.result) return "text-gray-900";
    if (fixture.result === "player1") return "text-green-600 font-bold";
    if (fixture.result === "draw") return "text-blue-600";
    return "text-gray-500";
  };

  const getPlayer2Style = () => {
    if (!fixture.completed || !fixture.result) return "text-gray-900";
    if (fixture.result === "player2") return "text-green-600 font-bold";
    if (fixture.result === "draw") return "text-blue-600";
    return "text-gray-500";
  };

  const getBadgeStyle = () => {
    if (fixture.player1 === "BYE" || fixture.player2 === "BYE") return "bg-yellow-100 border-yellow-300";
    if (!fixture.completed || !fixture.result) return "bg-gray-200 border-gray-300";
    if (fixture.result === "draw") return "bg-blue-100 border-blue-300";
    return "bg-green-100 border-green-300";
  };

  const isBye = fixture.player1 === "BYE" || fixture.player2 === "BYE";

  return (
    <div className={`px-6 py-4 transition-colors duration-150 ${isBye ? "bg-yellow-50 hover:bg-yellow-100" : "hover:bg-gray-50"}`}>
      {/* Mobile view */}
      <div className="md:hidden">
        <div className="text-center space-y-2">
          <div className={`font-semibold text-sm ${getPlayer1Style()}`}>
            {fixture.player1}
          </div>
          <div className="flex items-center justify-center">
            <div className={`w-12 h-6 ${getBadgeStyle()} rounded flex items-center justify-center border`}>
              <span className="text-xs font-bold text-gray-700">{getResultDisplay()}</span>
            </div>
          </div>
          <div className={`font-semibold text-sm ${getPlayer2Style()}`}>
            {fixture.player2}
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <div className="text-right min-w-[200px]">
            <div className={`font-semibold ${getPlayer1Style()}`}>{fixture.player1}</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-16 h-8 ${getBadgeStyle()} rounded flex items-center justify-center border`}>
              <span className="text-xs font-bold text-gray-700">{getResultDisplay()}</span>
            </div>
          </div>
          <div className="text-left min-w-[200px]">
            <div className={`font-semibold ${getPlayer2Style()}`}>{fixture.player2}</div>
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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300">
      <div className="bg-gray-900 text-white px-6 py-4">
        <h3 className="text-lg font-semibold">{groupName}</h3>
      </div>

      <div className="divide-y divide-gray-200">
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
  const weeks = [
    {
      week: 5,
      title: "Week 5 Fixtures",
      description: "All matches for the fifth week of the tournament",
      groups: [
        { name: "Group A", fixtures: fixtures.week5.groupA },
        { name: "Group B", fixtures: fixtures.week5.groupB },
        { name: "Group C", fixtures: fixtures.week5.groupC },
        { name: "Group D", fixtures: fixtures.week5.groupD },
      ],
    },
    {
      week: 4,
      title: "Week 4 Fixtures",
      description: "All matches for the fourth week of the tournament",
      groups: [
        { name: "Group A", fixtures: fixtures.week4.groupA },
        { name: "Group B", fixtures: fixtures.week4.groupB },
        { name: "Group C", fixtures: fixtures.week4.groupC },
        { name: "Group D", fixtures: fixtures.week4.groupD },
      ],
    },
    {
      week: 3,
      title: "Week 3 Fixtures",
      description: "All matches for the third week of the tournament",
      groups: [
        { name: "Group A", fixtures: fixtures.week3.groupA },
        { name: "Group B", fixtures: fixtures.week3.groupB },
        { name: "Group C", fixtures: fixtures.week3.groupC },
        { name: "Group D", fixtures: fixtures.week3.groupD },
      ],
    },
    {
      week: 2,
      title: "Week 2 Fixtures",
      description: "All matches for the second week of the tournament",
      groups: [
        { name: "Group A", fixtures: fixtures.week2.groupA },
        { name: "Group B", fixtures: fixtures.week2.groupB },
        { name: "Group C", fixtures: fixtures.week2.groupC },
        { name: "Group D", fixtures: fixtures.week2.groupD },
      ],
    },
    {
      week: 1,
      title: "Week 1 Fixtures",
      description: "All matches for the first week of the tournament",
      groups: [
        { name: "Group A", fixtures: fixtures.week1.groupA },
        { name: "Group B", fixtures: fixtures.week1.groupB },
        { name: "Group C", fixtures: fixtures.week1.groupC },
        { name: "Group D", fixtures: fixtures.week1.groupD },
      ],
    },
  ];

  return (
    <section className={`max-w-6xl w-full text-center ${className}`}>
      <div className="space-y-12">
        {weeks.map((week) => (
          <div key={week.week} className="space-y-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                {week.title}
              </h2>
              <p className="text-white">{week.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {week.groups.map((group) => (
                <FixtureGroup
                  key={`${week.week}-${group.name}`}
                  groupName={group.name}
                  fixtures={group.fixtures}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
