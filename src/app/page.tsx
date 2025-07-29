"use client";
import { ChessClubPage } from "./components/pages";
import { ParallaxBackground } from "./components/ui";
import { useState } from "react";

export default function Home() {
  const [scrollX, setScrollX] = useState(0);

  return (
    <div className="w-full h-full flex flex-col items-center justify-between relative overflow-hidden bg-gradient-to-b from-white to-gray-100">
      <ParallaxBackground scrollX={scrollX} />
      <ChessClubPage onScrollChange={setScrollX} />
    </div>
  );
}
