import type { FC } from "react";

import type { PropTypes } from "./HouseMove.types";
import { GameKeySkeleton } from "../game-key";
import GameKey from "../game-key/GameKey";
import Move from "../move/Move";

/**
 * ## Usage
 *
 * ```js
 * import HouseMove from '~/components/house-move';
 *
 * <HouseMove />
 * ```
 */
const HouseMove: FC<PropTypes> = ({ gameKey, isWin = false }) => {
  const text = gameKey ? "THE HOUSE PICKED" : "THE HOUSE IS PICKING";
  return (
    <Move text={text} isWin={isWin}>
      {gameKey ? (
        <GameKey className="pl-4" moveKey={gameKey} />
      ) : (
        <GameKeySkeleton className="pl-4" />
      )}
    </Move>
  );
};

export default HouseMove;
