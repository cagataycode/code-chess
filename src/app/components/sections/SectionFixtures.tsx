import { Card } from "../ui";

interface Fixture {
  round: number;
  player1: string;
  player2: string;
}
interface SectionFixturesProps {
  fixtures: Fixture[];
  className?: string;
}
export default function SectionFixtures({
  fixtures,
  className = "",
}: SectionFixturesProps) {
  return (
    <section className={`max-w-2xl w-full text-center ${className}`}>
      <Card>
        {" "}
        <h2 className="text-2xl font-semibold mb-4 text-black">
          Fixtures
        </h2>{" "}
      </Card>
      <table className="w-full bg-white rounded shadow text-left">
        <thead>
          <tr>
            <th className="px-4 py-2">Round</th>
            <th className="px-4 py-2">Player 1</th>
            <th className="px-4 py-2">Player 2</th>
          </tr>
        </thead>
        <tbody>
          {fixtures.map((f, i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-2">{f.round}</td>
              <td className="px-4 py-2">{f.player1}</td>
              <td className="px-4 py-2">{f.player2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
