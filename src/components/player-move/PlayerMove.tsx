import type { FC } from "react";

import type { PropTypes } from "./PlayerMove.types";
import GameKey, { GameKeySkeleton } from "../game-key";

/**
 * ## Usage
 *
 * ```js
 * import PlayerMove from '~/components/player-move';
 *
 * <PlayerMove />
 * ```
 */
const PlayerMove: FC<PropTypes> = ({ gameKey }) => {
  return (
    <div className="flex h-full w-full flex-1 justify-around">
      <div className="flex flex-col items-center justify-evenly">
        <p className="text-gray-50">YOU PICKED</p>
        <GameKey className="pl-4" moveKey={gameKey} />
      </div>
      <div className="flex flex-col items-center justify-evenly">
        <p className="text-gray-50">THE HOUSE PICKED</p>
        <GameKeySkeleton className="pl-4" />
      </div>
    </div>
  );
};

export default PlayerMove;
