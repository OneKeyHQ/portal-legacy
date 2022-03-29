import { useIntl } from "react-intl";
import Nav from "../components/universal/nav";
import Hero from "../components/home_sectors/hero";
import LogoClouds from "../components/home_sectors/logo_clouds";
import Feature from "../components/home_sectors/feature";
import Payments from "../components/home_sectors/payments";
import Hardware from "../components/home_sectors/hardware";
import Review from "../components/home_sectors/reviews";
import Statistic from "../components/home_sectors/statistic";
import Cta from "../components/home_sectors/cta";
import Faq from "../components/home_sectors/faqs";
import Contact from "../components/home_sectors/contact";
import Footer from "../components/universal/footer";
import Header from "../components/header";
import Roadmap from "../components/home_sectors/roadmap";
import AlphaEntry from "../components/universal/alpha_entry";

export default function Home() {
  const intl = useIntl();

  return (
    <div>
      <Header>
        <link rel="icon" href="/favicon.ico" />
        <title>
          {intl.formatMessage({
            id: "pages.home.title",
            defaultMessage:
              "OneKey - 备受信赖的加密资产钱包 ｜ 支持比特币、以太坊，以及海量加密资产。",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "pages.home.description",
            defaultMessage:
              "简单、易用且极为安全的加密资产钱包，轻松管理您的加密资产。",
          })}
        />
      </Header>
      <AlphaEntry />
      <Nav />
      <Hero />
      <LogoClouds />
      <Payments />
      <Feature />
      <Hardware />
      <Review />
      <Statistic />
      <Roadmap />
      <Cta />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
