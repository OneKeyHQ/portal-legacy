import React from "react";
import { useIntl } from "react-intl";
import Nav from "../components/universal/nav";
import Footer from "../components/universal/footer";
import Header from "../components/header";
import Details from "../components/hw_sectors/details";
import Hero from "../components/hw_sectors/hero";
import Features from "../components/hw_sectors/features";
import Cryptos from "../components/hw_sectors/cryptos";
import Cta from "../components/hw_sectors/cta";
import Compatibility from "../components/hw_sectors/compatibility";
import Transparent from "../components/hw_sectors/transparent";

export default function Hardware() {
  const intl = useIntl();
  return (
    <div className="bg-white">
      <Header>
        <title>
          {intl.formatMessage({
            id: "pages.hardware.title",
            defaultMessage: "OneKey 硬件钱包",
          })}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Header>
      <Nav />
      <main>
        <Hero />
        <Details />
        <Features />
        <Cryptos />
        <Compatibility />
        <Transparent />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
