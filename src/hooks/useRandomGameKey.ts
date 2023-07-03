import { useEffect, useState } from "react";
import { Moves, type MoveType } from "~/components/game-key/GameKey.types";

/**
 * Generates a random gameKey after a timeout
 */
const useRandomGameKey = (callback: (housePicked: MoveType) => void) => {
  const [gameKey, setGameKey] = useState<MoveType | null>(null);

  useEffect(() => {
    let sceneTimer: NodeJS.Timeout;
    const timer = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * Moves.length);
      const randomKey = Moves[randomIndex] ?? 'paper';
      setGameKey(randomKey);

      sceneTimer = setTimeout(() => callback(randomKey), 1000);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(sceneTimer)
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return gameKey;
};

export type UseRandomGameKeyReturnType = ReturnType<typeof useRandomGameKey>;
export default useRandomGameKey;
