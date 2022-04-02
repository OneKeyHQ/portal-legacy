import Head from "next/head";
import React from "react";

const Header: React.FC = function (prop) {
  return (
    <Head>
      {process.env.NODE_ENV === "production" ? (
        <script
          src="https://jarvis-website.onekey.so/script.js"
          data-site="WWLGDZJB"
          data-spa="auto"
          defer
        />
      ) : null}
      {prop.children}
    </Head>
  );
};

export default Header;
