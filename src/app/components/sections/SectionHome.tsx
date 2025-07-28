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
      <Card>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">
            Welcome!
          </h2>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed text-base md:text-lg mb-4 md:mb-6">
            {intro}
          </p>
          <div className="mt-6 md:mt-8">
            <Image
              src="/deniz-soldat.jpeg"
              alt="Deniz Soldat"
              width={300}
              height={200}
              className="rounded-lg mx-auto w-full max-w-md"
              priority
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
