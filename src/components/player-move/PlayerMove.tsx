import type { FC } from "react";

import type { PropTypes } from "./PlayerMove.types";
import GameKey from "../game-key";
import Move from "../move/Move";

/**
 * ## Usage
 *
 * ```js
 * import PlayerMove from '~/components/player-move';
 *
 * <PlayerMove />
 * ```
 */
const PlayerMove: FC<PropTypes> = ({ gameKey, isWin = false }) => {
  return (
    <Move text={"YOU PICKED"} isWin={isWin}>
      <GameKey className="pl-4" moveKey={gameKey}/>
    </Move>
  );
};

export default PlayerMove;
