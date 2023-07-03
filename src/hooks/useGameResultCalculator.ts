import { useCallback } from "react";
import type { MoveType } from "~/components/game-key/GameKey.types";
import { useScoreContext } from "~/contexts/score";

const GAME_RESULT = ["YOU WIN", "YOU LOSE", "TIE"] as const;
export type GameResultType = (typeof GAME_RESULT)[number] | "";

const useGameResultCalculator = () => {
  const scoreContext = useScoreContext();
  const calculateResult: (
    playerMove: MoveType | null,
    houseMove: MoveType | null
  ) => GameResultType = useCallback(
    (playerMove: MoveType | null, houseMove: MoveType | null) => {
      scoreContext?.addMatch();
      if (
        (playerMove === "rock" && houseMove === "scissors") ||
        (playerMove === "paper" && houseMove === "rock") ||
        (playerMove === "scissors" && houseMove === "paper")
      ) {
        scoreContext?.addPoint();
        return "YOU WIN";
      }

      if (playerMove === houseMove) {
        return "TIE";
      }

      return "YOU LOSE";
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return {
    calculateResult,
  };
};

export type useGameResultCalculatorReturnType = ReturnType<
  typeof useGameResultCalculator
>;

export default useGameResultCalculator;
