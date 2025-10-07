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
    <div className="bg-neutral-950 rounded-2xl shadow-xl overflow-hidden border border-neutral-900">
      {/* Mobile view - cards */}
      <div className="md:hidden">
        {sortedLeaderboard.map((player, index) => (
          <div
            key={index}
            className={`p-5 border-b border-neutral-900 ${
              index < 3 ? "bg-neutral-50/5" : ""
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <span
                  className={`font-bold text-xl ${
                    index < 3 ? "text-neutral-50" : "text-neutral-50"
                  }`}
                >
                  #{index + 1}
                </span>
                <div className="text-sm font-semibold text-neutral-50">
                  {player.name}
                </div>
              </div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-neutral-50 text-neutral-950 shadow-sm">
                {player.score}
              </span>
            </div>
            <div className="flex justify-center space-x-3 text-xs">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full font-semibold bg-neutral-950 text-neutral-50 border border-neutral-900">
                W: {player.wins}
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full font-semibold bg-neutral-950 text-neutral-50 border border-neutral-900">
                D: {player.draws}
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full font-semibold bg-neutral-950 text-neutral-50 border border-neutral-900">
                L: {player.losses}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop view - table */}
      <div className="hidden md:block">
        <table className="w-full">
          <thead className="bg-neutral-50 text-neutral-950">
            <tr>
              <th className="px-8 py-5 text-left font-bold text-xs uppercase tracking-wider">
                Rank
              </th>
              <th className="px-8 py-5 text-left font-bold text-xs uppercase tracking-wider">
                Player
              </th>
              <th className="px-8 py-5 text-center font-bold text-xs uppercase tracking-wider">
                Wins
              </th>
              <th className="px-8 py-5 text-center font-bold text-xs uppercase tracking-wider">
                Draws
              </th>
              <th className="px-8 py-5 text-center font-bold text-xs uppercase tracking-wider">
                Losses
              </th>
              <th className="px-8 py-5 text-center font-bold text-xs uppercase tracking-wider">
                Score
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-900">
            {sortedLeaderboard.map((player, index) => (
              <tr
                key={index}
                className={`hover:bg-neutral-50/5 transition-all duration-200 ${
                  index < 3 ? "bg-neutral-50/5" : ""
                }`}
              >
                <td className="px-8 py-5 whitespace-nowrap">
                  <span
                    className={`font-bold text-xl ${
                      index < 3 ? "text-neutral-50" : "text-neutral-50"
                    }`}
                  >
                    {index + 1}
                  </span>
                </td>
                <td className="px-8 py-5 whitespace-nowrap">
                  <div className="text-sm font-semibold text-neutral-50">
                    {player.name}
                  </div>
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-neutral-950 text-neutral-50 border border-neutral-900">
                    {player.wins}
                  </span>
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-neutral-950 text-neutral-50 border border-neutral-900">
                    {player.draws}
                  </span>
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-neutral-950 text-neutral-50 border border-neutral-900">
                    {player.losses}
                  </span>
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-center">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-neutral-50 text-neutral-950 shadow-sm">
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
