"use client";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col items-center justify-between relative text-neutral-50 bg-neutral-950">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
