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
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            League Structure
          </h2>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed text-lg mb-6">
            {leagueInfo}
          </p>
          <div className="mt-8">
            <Image
              src="/deniz-soldat.jpeg"
              alt="Deniz Soldat"
              width={1000}
              height={1000}
              className="rounded-lg mx-auto"
              priority
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
