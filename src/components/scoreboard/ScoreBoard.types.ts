import { type State as ScoreState } from "~/contexts/score/score.types";

export interface ScorePropTypes {
  score: ScoreState['score'];
  totalMatches: ScoreState['totalMatches'];
}
export interface ScoreMessagePropTypes {
  info: ScoreState['score'] | ScoreState['totalMatches'];
  message: string;
  /* Testid for cypress */
  "data-cy": string;
}
