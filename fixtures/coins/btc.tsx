import { CoinIntroProp } from ".";
import { FormattedMessage } from "react-intl";
import { render } from "./utils";

const CoinProp: CoinIntroProp = {
  title: "什么是比特币（Bitcoin）",
  logo: "/img/btc_coin_logo.svg",
  coin: "BTC",
  questions: [
    {
      title: (
        <FormattedMessage
          id="fixtures.coins.btc.what"
          defaultMessage="什么是比特币（Bitcoin）"
        />
      ),
      answers: (
        <FormattedMessage
          id="fixtures.coins.btc.what.answner"
          description="| 符号是代码用来标记换行的, 请在翻译结果中保留"
          defaultMessage="比特币是一种完全去中心化的数字货币。与美元不同，您无法将它拿在手上，也不能把它存进银行。比特币运行在一个点对点的网络上，人们可以在无需中介机构（如银行、央行或者支付机构）的情况下发送和接收比特币。事实上，没有任何一家中心化机构或者支付系统可以控制比特币。 | 比特币是有史以来第一个加密货币。2008年10月31日，有人（或者一群人）以“中本聪”的名义发表了著名的比特币白皮书。| 白皮书的第一行写道：“一个真正的的点对点的电子现金应该允许从发起方直接在线支付给对方，而不需要通过第三方的金融服务机构。| 比特币网络于2009年1月日正式发布，这标志着加密货币革命的开始。"
        >
          {render}
        </FormattedMessage>
      ),
    },
    {
      title: (
        <FormattedMessage
          id="fixtures.coins.btc.how"
          defaultMessage="比特币是如何运行的？"
        />
      ),
      answers: (
        <FormattedMessage
          id="fixtures.coins.btc.how.answer"
          description="| 符号是代码用来标记换行的, 请在翻译结果中保留"
          defaultMessage="比特币是一种真正去中心化的数字货币，这使它不同于之前出现的任何其他资产。| 比特币的出现彻底改变了数字货币，它将记账过程去中心化了。比特币网络本身并不扮演记账员的角色，相反，它将用户账户余额和交易信息以匿名的形式分享给全球的用户。这意味着任何想要参与比特币协议的人，都可以下载和运行所需的免费开源软件。 | 比特币的工作原理是确保这个共享账本能够不断累积：新的交易经过验证、记录，然后按顺序被添加到账本中。将新的“信息区块”添加到已经存在的区块链上，这边是区块链技术的核心"
        >
          {render}
        </FormattedMessage>
      ),
    },
    {
      title: (
        <FormattedMessage
          id="fixtures.coins.btc.store"
          defaultMessage="如何存储比特币？"
        />
      ),
      answers: (
        <FormattedMessage
          id="fixtures.coins.btc.store.answer"
          description="| 符号是代码用来标记换行的, 请在翻译结果中保留"
          defaultMessage="您可以将比特币存放在比特币钱包中。 比特币钱包有两种形式——热钱包和冷钱包。热钱包指的是联网的钱包软件，即在线存储比特币。通过热钱包进行交易更加方便，但是从逻辑上讲，由于热钱包与互联网连接，更容易受到攻击。| 冷钱包就是“离线”钱包。 这种不触网的储存形式能够有效防止黑客攻击。但由于冷钱包成本过高，且需要更多的技术知识才能操作，所以对于用户来说，其便利性也大幅降低。硬件钱包和纸钱包都属于冷钱包。"
        >
          {render}
        </FormattedMessage>
      ),
    },
  ],
};
export default CoinProp;
