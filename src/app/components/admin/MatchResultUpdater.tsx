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
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    setMatches(chessDataManager.getMatches());
  }, []);

  const handleUpdateMatch = (matchId: string, result: "player1" | "player2" | "draw") => {
    const success = chessDataManager.updateMatchResult(matchId, result);
    if (success) {
      setMessage(`Match updated successfully!`);
      setMatches(chessDataManager.getMatches());
      setTimeout(() => setMessage(""), 2000);
    } else {
      setMessage("Failed to update match result");
    }
  };

  const handleSyncWeek = () => {
    // Reset and reload data from the source
    chessDataManager.resetData();
    setMatches(chessDataManager.getMatches());
    setMessage(`Week ${selectedWeek} data synced from source!`);
    setTimeout(() => setMessage(""), 3000);
  };

  // Group matches by week
  const weeks = Array.from(new Set(matches.map((m) => m.week))).sort((a, b) => b - a);
  const weekMatches = matches.filter((m) => m.week === selectedWeek);
  const groupedMatches: Record<string, Match[]> = {
    A: [],
    B: [],
    C: [],
    D: [],
  };

  weekMatches.forEach((match) => {
    groupedMatches[match.group].push(match);
  });

  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg ${className}`}>
      <h3 className="text-2xl font-bold mb-6">Update Match Results by Week</h3>

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

      {/* Week Selector */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Select Week
          </label>
          <button
            onClick={handleSyncWeek}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm font-medium"
          >
            Sync All Data from Source
          </button>
        </div>
        <div className="flex gap-2">
          {weeks.map((week) => (
            <button
              key={week}
              onClick={() => setSelectedWeek(week)}
              className={`px-4 py-2 rounded-md font-medium ${
                selectedWeek === week
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Week {week}
            </button>
          ))}
        </div>
      </div>

      {/* Matches by Group */}
      <div className="space-y-6">
        {(["A", "B", "C", "D"] as const).map((group) => (
          <div key={group} className="border rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Group {group}</h4>
            <div className="space-y-4">
              {groupedMatches[group].length > 0 ? (
                groupedMatches[group].map((match) => (
                  <div
                    key={match.id}
                    className={`p-4 rounded-lg border ${
                      match.player2 === "BYE" || match.player1 === "BYE"
                        ? "bg-yellow-50 border-yellow-300"
                        : match.completed
                        ? "bg-green-50 border-green-200"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4 flex-1">
                        <span className="font-medium text-gray-900 min-w-[200px]">{match.player1}</span>
                        <span className="text-gray-500">vs</span>
                        <span className="font-medium text-gray-900 min-w-[200px]">{match.player2}</span>
                      </div>
                      {match.player2 === "BYE" || match.player1 === "BYE" ? (
                        <span className="text-sm text-yellow-600 font-medium">⚠ BYE</span>
                      ) : match.completed ? (
                        <span className="text-sm text-green-600 font-medium">✓ Completed</span>
                      ) : null}
                    </div>

                    {!match.completed && match.player2 !== "BYE" && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleUpdateMatch(match.id, "player1")}
                          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-sm"
                        >
                          {match.player1} wins
                        </button>
                        <button
                          onClick={() => handleUpdateMatch(match.id, "draw")}
                          className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 text-sm"
                        >
                          Draw
                        </button>
                        <button
                          onClick={() => handleUpdateMatch(match.id, "player2")}
                          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-sm"
                        >
                          {match.player2} wins
                        </button>
                      </div>
                    )}

                    {match.completed && (
                      <div className="text-sm text-gray-600">
                        Result: {match.result === "draw" ? "Draw" : match.result === "player1" ? `${match.player1} won` : `${match.player2} won`}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm">No matches in this group for Week {selectedWeek}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t">
        <h4 className="font-medium mb-2">Week {selectedWeek} Stats</h4>
        <div className="text-sm text-gray-600">
          <p>Total matches: {weekMatches.length}</p>
          <p>Completed: {weekMatches.filter((m) => m.completed).length}</p>
          <p>Pending: {weekMatches.filter((m) => !m.completed && m.player2 !== "BYE").length}</p>
        </div>
      </div>
    </div>
  );
}
