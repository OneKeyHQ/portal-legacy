/* eslint-disable @onekeyhq/literal-blacklist/literal-blacklist */
import { FormattedMessage } from "react-intl";
import React from "react";

export interface QuestionProps {
  title: string | JSX.Element;
  answers: JSX.Element;
}

const render = (e: string[]) => {
  const items = e[0].split("|");
  return (
    <>
      {items.map((e, i) => (
        <p className="text-base text-gray-500" key={i}>
          {e}
        </p>
      ))}
    </>
  );
};

export default [
  {
    title: (
      <FormattedMessage
        id="fixtures.questions.title1"
        defaultMessage="为什么你应该自己保管私钥？"
      />
    ),
    answers: (
      <FormattedMessage
        id="fixtures.questions.answer1"
        description="| 符号是代码用来标记换行的, 请在翻译结果中保留"
        defaultMessage="从2011年至今，曾有大量中心化平台被黑客攻破，价值数以亿计的加密资产不翼而飞，比如 Mt.Gox、 Cryptopianswers…等等，都是刀俎间的鱼肉，这些平台的用户在绝望和无助中损失了大量钱财。| 请牢记，只要私钥不在自己手上，币就不是你的。任何不是你自己掌握私钥的平台（钱包、交易所）都是中心化的，存在单点故障的可能。因此，保管好自己的私钥是必经之路，即便你现在图方便将资产托管在中心化平台，也迟早有自己保管私钥的那一天。| 私钥、助记词、Keystore 都是同一事物的不同形态，只要你妥善保管好它们，就没有任何人、组织或黑客能从你手里将币夺走。| 你的资产也就安然无恙，每日高枕无忧"
      >
        {render}
      </FormattedMessage>
    ),
  },
  {
    title: (
      <FormattedMessage
        id="fixtures.questions.title2"
        defaultMessage="安全不意味着麻烦。"
      />
    ),
    answers: (
      <FormattedMessage
        id="fixtures.questions.answer2"
        description="| 符号是代码用来标记换行的, 请在翻译结果中保留"
        defaultMessage="许多人不愿意自己保管私钥，实际是害怕自己把币搞丢，怕没有人帮自己找回资产。其实这都是蹩脚难用的软件给人留下的心理阴影，你选错了产品。| 我们的责任和动力，就是把保管加密资产这件事，变得既省力，又安全，连老人和小孩都能够轻松上手。 | OneKey 使用业界先进的算法加密了能加密的一切数据，你没听错，是一切。你的私钥、助记词都在你本地保管，除了你自己，没有任何人可以动用。 | 自己下载试试便知一二。"
      >
        {render}
      </FormattedMessage>
    ),
  },
  {
    title: (
      <FormattedMessage
        id="fixtures.questions.title3"
        defaultMessage="真的开源。"
      />
    ),
    answers: (
      <FormattedMessage
        id="fixtures.questions.answer3"
        description="| 符号是代码用来标记换行的, 请在翻译结果中保留"
        defaultMessage="我们不害怕开源泄露产品细节，也不在意竞争者模仿、复制，抢占我们的用户。 | 我们起初在 Trezor 身上学到了许多宝贵的知识，如今也以开源的形式将我们所知、所得回馈给社区。 | 对于如何定义加密钱包，我们没有比他人更高明的解释。但从软件、硬件、电路板甚至外壳3D 结构模型的彻底开源，证明我们有信心给这个世界提出的问题，一个更好的答案。"
      >
        {render}
      </FormattedMessage>
    ),
  },
  {
    title: (
      <FormattedMessage
        id="fixtures.questions.title4"
        defaultMessage="你注重隐私，我们也是。"
      />
    ),
    answers: (
      <FormattedMessage
        id="fixtures.questions.answer4"
        description="| 符号是代码用来标记换行的, 请在翻译结果中保留"
        defaultMessage="有太多互联网公司将收集隐私当作理所当然；有太多用户将出卖隐私当作天经地义。 | 然而大可不必如此。| 我们对系统权限的请求非常克制，你甚至可以自行定义节点、服务器、区块浏览器等等，来达到同步数据不经由 OneKey 服务器的需求。| 我们不会挖掘、出售你的个人数据，我们对你的数据兴趣不大。我们的商业模式很简单，提供有价值的服务和产品（包括硬件），并向客户收费，这是我们赚钱的唯一方式。| 用你感到自在的方式，随性使用我们的产品。"
      >
        {render}
      </FormattedMessage>
    ),
  },
  {
    title: (
      <FormattedMessage
        id="fixtures.questions.title5"
        defaultMessage="我们希望能服务你到互联网的终点。"
      />
    ),
    answers: (
      <FormattedMessage
        id="fixtures.questions.answer5"
        description="| 符号是代码用来标记换行的, 请在翻译结果中保留"
        defaultMessage="我知道，你在使用一家公司的产品前有很多顾虑，比如倒闭了怎么办。如果有的选，毫无疑问大家会优先考虑大厂。| 我们并不是一家初创的企业，作为由币信孵化的团队，前者已经稳定运行了超过7年，在业界有口皆碑。| 我们把稳定财务状态和持续盈利作为目标，以此换取业务上的独立，体面的站着赚钱。| 所以不用担心我们，你的资产在你自己手中，不受 OneKey 经营状况的影响。如果要给我们的服务年限定个日期，我希望是全球 IPv6 地址耗尽的那一天。"
      >
        {render}
      </FormattedMessage>
    ),
  },
  {
    title: (
      <FormattedMessage
        id="fixtures.questions.title6"
        defaultMessage="没有 KYC，不需要个人信息，不需要任何许可。"
      />
    ),
    answers: (
      <FormattedMessage
        id="fixtures.questions.answer6"
        description="| 符号是代码用来标记换行的, 请在翻译结果中保留"
        defaultMessage="没错，你无需提供身份证、护照、真实姓名等任何信息，完全匿名、彻底自由。我们没有（也无法）给 OneKey 施加任何使用限制，请君随意使用。"
      >
        {(e) => <p className="text-base text-gray-500">{e}</p>}
      </FormattedMessage>
    ),
  },
];
