import { type NextPage } from "next";
import Head from "next/head";
import GameKey from "~/components/game-key";
import { Moves } from "~/components/game-key/GameKey.types";
import ScoreBoard from "~/components/scoreboard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rock Paper Scissors</title>
      </Head>
      <main className="bg-yellow bg-radial flex min-h-screen flex-col items-center justify-center bg-gradient-radial from-background-50 to-background-900 p-14">
        <ScoreBoard />

        <div className="grid w-full flex-1 grid-cols-2 items-center justify-items-center bg-triangle bg-center bg-no-repeat">
          <GameKey moveKey={Moves.PAPER} />
          <GameKey moveKey={Moves.SCISSORS} />
          <GameKey moveKey={Moves.ROCK} />
        </div>
      </main>
    </>
  );
};

export default Home;
