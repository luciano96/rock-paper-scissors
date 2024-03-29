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
const GameKey: FC<PropTypes> = ({ moveKey, className = "", onClick}) => {
  const handler = () => {
    onClick?.(moveKey);
  };

  return (
    <button
      onClick={handler}
      type="button"
      className={`${className} ${moveKey} gamekey desktop:w-56 desktop:h-56 rounded-full`}
    />
  );
};

export default GameKey;
