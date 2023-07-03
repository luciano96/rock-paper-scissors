import { useState } from "react";

export const SCENES = [
  "CHOOSE_MOVE",
  "PLAYER_CHOOSE",
  "GAME_RESULT",
] as const;
export type SceneTypes = (typeof SCENES)[number];

const useSceneSwitcher = () => {
  const [currentScene, setCurrentScene] = useState(0);

  const getNextScene = () => {
    setCurrentScene((prevState) => {
      if (prevState === SCENES.length - 1) {
        return 0;
      } else {
        return prevState + 1;
      }
    });
  };

  return {
    scene: SCENES[currentScene],
    getNextScene,
  };
};

export type UseSceneSwitcherReturnType = ReturnType<typeof useSceneSwitcher>;

export default useSceneSwitcher;
