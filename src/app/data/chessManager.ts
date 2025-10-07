import { ChessData, Player, Match, GroupStandings } from "./types";
import { initialChessData } from "./chessData";

const STORAGE_KEY = "chess-club-data";

// Data management functions
export class ChessDataManager {
  private static instance: ChessDataManager;
  private data: ChessData;

  private constructor() {
    this.data = this.loadData();
  }

  public static getInstance(): ChessDataManager {
    if (!ChessDataManager.instance) {
      ChessDataManager.instance = new ChessDataManager();
    }
    return ChessDataManager.instance;
  }

  private loadData(): ChessData {
    if (typeof window === "undefined") {
      return initialChessData; // Server-side rendering
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);

        // Check if we need to sync from source (if initial data has more matches)
        if (initialChessData.matches.length > (parsed.matches?.length || 0)) {
          console.log("New data available, syncing from source...");
          return initialChessData;
        }

        // Merge with initial data to handle new fields
        return {
          ...initialChessData,
          ...parsed,
          players: parsed.players || initialChessData.players,
          matches: parsed.matches || initialChessData.matches,
        };
      }
    } catch (error) {
      console.error("Error loading chess data:", error);
    }

    return initialChessData;
  }

  private saveData(): void {
    if (typeof window === "undefined") return;

    try {
      this.data.lastUpdated = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (error) {
      console.error("Error saving chess data:", error);
    }
  }

  // Public methods
  public getData(): ChessData {
    return { ...this.data };
  }

  public getPlayers(): Player[] {
    return [...this.data.players];
  }

  public getMatches(): Match[] {
    return [...this.data.matches];
  }

  public getMatchesByWeek(week: number): Match[] {
    return this.data.matches.filter((match) => match.week === week);
  }

  public getMatchesByGroup(group: "A" | "B" | "C" | "D"): Match[] {
    return this.data.matches.filter((match) => match.group === group);
  }

  public getLeaderboard(): Player[] {
    return [...this.data.players].sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (b.wins !== a.wins) return b.wins - a.wins;
      return a.name.localeCompare(b.name);
    });
  }

  public getGroupStandings(): GroupStandings[] {
    const groups: GroupStandings[] = [
      { group: "A", players: [] },
      { group: "B", players: [] },
      { group: "C", players: [] },
      { group: "D", players: [] },
    ];

    groups.forEach((group) => {
      group.players = this.data.players
        .filter((player) => player.group === group.group)
        .sort((a, b) => {
          if (b.score !== a.score) return b.score - a.score;
          if (b.wins !== a.wins) return b.wins - a.wins;
          return a.name.localeCompare(b.name);
        });
    });

    return groups;
  }

  public updateMatchResult(
    matchId: string,
    result: "player1" | "player2" | "draw"
  ): boolean {
    const match = this.data.matches.find((m) => m.id === matchId);
    if (!match) return false;

    // Update match
    match.result = result;
    match.completed = true;

    // Update player stats
    this.updatePlayerStats(match, result);

    this.saveData();
    return true;
  }

  private updatePlayerStats(
    match: Match,
    result: "player1" | "player2" | "draw"
  ): void {
    const player1 = this.data.players.find((p) => p.name === match.player1);
    const player2 = this.data.players.find((p) => p.name === match.player2);

    if (!player1 || !player2) return;

    // Reset previous result if updating
    // (This is simplified - in a real app you'd track match history)

    if (result === "player1") {
      player1.wins++;
      player2.losses++;
    } else if (result === "player2") {
      player2.wins++;
      player1.losses++;
    } else if (result === "draw") {
      player1.draws++;
      player2.draws++;
    }

    // Recalculate scores
    player1.score = player1.wins + player1.draws * 0.5;
    player2.score = player2.wins + player2.draws * 0.5;
  }

  public addPlayer(
    player: Omit<Player, "id" | "wins" | "draws" | "losses" | "score">
  ): boolean {
    const id = player.name.toLowerCase().replace(/\s+/g, "-");

    if (this.data.players.find((p) => p.id === id)) {
      return false; // Player already exists
    }

    const newPlayer: Player = {
      id,
      ...player,
      wins: 0,
      draws: 0,
      losses: 0,
      score: 0.0,
    };

    this.data.players.push(newPlayer);
    this.saveData();
    return true;
  }

  public resetData(): void {
    this.data = { ...initialChessData };
    this.saveData();
  }

  public exportData(): string {
    return JSON.stringify(this.data, null, 2);
  }

  public importData(jsonData: string): boolean {
    try {
      const imported = JSON.parse(jsonData);
      this.data = {
        ...initialChessData,
        ...imported,
        players: imported.players || initialChessData.players,
        matches: imported.matches || initialChessData.matches,
      };
      this.saveData();
      return true;
    } catch (error) {
      console.error("Error importing data:", error);
      return false;
    }
  }
}

// Export singleton instance
export const chessDataManager = ChessDataManager.getInstance();
