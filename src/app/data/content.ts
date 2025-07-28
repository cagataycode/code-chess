export const NAV_ITEMS = [
  { key: "home", label: "Home" },
  { key: "contact", label: "Contact" },
  { key: "rules", label: "Rules" },
  { key: "league", label: "League Info" },
  { key: "fixtures", label: "Fixtures" },
  { key: "leaderboard", label: "Leaderboard" },
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

export const FIXTURES = [
  { round: 1, player1: "Alice", player2: "Bob" },
  { round: 1, player1: "Charlie", player2: "Diana" },
  { round: 2, player1: "Alice", player2: "Charlie" },
  { round: 2, player1: "Bob", player2: "Diana" },
];

export const LEADERBOARD = [
  { name: "Alice", points: 2 },
  { name: "Bob", points: 1.5 },
  { name: "Charlie", points: 1 },
  { name: "Diana", points: 0.5 },
];
