import { FormattedMessage, useIntl } from "react-intl";
import { toHelpLink } from "../../utils/utils";
import Link from "./link";
import { useLocale } from "./IntlProvider";

export default function Footer() {
  const intl = useIntl();
  const { locale } = useLocale();

  return (
    <footer className="bg-gray-50" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  <FormattedMessage
                    id="components.footer.product"
                    defaultMessage="产品"
                  />
                </h3>
                <ul className="mt-4 space-y-4 capitalize">
                  <li>
                    <a
                      href="//crowdfund.onekey.so"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      <FormattedMessage id="components__nav__products__crowdfund" />
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/download"
                      className="text-base text-gray-500  hover:text-gray-900"
                    >
                      <FormattedMessage
                        id="components.footer.app"
                        defaultMessage="手机钱包"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hardware"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      <FormattedMessage
                        id="components.footer.hardware"
                        defaultMessage="硬件设备"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/plugin"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      <FormattedMessage
                        id="components.footer.browserExtension"
                        defaultMessage="浏览器插件"
                      />
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://swap.onekey.so"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      <FormattedMessage
                        id="component.nav.onekey.swap"
                        defaultMessage="闪兑 Swap"
                      />
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/tokens"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      <FormattedMessage
                        id="component.nav.onekey.token"
                        defaultMessage="Tokens 列表"
                      />
                    </Link>
                  </li>
                  <li>
                    <a
                      href="//bip39.onekey.so"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      <FormattedMessage
                        id="components__nav__products__bip39"
                        defaultMessage="BIP39 助记词转换器"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  <FormattedMessage
                    id="components.footer.resource"
                    defaultMessage="资源"
                  />
                </h3>
                <ul className="mt-4 space-y-4 capitalize">
                  <li>
                    <a
                      href="https://onekeyhq.github.io/upptime"
                      target="_blank"
                      className="text-base text-gray-500 hover:text-gray-900"
                      rel="noreferrer"
                    >
                      <FormattedMessage
                        id="components.footer.status"
                        defaultMessage="系统状态"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/OneKeyHQ/OneKey-Wallet"
                      target="_blank"
                      className="text-base text-gray-500 hover:text-gray-900"
                      rel="noreferrer"
                    >
                      <FormattedMessage
                        id="components.footer.opensource.community"
                        defaultMessage="开源社区"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href={toHelpLink({
                        path: "articles/360002200956",
                        locale,
                      })}
                      className="text-base text-gray-500 hover:text-gray-900"
                      rel="noreferrer"
                    >
                      <FormattedMessage
                        id="components.footer.brand.materialy"
                        defaultMessage="品牌素材"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href={toHelpLink({
                        path: "articles/360002003315",
                        locale,
                      })}
                      className="text-base text-gray-500 hover:text-gray-900"
                      rel="noreferrer"
                    >
                      <FormattedMessage
                        id="components.footer.privacy.agreement"
                        defaultMessage="隐私协议"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href={toHelpLink({
                        path: "articles/360002014776",
                        locale,
                      })}
                      className="text-base text-gray-500 hover:text-gray-900"
                      rel="noreferrer"
                    >
                      <FormattedMessage
                        id="components.footer.user.agreement"
                        defaultMessage="用户协议"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  <FormattedMessage
                    id="components.footer.business.cooperation"
                    defaultMessage="商务合作"
                  />
                </h3>
                <ul className="mt-4 space-y-4 capitalize">
                  <li>
                    <a
                      target="_blank"
                      href="//gr4yl99ujhl.typeform.com/to/kDJuiIQ9"
                      className="text-base text-gray-500 hover:text-gray-900"
                      rel="noreferrer"
                    >
                      <FormattedMessage
                        id="components.footer.submit.dapp"
                        defaultMessage="提交 Dapp"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="//gr4yl99ujhl.typeform.com/to/ZM0qyr9e"
                      className="text-base text-gray-500 hover:text-gray-900"
                      rel="noreferrer"
                    >
                      <FormattedMessage
                        id="components.footer.submit.token"
                        defaultMessage="提交 Token"
                      />
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/ventures"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      <FormattedMessage
                        id="components.footer.user.ventures"
                        defaultMessage="风险投资"
                      />
                    </Link>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href={toHelpLink({
                        path: "articles/360002658076",
                        locale,
                      })}
                      className="text-base text-gray-500 hover:text-gray-900"
                      rel="noreferrer"
                    >
                      <FormattedMessage
                        id="components.footer.sales.alliance"
                        defaultMessage="销售联盟"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={toHelpLink({
                        path: "articles/360002658096",
                        locale,
                      })}
                      className="text-base text-gray-500 hover:text-gray-900"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FormattedMessage
                        id="components.footer.ad"
                        defaultMessage="广告"
                      />
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/invest"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      <FormattedMessage
                        id="components.footer.invest"
                        defaultMessage="投资者关系"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  <FormattedMessage
                    id="components.footer.encrypted.assets"
                    defaultMessage="加密资产"
                  />
                </h3>
                <ul className="mt-4 space-y-4 capitalize">
                  <li>
                    <Link
                      href="/coins/btc"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Bitcoin (BTC)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/coins/eth"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Ethereum (ETH)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/coins/ltc"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Litecoin (LTC)
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="/coins/dot"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Polkadot (DOT)
                    </Link>
                  </li> */}
                  <li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="cursor-not-allowed text-base text-gray-500 hover:text-gray-900">
                      Dogecoin (DOGE)
                    </a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="cursor-not-allowed text-base text-gray-500 hover:text-gray-900">
                      Dash (DASH)
                    </a>
                  </li>
                  {/* <li>
                    <a className="cursor-not-allowed text-base text-gray-500 hover:text-gray-900">
                      Ripple (XRP)
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase ">
              <FormattedMessage
                id="components.footer.subscription"
                defaultMessage="订阅我们的推送(建议你使用匿名性较高的邮箱，最好不用使用此邮件地址购买 OneKey)"
              />
            </h3>
            <p className="mt-2 text-base text-gray-500">
              <FormattedMessage
                id="components.footer.subscription.discount"
                defaultMessage="及时获取最新的 OneKey 优惠信息"
              />
            </p>
          </div>
          <form
            className="mt-4 sm:flex sm:max-w-md lg:mt-0 flex-1 lg:pl-8"
            method="post"
            target="_blank"
            action="https://www.getrevue.co/profile/onekey/add_subscriber"
          >
            <label htmlFor="member_email" className="sr-only">
              <FormattedMessage
                id="components.footer.email.address"
                defaultMessage="邮箱地址"
              />
            </label>
            <input
              type="email"
              name="member[email]"
              id="member_email"
              autoComplete="email"
              required
              className="appearance-none min-w-0 w-full bg-white border border-gray-300 py-2 px-4 text-base rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:placeholder-gray-400 sm:max-w-xs"
              placeholder={intl.formatMessage({
                id: "components.footer.email.input.placeholder",
                defaultMessage: "输入您的邮件地址",
              })}
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full bg-green-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <FormattedMessage
                  id="components.footer.subscription.submit"
                  defaultMessage="订阅"
                />
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a
              href="https://twitter.com/OneKeyHQ"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="https://discord.gg/nwUJaTzjzv"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Discord</span>
              <svg
                className="w-6 h-6"
                viewBox="0 0 71 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="71" height="55" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              href="https://github.com/OneKeyHQ/OneKey-Wallet"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            © {new Date().getFullYear()} OneKey, Inc. All rights reserved.
          </p>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 flex items-center">
          <span className="text-base text-gray-400">
            <FormattedMessage
              id="components.footer.more.links"
              defaultMessage="友情链接："
            />
          </span>
          <a
            target="_blank"
            href="https://www.bixin.im"
            className="px-2 text-base text-gray-400 hover:text-gray-500"
            rel="noreferrer"
          >
            <FormattedMessage
              id="components.footer.more.bixin.wallet"
              defaultMessage="币信钱包"
            />
          </a>
          <a
            target="_blank"
            href="https://www.benmo.io"
            className="text-base text-gray-400 hover:text-gray-500"
            rel="noreferrer"
          >
            <FormattedMessage
              id="components.footer.more.benmo.community"
              defaultMessage="本末社区"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
