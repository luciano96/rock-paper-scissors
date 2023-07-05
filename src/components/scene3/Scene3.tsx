import { type FC } from "react";

import type { PropTypes } from "./Scene3.types";
import PlayerMove from "../player-move/PlayerMove";
import HouseMove from "../house-move/HouseMove";
import clsx from "clsx";
const PlayAgainButton = ({
  getNextScene,
  resetMoves,
  isWin,
}: {
  getNextScene: () => void;
  resetMoves: () => void;
  isWin: boolean;
}) => {
  const className = clsx(
    "min-h-[4rem]",
    "desktop:min-h-[2rem]",
    "w-full",
    "rounded-md",
    "bg-white",
    {
      "text-primary-rock-700": !isWin,
      "text-dark-text": isWin,
    }
  );

  const handler = () => {
    getNextScene();
    resetMoves();
  };
  return (
    <button className={className} onClick={handler}>
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
const Scene3: FC<PropTypes> = ({
  getNextScene,
  result,
  resetMoves,
  playerMove,
  houseMove,
}) => {
  const winCondition = result === "YOU WIN";
  const loseCondition = result === "YOU LOSE";

  return (
    <div
      id="scene3"
      className="relative z-10 grid w-full grid-cols-2 grid-rows-2 flex-wrap justify-center justify-items-center 
      gap-6 [--key-margin-right:0px] desktop:flex desktop:flex-nowrap desktop:gap-10"
    >
      <div className="gamekey_container order-1">
        <PlayerMove gameKey={playerMove} isWin={winCondition} />
      </div>
      <div className="order-3 col-span-2  flex min-w-[150px] flex-col gap-6 self-center desktop:order-2">
        <p data-cy="game-result" className="text-center text-7xl text-gray-50 desktop:text-5xl">
          {result}
        </p>
        <PlayAgainButton
          getNextScene={getNextScene}
          isWin={winCondition}
          resetMoves={resetMoves}
        />
      </div>
      <div className="gamekey_container order-2 desktop:order-3">
        <HouseMove gameKey={houseMove} isWin={loseCondition} />
      </div>
    </div>
  );
};

export default Scene3;
