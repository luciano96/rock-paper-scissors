import type { MoveType } from "../game-key/GameKey.types";
import type { PropTypes as GenericMoveTypes } from "../move/Move.types";
export interface PropTypes  extends Pick<GenericMoveTypes, "isWin"> {
    className?: string;
    gameKey: MoveType | null;
}
