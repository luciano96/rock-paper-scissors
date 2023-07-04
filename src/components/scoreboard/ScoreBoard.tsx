import type { FC, PropsWithChildren } from "react";
import { useScoreContext } from "~/contexts/score";
import Image from "next/image";
import Logo from "~/../public/assets/logo.svg";

import type { ScoreMessagePropTypes, ScorePropTypes } from "./ScoreBoard.types";

const ScoreMessage = ({
  message,
  info,
  "data-cy": dataCy,
}: ScoreMessagePropTypes) => {
  return (
    <>
      <p data-cy={`${dataCy}-message`} className="text-sm text-score-text">
        {message}
      </p>
      <p data-cy={`${dataCy}-info`} className="text-4xl text-dark-text">
        {info}
      </p>
    </>
  );
};

const Score = ({ score, totalMatches }: ScorePropTypes) => {
  return (
    <div className="basis-40 rounded-lg bg-white p-4 text-center font-sans">
      <ScoreMessage data-cy="score" message="SCORE" info={score} />
      <ScoreMessage data-cy="matches" message="MATCHES" info={totalMatches} />
    </div>
  );
};

/**
 * ## Usage
 *
 * ```js
 * import Scoreboard from '~/components/scoreboard';
 *
 * <Scoreboard />
 * ```
 */
const Scoreboard: FC<PropsWithChildren> = () => {
  const { state = { score: 0, totalMatches: 0 } } = useScoreContext() ?? {};

  return (
    <div className="flex w-5/6 justify-between gap-1 rounded-lg border-2 border-header-outline bg-transparent p-4 text-gray-50">
      <Image
        priority
        data-cy="logo"
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        src={Logo}
        alt="Rock, paper, scissors"
      />
      <Score score={state?.score} totalMatches={state.totalMatches} />
    </div>
  );
};

export default Scoreboard;
