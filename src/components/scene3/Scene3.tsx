import { type FC } from "react";

import type { PropTypes } from "./Scene3.types";

const PlayAgainButton = ({
  getNextScene,
  resetMoves,
}: {
  getNextScene: () => void;
  resetMoves: () => void;
}) => {
  const handler = () => {
    getNextScene();
    resetMoves();
  };
  return (
    <button
      className="rounded-md bg-white text-primary-rock-700"
      onClick={handler}
    >
      PLAY AGAIN
    </button>
  );
};

/**
 * ## Usage
 *
 * ```js
 * import Scene3 from '~/components/scene3';
 *
 * <Scene3 />
 * ```
 */
const Scene3: FC<PropTypes> = ({ getNextScene, result, resetMoves }) => {
  return (
    <div>
      <p className="text-4xl text-gray-50">{result}</p>
      <PlayAgainButton getNextScene={getNextScene} resetMoves={resetMoves} />
    </div>
  );
};

export default Scene3;
