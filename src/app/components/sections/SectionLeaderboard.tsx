import Card from "../ui/Card";

interface LeaderboardEntry {
  name: string;
  points: number;
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
    <section className={`max-w-2xl w-full text-center ${className}`}>
      <Card>
        <h2 className="text-2xl font-semibold mb-4">Leaderboard</h2>
      </Card>
      <table className="w-full bg-white rounded shadow text-left">
        <thead>
          <tr>
            <th className="px-4 py-2">Player</th>
            <th className="px-4 py-2">Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((p, i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-2">{p.name}</td>
              <td className="px-4 py-2">{p.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
