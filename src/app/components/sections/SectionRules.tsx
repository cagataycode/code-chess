import { Card } from "../ui";

interface SectionRulesProps {
  className?: string;
}

export default function SectionRules({ className = "" }: SectionRulesProps) {
  return (
    <section className={`w-full flex justify-center ${className}`}>
      <div className="max-w-4xl w-full flex flex-col gap-6">
        <Card>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
            General Club Rules
          </h2>
        </Card>

        {/* Meeting Times and Locations */}
        <Card>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
            Meeting Times & Locations
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
            <li>
              We gather weekly on campus in designated common areas to play,
              chat and challenge each other.
            </li>
            <li>
              Since we&apos;re running a league, fixtures (match schedules) will
              be posted weekly so everyone knows who they&apos;re facing next.
            </li>
            <li>
              Players are responsible for coordinating with their opponents to
              find a convenient time and place on campus to play their league
              matches.
            </li>
          </ul>
        </Card>

        {/* Communication Channels */}
        <Card>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
            Communication Channels
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
            <li>Slack is our main communication channel.</li>
            <li>
              Join the{" "}
              <span className="font-mono bg-gray-200 px-2 py-1 rounded text-sm">
                #games-chess
              </span>{" "}
              channel for all announcements, scheduling and discussions.
            </li>
            <li>Don&apos;t miss out!</li>
          </ul>
        </Card>

        {/* League Format */}
        <Card>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
            League Format
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
            <li>
              All players participate in a single, open league to ensure
              inclusivity and simplicity.
            </li>
            <li>
              Each player will compete against every other participant during
              the semester.
            </li>
            <li>
              Depending on the total number of participants, the number of
              matches may be adjusted to maintain a balanced and manageable
              schedule.
            </li>
          </ul>
        </Card>

        {/* Match Format */}
        <Card>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
            Match Format
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
            <li>
              Matches are played using the standard time controls (see Time
              Controls).
            </li>
            <li>
              Players are responsible for coordinating and completing their
              matches within the designated time frame.
            </li>
          </ul>
        </Card>

        {/* Scoring System */}
        <Card>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
            Scoring System
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
            <li>
              Win: <span className="font-semibold">1 point</span>
            </li>
            <li>
              Draw: <span className="font-semibold">0.5 points</span>
            </li>
            <li>
              Loss: <span className="font-semibold">0 points</span>
            </li>
          </ul>
        </Card>

        {/* Time Controls */}
        <Card>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
            Time Controls
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
            <li>
              Matches use a{" "}
              <span className="font-semibold">10-minute per player</span> time
              control.
            </li>
            <li>
              Chess clocks are mandatory for all official league games to ensure
              fair and timely play.
            </li>
          </ul>
        </Card>

        {/* Conduct During Matches */}
        <Card>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
            Conduct During Matches
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
            <li>
              Any disputes during a match should first be discussed calmly
              between the players.
            </li>
            <li>
              Cheating or unsportsmanlike conduct will result in immediate
              disqualification.
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
