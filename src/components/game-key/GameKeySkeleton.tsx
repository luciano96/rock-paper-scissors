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
const GameKeySkeleton: React.FC<Pick<PropTypes, "className">> = ({
  className = "",
}) => {
  return (
    <button
      type="button"
      className={`${className} skeleton gamekey rounded-full desktop:h-56 desktop:w-56`}
    />
  );
};

export default GameKeySkeleton;
