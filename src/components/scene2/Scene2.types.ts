import type { MoveType } from "~/components/game-key/GameKey.types";
import type { CommonSceneProps } from "~/components/scene-renderer/SceneRenderer.types";

export interface PropTypes extends CommonSceneProps {
  gameKey: MoveType;
}
