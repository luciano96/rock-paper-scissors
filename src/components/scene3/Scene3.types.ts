import type { GameResultType } from "~/hooks/useGameResultCalculator";
import type { CommonSceneProps } from "../scene-rendered/SceneRendered.types";

export interface PropTypes extends CommonSceneProps {
  result: GameResultType;
  resetMoves: () => void;
}
