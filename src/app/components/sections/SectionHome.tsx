import { Card } from "../ui";
import Image from "next/image";

interface SectionHomeProps {
  intro: string;
  className?: string;
}

export default function SectionHome({
  intro,
  className = "",
}: SectionHomeProps) {
  return (
    <section className={`w-full flex justify-center ${className}`}>
      <Card className="px-0">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-neutral-50 px-4 md:px-6">
            Welcome!
          </h2>
          <p className="text-neutral-50 whitespace-pre-line leading-relaxed text-base md:text-lg mb-6 md:mb-8 px-4 md:px-6">
            {intro}
          </p>
          <div className="mt-8 md:mt-10 px-4 md:px-6">
            <Image
              src="/chess-vector.svg"
              alt="chess"
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
