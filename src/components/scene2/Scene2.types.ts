import type { MoveType } from "~/components/game-key/GameKey.types";
import type { CommonSceneProps } from "~/components/scene-rendered/SceneRendered.types";

export interface PropTypes extends CommonSceneProps {
  gameKey: MoveType;
}
