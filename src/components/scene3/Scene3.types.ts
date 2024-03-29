import type { GameResultType } from "~/hooks/useGameResultCalculator";
import type { CommonSceneProps } from "../scene-renderer/SceneRenderer.types";
import type { MoveType } from "../game-key/GameKey.types";

export interface PropTypes extends CommonSceneProps {
  result: GameResultType;
  playerMove: MoveType;
  houseMove: MoveType;
  resetMoves: () => void;
}
