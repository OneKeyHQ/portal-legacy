import Head from "next/head";
import React from "react";

const content = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('js', new Date());gtag('config', 'UA-187315652-1');`;

const Header: React.FC = function (prop) {
  return (
    <Head>
      {process.env.NODE_ENV === "production" ? (
        <>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-187315652-1"
          />
          <script dangerouslySetInnerHTML={{ __html: content }} />
        </>
      ) : null}
      {prop.children}
    </Head>
  );
};

export default Header;
