import { FormattedMessage } from "react-intl";

export interface StrongPoint {
  icon: string;
  title: string | JSX.Element;
  desc: string | JSX.Element;
}

const strongPoints: StrongPoint[] = [
  {
    icon: "/static/home/advantages/own_private_key.svg",
    title: (
      <FormattedMessage
        id="fixtures.advantages.title1"
        defaultMessage="私钥自管"
      />
    ),
    desc: (
      <FormattedMessage
        id="fixtures.advantages.desc1"
        defaultMessage="OneKey 创建的钱包助记词、种子均在本地加密存储，只有您能解密。"
      />
    ),
  },
  {
    icon: "/static/home/advantages/safety_data.svg",
    title: (
      <FormattedMessage
        id="fixtures.advantages.title2"
        defaultMessage="数据安全"
      />
    ),
    desc: (
      <FormattedMessage
        id="fixtures.advantages.desc2"
        defaultMessage="OneKey 不会存储用户的任何私密数据，加密资产完全由您自己掌控。"
      />
    ),
  },
  {
    icon: "/static/home/advantages/ease_use.svg",
    title: (
      <FormattedMessage id="fixtures.advantages.title3" defaultMessage="易用" />
    ),
    desc: (
      <FormattedMessage
        id="fixtures.advantages.desc3"
        defaultMessage="安全不失便捷，享受更顺畅的用户体验。"
      />
    ),
  },
  {
    icon: "/static/home/advantages/collect_money.svg",
    title: (
      <FormattedMessage
        id="fixtures.advantages.title4"
        defaultMessage="便捷收付款"
      />
    ),
    desc: (
      <FormattedMessage
        id="fixtures.advantages.desc4"
        defaultMessage="OneKey 不会存储用户的任何私密数据，加密资产完全由您自己掌控。"
      />
    ),
  },
  {
    icon: "/static/home/advantages/dapp_entry.svg",
    title: (
      <FormattedMessage
        id="fixtures.advantages.title5"
        defaultMessage="DApp 生态入口"
      />
    ),
    desc: (
      <FormattedMessage
        id="fixtures.advantages.desc5"
        defaultMessage="最热门的 DApp 都在这里，尽情探索吧！"
      />
    ),
  },
  {
    icon: "/static/home/advantages/sign_wallet.svg",
    title: (
      <FormattedMessage
        id="fixtures.advantages.title6"
        defaultMessage="多签钱包"
      />
    ),
    desc: (
      <FormattedMessage
        id="fixtures.advantages.desc6"
        defaultMessage="OneKey 支持近千种代币的多签钱包，方便多人共同管理资产 。"
      />
    ),
  },
  {
    icon: "/static/home/advantages/hd_root_wallet.svg",
    title: (
      <FormattedMessage
        id="fixtures.advantages.title7"
        defaultMessage="HD 根钱包"
      />
    ),
    desc: (
      <FormattedMessage
        id="fixtures.advantages.desc7"
        defaultMessage="强大又便捷的钱包类型，一个助记词就可以派生所有公链。"
      />
    ),
  },
  {
    icon: "/static/home/advantages/multi_chain_support.svg",
    title: (
      <FormattedMessage
        id="fixtures.advantages.title8"
        defaultMessage="多链支持"
      />
    ),
    desc: (
      <FormattedMessage
        id="fixtures.advantages.desc8"
        defaultMessage="近千种链上资产，一个钱包即可轻松掌握。"
      />
    ),
  },
  {
    icon: "/static/home/advantages/hardware_wallet.svg",
    title: (
      <FormattedMessage
        id="fixtures.advantages.title9"
        defaultMessage="硬件钱包备份"
      />
    ),
    desc: (
      <FormattedMessage
        id="fixtures.advantages.desc9"
        defaultMessage="配合 OneKey 硬件钱包使用。永不触网，资产离线存储更安全。"
      />
    ),
  },
];

export default strongPoints;
