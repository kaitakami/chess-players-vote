import { type AppType } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <div className="bg-gradient-to-b from-[#1f1f1f] to-[#15162c] text-white min-h-screen selection:bg-green-400 selection:text-blue-500  "><Component {...pageProps} /></div>;
};

export default api.withTRPC(MyApp);
