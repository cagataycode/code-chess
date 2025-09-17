"use client";

import { useState, useEffect } from "react";
import { chessDataManager } from "../../data/chessManager";
import { Match } from "../../data/types";

interface MatchResultUpdaterProps {
  className?: string;
}

export default function MatchResultUpdater({
  className = "",
}: MatchResultUpdaterProps) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [selectedMatch, setSelectedMatch] = useState<string>("");
  const [result, setResult] = useState<"player1" | "player2" | "draw">(
    "player1"
  );
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    setMatches(chessDataManager.getMatches());
  }, []);

  const handleUpdateResult = () => {
    if (!selectedMatch) {
      setMessage("Please select a match");
      return;
    }

    const success = chessDataManager.updateMatchResult(selectedMatch, result);
    if (success) {
      setMessage("Match result updated successfully!");
      setMatches(chessDataManager.getMatches());
      setSelectedMatch("");
      setTimeout(() => setMessage(""), 3000);
    } else {
      setMessage("Failed to update match result");
    }
  };

  const incompleteMatches = matches.filter((match) => !match.completed);

  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg ${className}`}>
      <h3 className="text-xl font-bold mb-4">Update Match Results</h3>

      {message && (
        <div
          className={`mb-4 p-3 rounded ${
            message.includes("successfully")
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {message}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Match
          </label>
          <select
            value={selectedMatch}
            onChange={(e) => setSelectedMatch(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Choose a match...</option>
            {incompleteMatches.map((match) => (
              <option key={match.id} value={match.id}>
                Week {match.week} - Group {match.group}: {match.player1} vs{" "}
                {match.player2}
              </option>
            ))}
          </select>
        </div>

        {selectedMatch && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Result
            </label>
            <div className="space-y-2">
              {(() => {
                const match = matches.find((m) => m.id === selectedMatch);
                if (!match) return null;

                return (
                  <>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="result"
                        value="player1"
                        checked={result === "player1"}
                        onChange={(e) => setResult(e.target.value as "player1")}
                        className="mr-2"
                      />
                      {match.player1} wins
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="result"
                        value="player2"
                        checked={result === "player2"}
                        onChange={(e) => setResult(e.target.value as "player2")}
                        className="mr-2"
                      />
                      {match.player2} wins
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="result"
                        value="draw"
                        checked={result === "draw"}
                        onChange={(e) => setResult(e.target.value as "draw")}
                        className="mr-2"
                      />
                      Draw
                    </label>
                  </>
                );
              })()}
            </div>
          </div>
        )}

        <button
          onClick={handleUpdateResult}
          disabled={!selectedMatch}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Update Result
        </button>
      </div>

      <div className="mt-6 pt-4 border-t">
        <h4 className="font-medium mb-2">Quick Stats</h4>
        <div className="text-sm text-gray-600">
          <p>Total matches: {matches.length}</p>
          <p>Completed: {matches.filter((m) => m.completed).length}</p>
          <p>Pending: {incompleteMatches.length}</p>
        </div>
      </div>
    </div>
  );
}
