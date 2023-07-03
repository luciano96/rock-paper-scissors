import { type NextPage } from "next";
import Head from "next/head";
import SceneRendered from "~/components/scene-rendered/SceneRendered";
import ScoreBoard from "~/components/scoreboard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rock Paper Scissors</title>
      </Head>
      <main className="bg-yellow bg-radial flex min-h-screen flex-col items-center justify-start gap-56 bg-gradient-radial from-background-50 to-background-900 p-14">
        <ScoreBoard />
        <SceneRendered />
      </main>
    </>
  );
};

export default Home;
