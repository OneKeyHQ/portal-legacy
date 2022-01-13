import React from "react";
import { useIntl } from "react-intl";
import Nav from "../components/universal/nav";
import Footer from "../components/universal/footer";
import Header from "../components/header";
import Hero from "../components/ventures_sectors/hero";
import Portfolio from "../components/ventures_sectors/portfolio";
import Cta from "../components/ventures_sectors/cta";

export default function Invest() {
  const intl = useIntl();
  return (
    <div>
      <Header>
        <title>
          {intl.formatMessage({
            id: "pages.ventures.title",
            defaultMessage: "OneKey - Ventures",
          })}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Header>
      <Nav />
      <Hero />
      <Portfolio />
      <Cta />
      <Footer />
    </div>
  );
}
