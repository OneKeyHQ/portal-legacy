import { CoinIntroProp } from ".";
import { FormattedMessage } from "react-intl";
import { render } from "./utils";

const CoinProp: CoinIntroProp = {
  title: "什么是莱特币（Litecoin）",
  logo: "/img/ltc_coin_logo.svg",
  coin: "LTC",
  questions: [
    {
      title: (
        <FormattedMessage
          id="fixtures.coins.ltc.what"
          defaultMessage="什么是莱特币（Litecoin）"
        />
      ),
      answers: (
        <FormattedMessage
          id="fixtures.coins.ltc.what.answer"
          description="| 符号是代码用来标记换行的, 请在翻译结果中保留"
          defaultMessage="莱特币是前谷歌员工Charlie Lee在2011年创建的一种点对点加密货币。莱特币基于比特币协议创建，但在哈希算法、硬上限、区块交易时间和一些其他因素上与比特币有所区别。2011年10月7日，莱特币在GitHub上的一个开源客户端上完成发布，5天后的10月13日，莱特币网络正式上线。 | Lee 创建莱特币的目的是想打造一个精简版的比特币。莱特币开发者经常说比特币是黄金而莱特币是白银。莱特币在交易确认速度上与比特币不同，大概2分半钟出一次块。但是，由于网络堵塞，用户可能需要等待大约半个小时才能处理其交易。| 莱特币已经被很多商家接受，您可以在莱特币基金会网站上查看更新列表。"
        >
          {render}
        </FormattedMessage>
      ),
    },
    {
      title: (
        <FormattedMessage
          id="fixtures.coins.ltc.store"
          defaultMessage="如何储存莱特币?"
        />
      ),
      answers: (
        <FormattedMessage
          id="fixtures.coins.ltc.store.answer"
          defaultMessage="您可以将它存储在冷钱包或热钱包中。"
        />
      ),
    },
  ],
};
export default CoinProp;
