export interface IMatchesRequest {
  day: string;
  hour: string;
  team1: string;
  team2: string;
}

export interface IMatch {
  id: string;
  result: string;
  score: number;
  team1: string;
  team2: string;
  createdAt: Date;
  day: string;
  hour: string;
}

export interface IMatchUpdate {
  result?: string;
  score?: number;
  team1?: string;
  team2?: string;
  day?: string;
  hour?: string;
}

export interface IPoolMatches {
  poolId: string;
  matchesId: string;
}
