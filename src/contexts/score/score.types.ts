export interface State {
  score: number;
  totalMatches: number;
}

export interface Action<T> {
  type: string;
  payload?: T;
}

export interface ScoreContext {
  state: State;
  addPoint: () => void;
  addMatch: () => void;
  resetScore: () => void;
}
