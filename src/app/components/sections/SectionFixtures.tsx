interface Fixture {
  week: number;
  player1: string;
  player2: string;
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
  week: number;
  fixtures: Fixture[];
}

function FixtureGroup({ week, fixtures }: FixtureGroupProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300">
      <div className="bg-gray-900 text-white px-6 py-4">
        <h3 className="text-lg font-semibold">Week {week}</h3>
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
  fixtures: Fixture[];
  className?: string;
}

export default function SectionFixtures({
  fixtures,
  className = "",
}: SectionFixturesProps) {
  // Group fixtures by week
  const groupedFixtures = fixtures.reduce((groups, fixture) => {
    const week = fixture.week;
    if (!groups[week]) {
      groups[week] = [];
    }
    groups[week].push(fixture);
    return groups;
  }, {} as Record<number, Fixture[]>);

  return (
    <section className={`max-w-4xl w-full text-center ${className}`}>
      <div className="space-y-6">
        {Object.entries(groupedFixtures).map(([week, weekFixtures]) => (
          <FixtureGroup
            key={week}
            week={parseInt(week)}
            fixtures={weekFixtures}
          />
        ))}
      </div>
    </section>
  );
}
