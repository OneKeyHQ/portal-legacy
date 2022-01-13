import React from "react";
import { useIntl } from "react-intl";
import Nav from "../components/universal/nav";
import Footer from "../components/universal/footer";
import Header from "../components/header";
import Hero from "../components/plugin_sectors/hero";
import Data from "../components/plugin_sectors/data";

export default function Plugin() {
  const intl = useIntl();
  return (
    <div>
      <Header>
        <title>
          {intl.formatMessage({
            id: "pages.plugin.title",
            defaultMessage: "OneKey 浏览器插件",
          })}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Header>
      <Nav />
      <Hero />
      <Data />
      <Footer />
    </div>
  );
}
