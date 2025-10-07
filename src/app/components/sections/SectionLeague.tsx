import { Card } from "../ui";
import Image from "next/image";

interface SectionLeagueProps {
  leagueInfo: string;
  className?: string;
}

export default function SectionLeague({
  leagueInfo,
  className = "",
}: SectionLeagueProps) {
  return (
    <section className={`w-full flex justify-center ${className}`}>
      <Card>
        <div className="text-center">
          <p className="text-neutral-50 whitespace-pre-line leading-relaxed text-base md:text-lg mb-6 md:mb-8">
            {leagueInfo}
          </p>
          <div className="mt-8 md:mt-10">
            <Image
              src="/chess-board.jpg"
              alt="Chess Board"
              width={1000}
              height={1000}
              className="rounded-xl mx-auto w-full max-w-md opacity-90"
              priority
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
