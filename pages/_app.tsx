import { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/index.css";
import { SessionProvider } from "next-auth/react";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const fetchCSS = async () => {
    try {
      const response = await fetch(
        "https://your-wordpress-site.com/wp-json/custom/v1/css"
      );
      const cssData = await response.text();
      console.log("Fetched CSS:", cssData);
    } catch (error) {
      console.error("No CSS fetched:", error);
    }
  };

  useEffect(() => {
    fetchCSS();
  }, []);

  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
