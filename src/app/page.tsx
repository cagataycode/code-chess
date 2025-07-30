"use client";
import { ChessClubPage } from "./components/pages";
import { useState } from "react";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between relative overflow-hidden">
      <ChessClubPage />
    </div>
  );
}
