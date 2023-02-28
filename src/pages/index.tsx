import { type NextPage } from "next";
import Head from "next/head";
import ScoreBoard from "~/components/scoreboard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rock Paper Scissors</title>
      </Head>
      <main className="bg-yellow bg-radial flex min-h-screen flex-col p-14 items-center justify-center bg-gradient-radial from-background-50 to-background-900">
        <ScoreBoard />
        <div id="game"></div>
      </main>
    </>
  );
};

export default Home;
