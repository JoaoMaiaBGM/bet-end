export interface IBetRequest {
  result: string;
  score: number;
  matchId: string;
  userId: string;
  poolId: string;
}

export interface IBet {
  id: string;
  result: string;
  score: number;
  points: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  matchId: string;
}

export interface IBetUpdate {
  result?: string;
  score?: number;
}
