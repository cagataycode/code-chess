"use client";
import "./globals.css";
import { ChessClubPage } from "./components/pages";
import { ParallaxBackground } from "./components/ui";
import { useState } from "react";

export default function RootLayout() {
  const [scrollX, setScrollX] = useState(0);

  return (
    <html lang="en">
      <body className="antialiased h-screen flex flex-col items-center justify-between relative overflow-hidden text-gray-900">
        <ParallaxBackground scrollX={scrollX} />
        <ChessClubPage onScrollChange={setScrollX} />
      </body>
    </html>
  );
}
