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
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Contact & Communication
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Join our Slack workspace and head to{" "}
            <span className="font-mono bg-gray-200 px-2 py-1 rounded text-sm">
              #games-chess
            </span>{" "}
            for all announcements, scheduling, and discussions.
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
