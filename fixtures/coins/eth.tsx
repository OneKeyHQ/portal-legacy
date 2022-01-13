import { CoinIntroProp } from ".";
import { FormattedMessage } from "react-intl";
import { render } from "./utils";

const CoinProp: CoinIntroProp = {
  title: "什么是以太坊",
  logo: "/img/eth_coin_logo.svg",
  coin: "ETH",
  questions: [
    {
      title: (
        <FormattedMessage
          id="fixtures.coins.eth.what"
          defaultMessage="什么是以太坊（Ethereum）"
        />
      ),
      answers: (
        <FormattedMessage
          id="fixtures.coins.eth.what.answer"
          description="| 符号是代码用来标记换行的, 请在翻译结果中保留"
          defaultMessage="以太坊是一个智能合约平台，开发人员可以在以太坊区块链上构建去中心化应用（DApps）。以太币是以太坊平台的本地数字货币。| 以太坊的资金部分来源于以太坊基金会，该基金会是以太坊生态下的一个非营利组织。以太坊生态还包括诸多联合企业，如以太坊企业联盟等。"
        >
          {render}
        </FormattedMessage>
      ),
    },
    {
      title: (
        <FormattedMessage
          id="fixtures.coins.eth.how"
          defaultMessage="以太坊是如何运行的？"
        />
      ),
      answers: (
        <FormattedMessage
          id="fixtures.coins.eth.how.answer"
          description="| 符号是代码用来标记换行的, 请在翻译结果中保留"
          defaultMessage="2013 年，Vitalik Buterin 构想出了以太坊，他的想法是把以太坊打造成为一个有别于比特币的开源区块链平台，于是智能合约诞生了。在以太坊区块链上，智能合约就像一个自运行的计算机程序，当满足特定条件时就会自动执行。区块链能让动智能合约代码完全按照编程方式运行，从而避免了停机，审查，欺诈或第三方干扰。| 以太坊网络于 2015 年 7 月 30 日上线，预挖了 7300 万个以太币。"
        >
          {render}
        </FormattedMessage>
      ),
    },
    {
      title: (
        <FormattedMessage
          id="fixtures.coins.eth.feature"
          defaultMessage="以太坊有什么特点？"
        />
      ),
      answers: (
        <FormattedMessage
          id="fixtures.coins.eth.feature.answer"
          description="| 符号是代码用来标记换行的, 请在翻译结果中保留"
          defaultMessage="开发者可以在以太坊平台上构建 DApp，DApp 的用途十分广泛，从创建新型数字资产，到抗审查的网络应用，再到去中心化的自治组织等。| 以太币是以太坊区块链的本地货币，也被用作数字货币，可以即时发送给世界上的任何人。以太币既可以作为付款方式，也可以用来进行价值储存。"
        >
          {render}
        </FormattedMessage>
      ),
    },
    {
      title: (
        <FormattedMessage
          id="fixtures.coins.eth.obtain"
          defaultMessage="如何获取以太坊？"
        />
      ),
      answers: (
        <FormattedMessage
          id="fixtures.coins.eth.obtain.answer"
          description="| 符号是代码用来标记换行的, 请在翻译结果中保留"
          defaultMessage="如果不想从事以太坊挖矿活动（挖矿成本非常高，除非您是职业矿工），您可以在加密货币交易所购买以太币。点击交易对标签，获取有关以太币的最新交易对和交易所币单。选择交易所之前，请务必仔细进行调查。您也可以将以太币存储在交易所或冷热钱包中。"
        >
          {render}
        </FormattedMessage>
      ),
    },
  ],
};
export default CoinProp;
