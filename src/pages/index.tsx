import { type NextPage } from "next";
import Head from "next/head";
import SceneRenderer from "~/components/scene-renderer/SceneRenderer";
import ScoreBoard from "~/components/scoreboard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rock Paper Scissors</title>
      </Head>
      <main
        className="bg-yellow bg-radial flex min-h-[100dvh] min-w-[100dvw] flex-col items-center justify-start
       gap-20 overflow-x-hidden bg-gradient-radial from-background-50 to-background-900 py-10 px-5 desktop:gap-56 desktop:px-14 desktop:py-10"
      >
        <ScoreBoard />
        <SceneRenderer />
      </main>
    </>
  );
};

export default Home;
