import { type AppType } from "next/dist/shared/lib/utils";
import ScoreContextProvider from "~/contexts/score";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ScoreContextProvider>
      <Component {...pageProps} />
    </ScoreContextProvider>
  );
};

export default MyApp;
