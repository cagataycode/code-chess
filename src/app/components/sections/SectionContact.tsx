import { Card } from "../ui";
import Image from "next/image";

interface SectionContactProps {
  className?: string;
}

export default function SectionContact({
  className = "",
}: SectionContactProps) {
  return (
    <section className={`w-full flex justify-center ${className}`}>
      <Card>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-neutral-50">
            Contact & Communication
          </h2>
          <p className="text-neutral-50 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
            Join our Slack workspace and head to{" "}
            <span className="font-mono bg-neutral-50 text-neutral-950 px-3 py-1 rounded text-sm">
              #chess-league
            </span>{" "}
            for all announcements, scheduling, and discussions.
          </p>
          <div className="mt-8 md:mt-10">
            <Image
              src="/deniz-soldat.jpeg"
              alt="Deniz Soldat"
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
