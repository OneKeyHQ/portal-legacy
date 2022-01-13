import { CoinIntroProp } from ".";
import { FormattedMessage } from "react-intl";
import { render } from "./utils";

const CoinProp: CoinIntroProp = {
  title: "什么是波卡币（Polkadot）",
  logo: "/img/dot_coin_logo.svg",
  coin: "DOT",
  questions: [
    {
      title: (
        <FormattedMessage
          id="fixtures.coins.dot.what"
          defaultMessage="什么是波卡币（Polkadot）"
        />
      ),
      answers: (
        <FormattedMessage
          id="fixtures.coins.dot.what.answer"
          description="| 符号是代码用来标记换行的, 请在翻译结果中保留"
          defaultMessage="DOT币又叫波卡币，英文全称是Polkadot。项目成立于2015年。Polkadot项目的主要负责人是大名鼎鼎的Dr. Gavin Wood。Dr. Gavin Wood是以太坊的创始人之一，也是以太坊黄皮书的制作者。Dr. Gavin Wood离开以太坊之后成立了自己的科技公司Parity。目前Polkadot这个项目由Parity公司管理。 | DOT币是Polkadot平台的原生代币，DOT分发：DOT币在主网络发布之前将无法使用，预计到2019年底。在此期间，您可以获得测试网点与testnet进行交互。导航到testnet并单击“创建帐户”。|预计将有1000万个DOT币作为Polkadot成因区块的一部分。2017年秋季有500万枚DOT币可供出售。"
        >
          {render}
        </FormattedMessage>
      ),
    },
    {
      title: (
        <FormattedMessage
          id="fixtures.coins.dot.how"
          defaultMessage="波卡币是如何运行的？"
        />
      ),
      answers: (
        <FormattedMessage
          id="fixtures.coins.dot.how.answer"
          description="| 符号是代码用来标记换行的, 请在翻译结果中保留"
          defaultMessage="Polkadot 通过一组通用验证器的大规模互操作性有助于保护其多个区块链，并允许他们通过将数据分布在许多平行链上来扩展交易规模 | Polkadot 的网络使用NPOS（提名的权益证明）机制来选择验证者和提名者，并最大化链安全性 | 独特的有效性方案使链条可以在相同规则下安全地交互，但主要是独立控制的"
        >
          {render}
        </FormattedMessage>
      ),
    },
    {
      title: (
        <FormattedMessage
          id="fixtures.coins.dot.store"
          defaultMessage="如何储存波卡币?"
        />
      ),
      answers: (
        <FormattedMessage
          id="fixtures.coins.dot.store.answer"
          defaultMessage="您可以将它存储在冷钱包或热钱包中。"
        />
      ),
    },
  ],
};

export default CoinProp;
