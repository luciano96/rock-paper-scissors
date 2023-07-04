import { type FC } from "react";

import type { PropTypes } from "./Scene2.types";
import PlayerMove from "../player-move/PlayerMove";
import HouseMove from "../house-move/HouseMove";
import useRandomGameKey from "~/hooks/useRandomGameKey";
import type { MoveType } from "../game-key/GameKey.types";

/**
 * ## Usage
 *
 * ```js
 * import Scene2 from '~/components/scene2';
 *
 * <Scene2 />
 * ```
 */
const Scene2: FC<PropTypes> = ({ gameKey, getNextScene, setHouseMove }) => {
  const afterHousePicked = (houseMove: MoveType) => {
    setHouseMove?.(houseMove);
    getNextScene();
  };

  const housePicked = useRandomGameKey(afterHousePicked);

  return (
    <div
      id="scene2"
      className="flex h-full w-full justify-center gap-5 desktop:gap-40 [--key-margin-right:0px]"
    >
      <div className="gamekey_container">
        <PlayerMove gameKey={gameKey} />
      </div>
      <div className="gamekey_container">
        <HouseMove gameKey={housePicked} />
      </div>
    </div>
  );
};

export default Scene2;
