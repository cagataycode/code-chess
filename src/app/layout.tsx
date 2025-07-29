"use client";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased h-screen flex flex-col items-center justify-between relative overflow-hidden text-gray-900">
        {children}
      </body>
    </html>
  );
}
