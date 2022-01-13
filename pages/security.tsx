import React from "react";
import { useIntl } from "react-intl";
import Nav from "../components/universal/nav";
import Footer from "../components/universal/footer";
import Header from "../components/header";
import Hero from "../components/security_sectors/hero";
import HowToProtect from "../components/security_sectors/howToProtect";
import Cta from "../components/security_sectors/cta";

export default function Security() {
  const intl = useIntl();
  return (
    <div>
      <Header>
        <title>
          {intl.formatMessage({
            id: "pages.security.title",
            defaultMessage: "安全",
          })}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Header>
      <Nav />
      <Hero />
      <HowToProtect />
      <Cta />
      <Footer />
    </div>
  );
}
