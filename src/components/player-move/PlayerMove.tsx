import type { FC } from "react";

import type { PropTypes } from "./PlayerMove.types";
import GameKey from "../game-key";

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
    <>
      <p className="text-gray-50">YOU PICKED</p>
      <GameKey className="pl-4" moveKey={gameKey} />
    </>
  );
};

export default PlayerMove;
