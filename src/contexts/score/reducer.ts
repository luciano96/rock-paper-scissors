import { ADD_POINT, INCREASE_MATCHS_PLAYED, RESET_SCORE } from "./actionTypes";
import type { Action, State } from "./score.types";

export const initialState: State = {
  score: 0,
  totalMatches: 0,
};

const reducer = (state: State, action: Action<unknown>): State => {
  switch (action.type) {
    case ADD_POINT: {
      return {
        ...state,
        score: state.score + 1,
      };
    }
    case RESET_SCORE: {
      return initialState;
    }
    case INCREASE_MATCHS_PLAYED: {
      return {
        ...state,
        totalMatches: state.totalMatches + 1,
      };
    }
    default:
      return state;
  }
};

export default reducer;
