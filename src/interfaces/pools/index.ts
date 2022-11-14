export interface IParticipants {
  userId: string;
  userName: string;
}

export interface IPoolRequest {
  name: string;
  owner: string;
}

export interface IPool {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  owner: string;
}

export interface IPoolUpdate {
  name: string;
}

export interface IPoolMatches {
  poolId: string;
  matcheId: string;
}
