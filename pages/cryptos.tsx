import React from "react";
import { useIntl, FormattedMessage } from "react-intl";
import Nav from "../components/universal/nav";
import Footer from "../components/universal/footer";
import Header from "../components/header";
import Hero from "../components/crypto_sectors/hero";
import Table, { Currency, Support } from "../components/crypto_sectors/table";

const mobileSupports = [
  "ETH",
  "BSC",
  "HECO",
  "BTC",
  "OKT",
  "USDT",
  "POLYGON",
  "STARCOIN",
  "SOLANA",
  "CONFLUX",
  "ALGORAND",
];
const extensionSupports = [
  "ETH",
  "BSC",
  "HECO",
  "OKT",
  "POLYGON",
  "FANTOM",
  "XDAI",
  "USDT",
  "SOLANA",
  "CONFLUX",
];
const desktopSupports = [
  "BTC",
  "LTC",
  "ETH",
  "BTG",
  "ETC",
  "BCH",
  "DASH",
  "DGB",
  "DOGE",
  "NMC",
  "VTC",
  "ZEC",
  "USDT",
];
const hardwareSupports = [
  "BTC",
  "LTC",
  "ETH",
  "ETC",
  "BCH",
  "BTG",
  "DASH",
  "DGB",
  "DOGE",
  "NMC",
  "VTC",
  "ZEC",
  "USDT",
  "BSC",
  "HECO",
  "OKT",
  "POLYGON",
  "FANTOM",
  "XDAI",
  "USDT",
  "SOLANA",
  "STARCOIN",
];

const mapSupports = (symbol: string): Support => [
  mobileSupports.includes(symbol),
  hardwareSupports.includes(symbol),
  extensionSupports.includes(symbol),
  desktopSupports.includes(symbol),
];

