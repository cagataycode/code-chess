"use client";

import Auth from "./components/Auth";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import type { User } from "@supabase/supabase-js";

const NAV_ITEMS = [
  { key: "home", label: "Home" },
  { key: "tournament", label: "Tournament Info" },
  { key: "auth", label: "Register/Login" },
  { key: "about", label: "About" },
];

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-white to-gray-100 text-gray-900">
      {/* Header */}
      <header className="w-full py-8 flex flex-col items-center bg-white shadow-sm">
        <h1 className="text-4xl font-bold flex items-center gap-2">
          <span role="img" aria-label="chess">
            ♟️
          </span>{" "}
          CODE Chess Club
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Welcome to the official chess club tournament portal!
        </p>
      </header>

      {/* Navigation Bar */}
      <nav className="w-full bg-gray-100 border-b border-gray-200 flex justify-center">
        <ul className="flex gap-6 py-3">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <button
                className={`px-4 py-2 rounded transition font-medium ${
                  activeSection === item.key
                    ? "bg-gray-800 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveSection(item.key)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center">
        {activeSection === "home" && (
          <section className="max-w-xl w-full mt-8 px-4 text-center">
            <h2 className="text-2xl font-semibold mb-2">Welcome!</h2>
            <p className="text-gray-700 mb-4">
              Join our vibrant chess community! Register, participate in
              tournaments, and track your progress—all in one place. Whether
              you’re a beginner or a grandmaster, everyone is welcome.
            </p>
          </section>
        )}

        {activeSection === "tournament" && (
          <section className="w-full max-w-2xl mt-8 px-4 flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold mb-2">Tournament Info</h2>
            <div className="bg-white rounded shadow p-6 w-full text-center text-gray-500">
              Tournament details, groups, and standings will appear here soon!
            </div>
          </section>
        )}

        {activeSection === "auth" && (
          <section className="w-full max-w-md mt-8 px-4 flex flex-col items-center">
            {!user ? (
              <Auth />
            ) : (
              <div className="mb-4 text-center">
                <p className="mb-2">
                  Welcome, <span className="font-semibold">{user.email}</span>!
                </p>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                >
                  Sign Out
                </button>
              </div>
            )}
          </section>
        )}

        {activeSection === "about" && (
          <section className="max-w-xl w-full mt-8 px-4 text-center">
            <h2 className="text-2xl font-semibold mb-2">About the Club</h2>
            <p className="text-gray-700 mb-4">
              We are a community of chess enthusiasts at the university. Our
              club organizes regular tournaments and events for all skill
              levels. Connect, compete, and improve your chess with us!
            </p>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full py-4 mt-8 bg-gray-200 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} CODE Chess Club. Powered by Next.js &
        Supabase.
      </footer>
    </div>
  );
}
