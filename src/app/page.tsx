"use client";
import { ChessClubPage } from "./components/pages";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-between relative">
      <ChessClubPage />
    </div>
  );
}
