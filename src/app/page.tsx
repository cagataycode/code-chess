"use client";
import { ChessClubPage } from "./components/pages";
import { ParallaxBackground } from "./components/ui";
import { useState } from "react";

export default function Home() {
  const [scrollX, setScrollX] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between relative overflow-hidden bg-gradient-to-b from-white to-gray-100 text-gray-900">
      <ParallaxBackground scrollX={scrollX} />
      <ChessClubPage onScrollChange={setScrollX} />
    </div>
  );
}
