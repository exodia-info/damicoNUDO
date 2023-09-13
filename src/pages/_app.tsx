import { type AppType } from "next/app";

import { api } from "damico/utils/api";

import "damico/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
