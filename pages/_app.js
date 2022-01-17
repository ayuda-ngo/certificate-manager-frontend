import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

// project imports
import Auth from "../components/Auth";

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      {Component.authenticationEnabled ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

export default App;
