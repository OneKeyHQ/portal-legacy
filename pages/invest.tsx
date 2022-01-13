import React from "react";
import { useIntl } from "react-intl";
import Nav from "../components/universal/nav";
import Footer from "../components/universal/footer";
import Header from "../components/header";
import Hero from "../components/invest_sectors/hero";
import Company from "../components/invest_sectors/company";
import Num from "../components/invest_sectors/num";
import Finance from "../components/invest_sectors/finance";

export default function Invest() {
  const intl = useIntl();
  return (
    <div>
      <Header>
        <title>
          {intl.formatMessage({
            id: "pages.invest.title",
            defaultMessage: "OneKey - 投资者关系",
          })}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Header>
      <Nav />
      <Hero />
      <Company />
      <Num />
      <Finance />
      <Footer />
    </div>
  );
}
