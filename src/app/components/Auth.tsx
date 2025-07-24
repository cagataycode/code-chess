import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async () => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) setError(error.message);
    else alert("Check your email for the confirmation link!");
  };

  const handleSignIn = async () => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (error) setError(error.message);
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-md p-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Sign In / Sign Up
      </h2>
      <div className="w-full flex flex-col gap-4">
        <label className="w-full">
          <span className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </span>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            autoComplete="email"
          />
        </label>
        <label className="w-full">
          <span className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            autoComplete="current-password"
          />
        </label>
        <div className="flex gap-4 mt-2">
          <button
            onClick={handleSignIn}
            disabled={loading}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            Sign In
          </button>
          <button
            onClick={handleSignUp}
            disabled={loading}
            className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition disabled:opacity-50"
          >
            Sign Up
          </button>
        </div>
        {error && (
          <div className="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mt-2 text-center">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
