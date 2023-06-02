export const Moves = ["rock", "paper", "scissors"] as const;
export type MoveType = typeof Moves[number];

export interface PropTypes {
  moveKey: MoveType;
  className?: string;
}
