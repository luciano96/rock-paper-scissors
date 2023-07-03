import { useState, type FC, useEffect } from "react";
import useSceneSwitcher from "~/hooks/useSceneSwitcher";
import Scene1 from "../scene1/Scene1";
import Scene2 from "../scene2/Scene2";
import Scene3 from "../scene3/Scene3";
import type { MoveType } from "../game-key/GameKey.types";
import useGameResultCalculator, {
  type GameResultType,
} from "~/hooks/useGameResultCalculator";

/**
 * ## Usage
 *
 * ```js
 * import SceneRendered from '~/components/scene-rendered';
 *
 * <SceneRendered />
 * ```
 */
const SceneRendered: FC = () => {
  const { getNextScene, scene } = useSceneSwitcher();
  const { calculateResult } = useGameResultCalculator();
  const [playerMove, setPlayerMove] = useState<MoveType | null>(null);
  const [houseMove, setHouseMove] = useState<MoveType | null>(null);
  const [result, setResult] = useState<GameResultType>("");

  const resetMoves = () => {
    setPlayerMove(null);
    setHouseMove(null);
  };

  useEffect(() => {
    if (playerMove && houseMove) {
      setResult(calculateResult(playerMove, houseMove));
    }
  }, [playerMove, houseMove, calculateResult]);

  const SceneToRender = () => {
    switch (scene) {
      case "PLAYER_CHOOSE": {
        return (
          <Scene2
            getNextScene={getNextScene}
            setHouseMove={setHouseMove}
            gameKey={playerMove as MoveType}
          />
        );
      }
      case "GAME_RESULT": {
        return (
          <Scene3
            getNextScene={getNextScene}
            result={result}
            resetMoves={resetMoves}
            playerMove={playerMove as MoveType}
            houseMove={houseMove as MoveType}
          />
        );
      }
      default: {
        return (
          <Scene1 getNextScene={getNextScene} setPlayerMove={setPlayerMove} />
        );
      }
    }
  };

  return <SceneToRender />;
};

export default SceneRendered;
