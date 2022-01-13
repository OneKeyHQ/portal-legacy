import Nav from "../../components/universal/nav";
import Footer from "../../components/universal/footer";
import IntroductionPageTemplate from "../../components/intro_page_tpl/template";
import btcCoin from "../../fixtures/coins/ltc";

export default function Coin() {
  return (
    <div>
      <Nav />
      <IntroductionPageTemplate
        title={btcCoin.title}
        coin={btcCoin.coin}
        questions={btcCoin.questions}
        logo={btcCoin.logo}
      />
      <Footer />
    </div>
  );
}