const currencies: Currency[] = [
  {
    link: "https://bitcoin.org/",
    symbol: "BTC",
    name: (
      <FormattedMessage
        id="pages.crypto_sectors.table.BTC"
        defaultMessage="比特币"
      />
    ),
    iconOrUrl: "/img/btc_coin_logo.svg",
  },
  {
    link: "https://ethereum.org/",
    symbol: "ETH",
    name: (
      <FormattedMessage
        id="pages.crypto_sectors.table.ETH"
        defaultMessage="以太坊"
      />
    ),
    iconOrUrl: "/img/eth_coin_logo.svg",
  },
  {
    link: "	https://www.bitcoincash.org/",
    symbol: "BCH",
    name: (
      <FormattedMessage
        id="pages_crypto__coin_name_BCH"
        defaultMessage="比特币现金"
      />
    ),
    iconOrUrl: "/img/bch_coin_logo.png",
  },
  {
    link: "https://bitcoingold.org/",
    symbol: "BTG",
    name: (
      <FormattedMessage
        id="pages_crypto__coin_name_BTG"
        defaultMessage="Bitcoin Gold"
      />
    ),
  },
  {
    link: "https://www.dash.org/",
    symbol: "DASH",
    name: (
      <FormattedMessage
        id="pages_crypto__coin_name_DASH"
        defaultMessage="Dash"
      />
    ),
  },
  {
    link: "https://tether.to",
    symbol: "USDT",
    name: (
      <FormattedMessage
        id="pages_crypto__coin_name_USDT"
        defaultMessage="Tether"
      />
    ),
  },
  {
    link: "http://dogecoin.com/",
    symbol: "DOGE",
    name: (
      <FormattedMessage
        id="pages_crypto__coin_name_DOGE"
        defaultMessage="狗狗币"
      />
    ),
  },
  {
    link: "https://digibyte.org/",
    symbol: "DGB",
    name: (
      <FormattedMessage
        id="pages_crypto__coin_name_DGB"
        defaultMessage="极特币"
      />
    ),
  },
  {
    link: "https://litecoin.org/",
    symbol: "LTC",
    name: (
      <FormattedMessage
        id="pages_crypto__coin_name_LTC"
        defaultMessage="莱特币"
      />
    ),
  },
  {
    link: "https://www.namecoin.org/",
    symbol: "NMC",
    name: (
      <FormattedMessage
        id="pages_crypto__coin_name_NMC"
        defaultMessage="Namecoin"
      />
    ),
  },
  {
    link: "http://vertcoin.org/",
    symbol: "VTC",
    name: (
      <FormattedMessage
        id="pages_crypto__coin_name_VTC"
        defaultMessage="Vertcoin"
      />
    ),
  },
  {
    link: "https://z.cash/",
    symbol: "ZEC",
    name: (
      <FormattedMessage
        id="pages_crypto__coin_name_ZEC"
        defaultMessage="Zcash"
      />
    ),
  },
  {
    link: "https://www.hecochain.com/",
    symbol: "HECO",
    name: (
      <FormattedMessage
        id="pages_crypto__coin_name_HECO"
        defaultMessage="HECO"
      />
    ),
    iconOrUrl: "/img/heco_coin_logo.svg",
  },
  {
    link: "https://www.binance.org/",
    symbol: "BSC",
    name: (
      <FormattedMessage
        id="pages_crypto__coin_name_BSC"
        defaultMessage="Binance Chain"
      />
    ),
    iconOrUrl: "/img/bsc_coin_logo.svg",
  },
  {
    link: "https://www.okex.com/okexchain",
    symbol: "OKT",
    name: (
      <FormattedMessage
        id="pages_crypto__coin_name_OKT"
        defaultMessage="OKExChain"
      />
    ),
  },
  {
    link: "https://polygon.technology/",
    symbol: "POLYGON",
    name: (
      <FormattedMessage
        id="pages_crypto__coin_name_POLYGON"
        defaultMessage="Polygon"
      />
    ),
  },
  {
    link: "https://fantom.foundation/",
    symbol: "FANTOM",
    name: (
      <FormattedMessage
        id="pages_crypto__coin_name_FANTOM"
        defaultMessage="Fantom"
      />
    ),
  },
  {
    link: "https://www.xdaichain.com/",
    symbol: "XDAI",
    name: (
      <FormattedMessage
        id="pages_crypto__coin_name_XDAI"
        defaultMessage="Xdai"
      />
    ),
  },
  {
    link: "https://starcoin.org/",
    symbol: "STARCOIN",
    name: (
      <FormattedMessage
        id="pages_crypto__coin_name_STARCOIN"
        defaultMessage="Starcoin"
      />
    ),
  },
  {
    link: "https://solana.com/",
    symbol: "SOLANA",
    name: (
      <FormattedMessage
        id="pages_crypto__coin_name_SOLANA"
        defaultMessage="Solana"
      />
    ),
  },
  {
    link: "https://confluxnetwork.org/",
    symbol: "CONFLUX",
    name: (
      <FormattedMessage
        id="pages_crypto__coin_name_CONFLUX"
        defaultMessage="Conflux"
      />
    ),
  },
  {
    link: "https://www.algorand.com/",
    symbol: "ALGORAND",
    name: (
      <FormattedMessage
        id="pages_crypto__coin_name_ALGORAND"
        defaultMessage="Algorand"
      />
    ),
  },
].map(({ symbol, iconOrUrl, ...currency }) => ({
  ...currency,
  symbol,
  iconOrUrl: iconOrUrl ?? `/img/${symbol.toLowerCase()}_coin_logo.png`,
  supports: mapSupports(symbol),
}));

export default function Cryptos() {
  const intl = useIntl();

  return (
    <div>
      <Header>
        <title>
          {intl.formatMessage({
            id: "pages.cryptos.title",
            defaultMessage: "OneKey 加密资产支持列表",
          })}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Header>
      <Nav />
      <Hero />
      <Table currencies={currencies} />
      <Footer />
    </div>
  );
}
