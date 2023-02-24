import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rock Paper Scissors</title>
      </Head>
      <main className="bg-yellowflex bg-radial min-h-screen flex-col items-center justify-center bg-gradient-radial from-background-50 to-background-900"></main>
    </>
  );
};

export default Home;
