export interface Player {
  id: string;
  name: string;
  group: "A" | "B" | "C" | "D";
  wins: number;
  draws: number;
  losses: number;
  score: number;
}

export interface Match {
  id: string;
  week: number;
  group: "A" | "B" | "C" | "D";
  player1: string;
  player2: string;
  result?: "player1" | "player2" | "draw" | null;
  completed: boolean;
}

export interface ChessData {
  players: Player[];
  matches: Match[];
  lastUpdated: string;
}

export interface GroupStandings {
  group: "A" | "B" | "C" | "D";
  players: Player[];
}
