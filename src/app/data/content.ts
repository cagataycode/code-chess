import { chessDataManager } from "./chessManager";
import { Match } from "./types";

export const NAV_ITEMS = [
  { key: "home", label: "Home" },
  { key: "rules", label: "Rules" },
  { key: "league", label: "League Info" },
  { key: "fixtures", label: "Fixtures" },
  { key: "leaderboard", label: "Leaderboard" },
  { key: "contact", label: "Contact" },
];

export const INTRO = `
Welcome to the CODE Chess Club where brains meet battles and pawns become legends! 
Whether you're a grandmaster in disguise or just learning how the knight moves, 
this is your arena to sharpen your mind, outwit your opponents and have a blast doing it.

Our mission? To create a friendly, buzzing community where chess isn't just a game; 
it's a semester-long showdown of strategy, sportsmanship and epic comebacks.

Get ready to make your moves and claim your spot on the leaderboard!
`.trim();

export const LEAGUE_INFO = `
The CODE Chess Club runs a semester-long league where every player faces off against 
others in their division. Each semester, the league resets — giving everyone a fresh 
chance to climb the ranks and prove their chess prowess.

Matches are scheduled weekly, with fixture lists posted in advance. Players arrange 
their matches during the week to keep the league moving smoothly.
`.trim();

// Dynamic data functions using the chess data manager
export const getFixtures = () => {
  const matches = chessDataManager.getMatches();
  const week1Matches = matches.filter((m) => m.week === 1);
  const week2Matches = matches.filter((m) => m.week === 2);
  const week3Matches = matches.filter((m) => m.week === 3);
  const week4Matches = matches.filter((m) => m.week === 4);
  const week5Matches = matches.filter((m) => m.week === 5);

  const groupMatches = (matches: Match[]) => ({
    groupA: matches
      .filter((m) => m.group === "A")
      .map((m) => ({
        player1: m.player1,
        player2: m.player2,
        result: m.result,
        completed: m.completed
      })),
    groupB: matches
      .filter((m) => m.group === "B")
      .map((m) => ({
        player1: m.player1,
        player2: m.player2,
        result: m.result,
        completed: m.completed
      })),
    groupC: matches
      .filter((m) => m.group === "C")
      .map((m) => ({
        player1: m.player1,
        player2: m.player2,
        result: m.result,
        completed: m.completed
      })),
    groupD: matches
      .filter((m) => m.group === "D")
      .map((m) => ({
        player1: m.player1,
        player2: m.player2,
        result: m.result,
        completed: m.completed
      })),
  });

  return {
    week1: groupMatches(week1Matches),
    week2: groupMatches(week2Matches),
    week3: groupMatches(week3Matches),
    week4: groupMatches(week4Matches),
    week5: groupMatches(week5Matches),
  };
};

export const getLeaderboard = () => {
  return chessDataManager.getLeaderboard();
};

export const getPlayers = () => {
  return chessDataManager.getPlayers();
};

export const getMatches = () => {
  return chessDataManager.getMatches();
};

// Export the data manager for components that need more functionality
export { chessDataManager };
