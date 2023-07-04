import type { FC } from "react";
import GameKey from "../game-key/GameKey";
import type { CommonSceneProps } from "../scene-rendered/SceneRendered.types";
import type { MoveType } from "../game-key/GameKey.types";

/**
 * ## Usage
 *
 * ```js
 * import Scene1 from '~/components/scene1';
 *
 * <Scene1 />
 * ```
 */
const Scene1: FC<CommonSceneProps> = ({ getNextScene, setPlayerMove }) => {
  const onClickHandler = (gameKey: MoveType) => {
    setPlayerMove?.(gameKey);
    getNextScene();
  };

  return (
    <div id="scene1" className="grid w-full grid-cols-2 items-center justify-items-center bg-triangle bg-center bg-no-repeat">
    <GameKey moveKey={"paper"} onClick={onClickHandler} />
      <GameKey moveKey={"scissors"} onClick={onClickHandler} />
      <GameKey moveKey={"rock"} onClick={onClickHandler} />
    </div>
  );
};

export default Scene1;
