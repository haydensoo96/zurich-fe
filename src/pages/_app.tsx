// filepath: /Users/haydensoo/Project/zurich-fe/src/pages/_app.tsx
import { Provider } from "react-redux";
import store from "../store";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
