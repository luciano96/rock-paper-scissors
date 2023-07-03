import type { FC } from "react";

import type { PropTypes } from "./HouseMove.types";
import { GameKeySkeleton } from "../game-key";
import GameKey from "../game-key/GameKey";

/**
 * ## Usage
 *
 * ```js
 * import HouseMove from '~/components/house-move';
 *
 * <HouseMove />
 * ```
 */
const HouseMove: FC<PropTypes> = ({ gameKey }) => {
  return (
    <>
      <p className="text-gray-50">THE HOUSE PICKED</p>
      {gameKey ? (
        <GameKey moveKey={gameKey} />
      ) : (
        <GameKeySkeleton className="pl-4" />
      )}
    </>
  );
};

export default HouseMove;
