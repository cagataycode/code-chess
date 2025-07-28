import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full py-8 flex flex-col items-center bg-white shadow-sm">
      <h1 className="text-2xl md:text-4xl font-bold flex items-center gap-2">
        <Image
          src="/codelogo.svg"
          alt="CODE logo"
          width={60}
          height={60}
          className="md:w-[100px] md:h-[100px] inline-block align-middle"
          priority
        />
        <span className="text-black">Chess Club</span>
      </h1>
      <p className="mt-2 text-sm md:text-lg text-black">
        Where brains meet battles and pawns become legends!
      </p>
    </header>
  );
}
