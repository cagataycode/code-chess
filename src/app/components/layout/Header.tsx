import Image from "next/image";

export default function Header() {
  return (
    <header
      className="w-full py-8 flex flex-col items-center shadow-sm relative overflow-hidden"
      style={{
        backgroundImage: 'url("/chess-tiles.svg")',
        backgroundSize: "480px 480px",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="absolute inset-0 bg-white"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
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
        <p className=" mb-10 text-sm md:text-lg text-black">
          Where brains meet battles and pawns become legends!
        </p>
      </div>
    </header>
  );
}
