interface Fixture {
  player1: string;
  player2: string;
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
}

interface FixtureRowProps {
  fixture: Fixture;
}

function FixtureRow({ fixture }: FixtureRowProps) {
  return (
    <div className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150">
      {/* Mobile view */}
      <div className="md:hidden">
        <div className="text-center space-y-2">
          <div className="font-semibold text-gray-900 text-sm">
            {fixture.player1}
          </div>
          <div className="flex items-center justify-center">
            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center border border-gray-300">
              <span className="text-xs font-bold text-gray-600">VS</span>
            </div>
          </div>
          <div className="font-semibold text-gray-900 text-sm">
            {fixture.player2}
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="font-semibold text-gray-900">{fixture.player1}</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center border border-gray-300">
              <span className="text-xs font-bold text-gray-600">VS</span>
            </div>
          </div>
          <div className="text-left">
            <div className="font-semibold text-gray-900">{fixture.player2}</div>
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
