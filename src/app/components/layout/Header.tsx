import Image from "next/image";

export default function Header() {
  return (
    <header
      className="w-full py-12 md:py-16 flex flex-col items-center shadow-lg relative overflow-hidden border-b border-neutral-900"
      style={{
        backgroundImage: 'url("/chess-tiles.svg")',
        backgroundSize: "480px 480px",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="absolute inset-0 bg-neutral-950/95"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold flex items-center gap-3">
          <Image
            src="/codelogo.svg"
            alt="CODE logo"
            width={65}
            height={65}
            className="md:w-[140px] md:h-[140px] inline-block align-middle"
            priority
          />
          <span className="text-neutral-50">Chess Club</span>
        </h1>
      </div>
    </header>
  );
}
