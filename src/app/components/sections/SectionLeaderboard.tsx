interface LeaderboardEntry {
  name: string;
  wins: number;
  draws: number;
  losses: number;
  score: number;
}

interface LeaderboardTableProps {
  leaderboard: LeaderboardEntry[];
}

function LeaderboardTable({ leaderboard }: LeaderboardTableProps) {
  // Sort by score descending, then by wins descending
  const sortedLeaderboard = [...leaderboard].sort((a, b) => {
    if (a.score !== b.score) return b.score - a.score;
    return b.wins - a.wins;
  });

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300">
      {/* Mobile view - cards */}
      <div className="md:hidden">
        {sortedLeaderboard.map((player, index) => (
          <div
            key={index}
            className={`p-4 border-b border-gray-200 ${
              index < 3 ? "bg-gray-100" : ""
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <span
                  className={`font-bold text-lg ${
                    index < 3 ? "text-gray-900" : "text-gray-600"
                  }`}
                >
                  #{index + 1}
                </span>
                <div className="text-sm font-medium text-gray-900">
                  {player.name}
                </div>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-gray-900 text-white">
                {player.score}
              </span>
            </div>
            <div className="flex justify-center space-x-4 text-xs">
              <span className="inline-flex items-center px-2 py-1 rounded-full font-medium bg-gray-100 text-gray-800 border border-gray-300">
                W: {player.wins}
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-full font-medium bg-gray-100 text-gray-800 border border-gray-300">
                D: {player.draws}
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-full font-medium bg-gray-100 text-gray-800 border border-gray-300">
                L: {player.losses}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop view - table */}
      <div className="hidden md:block">
        <table className="w-full">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider">
                Player
              </th>
              <th className="px-6 py-4 text-center font-semibold text-sm uppercase tracking-wider">
                W
              </th>
              <th className="px-6 py-4 text-center font-semibold text-sm uppercase tracking-wider">
                D
              </th>
              <th className="px-6 py-4 text-center font-semibold text-sm uppercase tracking-wider">
                L
              </th>
              <th className="px-6 py-4 text-center font-semibold text-sm uppercase tracking-wider">
                Score
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedLeaderboard.map((player, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-50 transition-colors duration-150 ${
                  index < 3 ? "bg-gray-100" : ""
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`font-bold text-lg ${
                      index < 3 ? "text-gray-900" : "text-gray-600"
                    }`}
                  >
                    {index + 1}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {player.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-300">
                    {player.wins}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-300">
                    {player.draws}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-300">
                    {player.losses}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-gray-900 text-white">
                    {player.score}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface SectionLeaderboardProps {
  leaderboard: LeaderboardEntry[];
  className?: string;
}

export default function SectionLeaderboard({
  leaderboard,
  className = "",
}: SectionLeaderboardProps) {
  return (
    <section className={`max-w-4xl w-full text-center ${className}`}>
      <LeaderboardTable leaderboard={leaderboard} />
    </section>
  );
}
