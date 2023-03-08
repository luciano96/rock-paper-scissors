import { type State, type ScoreContext } from "./score.types";
import {
  createContext,
  type FC,
  type PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { ADD_POINT, INCREASE_MATCHS_PLAYED, RESET_SCORE } from "./actionTypes";
import reducer, { initialState as defaultState } from "./reducer";

const ScoreContext = createContext<ScoreContext | undefined>(undefined);

const ScoreContextProvider: FC<
  PropsWithChildren<{ value?: State }>
> = ({ value: initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...defaultState,
    ...initialState,
  });

  const addPoint = useCallback(() => {
    dispatch({ type: ADD_POINT });
  }, []);
  const addMatch = useCallback(() => {
    dispatch({ type: INCREASE_MATCHS_PLAYED });
  }, []);
  const resetScore = useCallback(() => {
    dispatch({ type: RESET_SCORE });
  }, []);

  const value: ScoreContext = useMemo(
    () => ({
      addPoint,
      addMatch,
      resetScore,
      state,
    }),
    [addMatch, addPoint, resetScore, state]
  );

  return (
    <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
  );
};

export const useScoreContext = () => {
  const context = useContext(ScoreContext);

  return context;
};

export default ScoreContextProvider;
