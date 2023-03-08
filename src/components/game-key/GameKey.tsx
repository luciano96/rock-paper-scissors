import type { FC } from "react";

import type { PropTypes } from "./GameKey.types";

/**
 * ## Usage
 *
 * ```js
 * import GameKey from '~/components/game-key';
 *
 * <GameKey />
 * ```
 */
const GameKey: FC<PropTypes> = ({ moveKey }) => {
  return <div className={`${moveKey} gamekey rounded-full`}></div>;
};

export default GameKey;
