import type { MoveType } from "../game-key/GameKey.types";

export type CommonSceneProps = {
    // function that triggers the scene change
    getNextScene: () => void;
    // function that saves the house chosen keys
    setPlayerMove?: (gameKey: MoveType) => void;
    // function that saves the house chosen keys
    setHouseMove?: (gameKey: MoveType) => void;
}
