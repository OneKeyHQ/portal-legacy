import classnames from "classnames";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import camelcase from "camelcase-keys";
import { fetchWithCache } from "../../utils/fetch-with-cache";
import Link from "./link";
import { toHelpLink } from "../../utils/utils";
import { ViewGridAddIcon, PencilIcon } from "@heroicons/react/outline";
import LanguageSwitcher from "./language_switcher";
import { useLocale } from "./IntlProvider";
import ShopLink from "./shop_link";

interface Article {
  id: number;
  name: string;
  htmlUrl: string;
}

export default function Nav() {
  const [visible, setVisible] = useState(false);
  const [articles, setArticels] = useState<Article[]>([]);
  const { pathname } = useRouter();
  const { locale } = useLocale();
  React.useEffect(() => {
    const articlesUrl = `https://help.onekey.so/api/v2/help_center/articles/search.json?category=360000170175&sort_by=created_at&sort_order=dsc&per_page=3&locale=${locale?.toLowerCase()}`;
    fetchWithCache(articlesUrl).then((res) => {
      const result = camelcase(res.results, { deep: true });
      setArticels(result);
    });
  }, [locale]);
  React.useEffect(() => {
    setVisible(false);
  }, [pathname]);

  const helpCenterHref = toHelpLink({ locale });

  return (
    <div className="relative bg-gray-50">
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-4">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <span className="sr-only">OneKey</span>
                <div className="h-8">
                  <img
                    // width={40}
                    // height={40}
                    className="h-8"
                    src="/img/logo_with_text_green.png"
                    alt="logo"
                    // unoptimized
                  />
                </div>
              </Link>
            </div>
            <div className="flex justify-end align-center -mr-2 -my-2 md:hidden">
              <LanguageSwitcher className="mr-2" />
              <div
                onClick={() => setVisible(true)}
                onKeyDown={() => setVisible(true)}
                tabIndex={0}
                role="menuitem"
              >
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                >
                  <span className="sr-only">打开菜单</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <nav
              className={`hidden md:flex flex-wrap lg:space-x-10 ${
                locale === "en-US" ? "space-x-6" : "space-x-8"
              }`}
            >
              <div className="relative">
                <div className="group inline-block">
                  <button
                    type="button"
                    className="bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
                  >
                    <span>
                      <FormattedMessage
                        id="components.nav.production"
                        defaultMessage="产品"
                      />
                    </span>
                    <svg
                      className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="hidden group-hover:block absolute -ml-4 pt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <Link
                          href="/download"
                          className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>

                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              <FormattedMessage
                                id="component.nav.onekey.app"
                                defaultMessage="手机钱包 App"
                              />
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              <FormattedMessage
                                id="component.nav.onekey.app.advantage"
                                defaultMessage="行业先进的 HD 链上钱包，私钥掌握在自己手中，易用性和安全性兼得，小白也能轻易上手。"
                              />
                            </p>
                          </div>
                        </Link>
                        <Link
                          href="/plugin"
                          className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              <FormattedMessage
                                id="component.nav.onekey.browserextension"
                                defaultMessage="浏览器插件"
                              />
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              <FormattedMessage
                                id="component.nav.onekey.browserextension.advantage"
                                defaultMessage="完美兼容 Chrome, Firefox 等主流浏览器，畅快 DeFi 体验。"
                              />
                            </p>
                          </div>
                        </Link>
                        <Link
                          href="/hardware"
                          className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                            />
                          </svg>

                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              <FormattedMessage
                                id="component.nav.onekey.hardware"
                                defaultMessage="硬件设备"
                              />
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              <FormattedMessage
                                id="component.nav.onekey.hardware.advantage"
                                defaultMessage="离线冷存储你的加密资产，物理隔离病毒软件或木马。私钥不触网，软硬件全开源，放心用。"
                              />
                            </p>
                          </div>
                        </Link>
                        <a
                          href="https://swap.onekey.so"
                          className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-green-600"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24Z"
                              stroke="currentColor"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.3391 24L29.1717 17.1684L22.9652 15.5272M30.8833 24.9552L19.0507 31.7868L25.2572 33.428"
                              stroke="currentColor"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              <FormattedMessage
                                id="component.nav.onekey.swap"
                                defaultMessage="闪兑 Swap"
                              />
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              <FormattedMessage
                                id="component.nav.onekey.swap.advantage"
                                defaultMessage="ETH、BSC 主网支持，闪电般秒速兑换代币。流动池稳定供应，放心兑。"
                              />
                            </p>
                          </div>
                        </a>
                        <Link
                          href="/tokens"
                          className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                        >
                          <ViewGridAddIcon className="flex-shrink-0 h-6 w-6 text-green-600" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              <FormattedMessage
                                id="component.nav.onekey.token"
                                defaultMessage="Tokens 列表"
                              />
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              <FormattedMessage
                                id="component.nav.onekey.token.advantage"
                                defaultMessage="快速添加 ETH、BSC、HECO 代币到 插件 与 APP"
                              />
                            </p>
                          </div>
                        </Link>
                        <a
                          href="//bip39.onekey.so"
                          className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <PencilIcon className="flex-shrink-0 h-6 w-6 text-green-600" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              <FormattedMessage
                                id="components__nav__products__bip39"
                                defaultMessage="助记词转换器"
                              />
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              <FormattedMessage
                                id="components__nav__products__bip39__advantage"
                                defaultMessage="将 BIP39 助记词转换为地址和私钥"
                              />
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community */}
              <div className="relative">
                <div className="group inline-block">
                  <button
                    type="button"
                    className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
                    aria-expanded="false"
                  >
                    <span>
                      <FormattedMessage
                        id="components__nav__community_link"
                        defaultMessage="社区"
                      />
                    </span>
                    <svg
                      className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500 transition ease-in-out duration-150"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="hidden group-hover:block absolute left-1/2 z-10 transform -translate-x-1/2 pt-3 px-2 w-screen max-w-md sm:px-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a
                          href="https://twitter.com/OneKeyHQ"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-600 text-white sm:h-12 sm:w-12">
                            <svg
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M34 16.01C33 16.5 32.02 16.699 31 17C29.879 15.735 28.217 15.665 26.62 16.263C25.023 16.861 23.977 18.323 24 20V21C20.755 21.083 17.865 19.605 16 17C16 17 11.818 24.433 20 28C18.128 29.247 16.261 30.088 14 30C17.308 31.803 20.913 32.423 24.034 31.517C27.614 30.477 30.556 27.794 31.685 23.775C32.0218 22.5527 32.189 21.2899 32.182 20.022C32.18 19.773 33.692 17.25 34 16.009V16.01Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              <FormattedMessage
                                id="components__nav__community_twitter"
                                defaultMessage="Twitter"
                              />
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              <FormattedMessage
                                id="components__nav__community_twitter_description"
                                defaultMessage="关注 @OneKeyHQ 以获取最新资讯"
                              />
                            </p>
                          </div>
                        </a>
                        <a
                          href="https://discord.gg/nwUJaTzjzv"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-600 text-white sm:h-12 sm:w-12">
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 71 55"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0)">
                                <path
                                  d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                                  fill="#ffffff"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0">
                                  <rect width="71" height="55" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              <FormattedMessage
                                id="components__nav__community_discord"
                                defaultMessage="Discord"
                              />
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              <FormattedMessage
                                id="components__nav__community_telegram_description"
                                defaultMessage="与 OneKey 团队进行实时沟通"
                              />
                            </p>
                          </div>
                        </a>
                        <a
                          href="https://weibo.com/yourKeysyourBitcoin"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-600 text-white sm:h-12 sm:w-12">
                            <svg
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M32.194 26.197C32.194 29.559 27.664 32.621 22.268 32.621C17.318 32.62 13 30.189 13 26.534C13 24.587 14.18 22.447 16.24 20.446C19.072 17.7 22.469 16.413 24.098 17.998C24.596 18.48 24.821 19.12 24.817 19.856C26.792 19.28 28.467 19.452 29.3 20.608C29.749 21.231 29.832 21.988 29.626 22.815C31.137 23.425 32.194 24.585 32.194 26.197ZM27.754 24.127C27.368 23.717 27.354 23.207 27.556 22.717C27.764 22.209 27.769 21.905 27.676 21.777C27.412 21.409 26.143 21.414 24.482 22.088C24.3191 22.1565 24.148 22.2035 23.973 22.228C23.629 22.274 23.302 22.229 22.99 21.963C22.571 21.604 22.516 21.108 22.668 20.647C22.883 19.977 22.848 19.571 22.705 19.432C22.519 19.252 21.928 19.241 21.046 19.575C19.977 19.98 18.748 20.799 17.632 21.881C15.925 23.54 15 25.218 15 26.534C15 28.776 18.276 30.621 22.268 30.621C26.688 30.621 30.194 28.251 30.194 26.197C30.194 25.459 29.557 24.858 28.521 24.545C28.127 24.432 27.985 24.374 27.754 24.128V24.127ZM34.808 22.51C34.7414 22.7667 34.5756 22.9865 34.347 23.1209C34.1184 23.2554 33.8457 23.2935 33.589 23.227C33.3323 23.1604 33.1125 22.9946 32.978 22.766C32.8436 22.5374 32.8054 22.2647 32.872 22.008C33.0439 21.3487 33.0446 20.6564 32.874 19.9968C32.7034 19.3371 32.3671 18.732 31.897 18.2388C31.4269 17.7456 30.8387 17.3806 30.188 17.1785C29.5373 16.9764 28.8458 16.9439 28.179 17.084C28.0498 17.1125 27.9162 17.115 27.7859 17.0915C27.6557 17.068 27.5314 17.0189 27.4203 16.947C27.3092 16.8751 27.2135 16.7818 27.1387 16.6726C27.0639 16.5635 27.0115 16.4405 26.9846 16.311C26.9576 16.1814 26.9567 16.0478 26.9818 15.9178C27.0069 15.7879 27.0575 15.6642 27.1308 15.554C27.204 15.4438 27.2984 15.3492 27.4085 15.2757C27.5185 15.2022 27.6421 15.1513 27.772 15.126C28.7717 14.9167 29.8083 14.9661 30.7836 15.2694C31.7589 15.5728 32.6406 16.1202 33.3452 16.8596C34.0498 17.5991 34.554 18.5061 34.81 19.4949C35.066 20.4837 35.0653 21.5215 34.808 22.51Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              <FormattedMessage
                                id="components__nav__community_weibo"
                                defaultMessage="微博"
                              />
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              <FormattedMessage
                                id="components__nav__community_weibo_description"
                                defaultMessage="关注 @OneKeyHQ 了解版本更新内容与教程"
                              />
                            </p>
                          </div>
                        </a>
                        <a
                          href="https://github.com/onekeyhq"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-600 text-white sm:h-12 sm:w-12">
                            <svg
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M27 33V29.5C27 28.5 27.099 28.095 26.5 27.5C29.291 27.2 32 26.134 32 21.46C31.9961 20.2561 31.517 19.1025 30.667 18.25C30.8676 17.7335 30.9638 17.1824 30.9501 16.6285C30.9363 16.0746 30.8129 15.5289 30.587 15.023C30.587 15.023 29.537 14.723 27.111 16.29C25.0711 15.7583 22.9289 15.7583 20.889 16.29C18.462 14.723 17.413 15.023 17.413 15.023C17.1871 15.5289 17.0637 16.0746 17.0499 16.6285C17.0362 17.1824 17.1324 17.7335 17.333 18.25C16.9089 18.6752 16.5729 19.1799 16.3441 19.7352C16.1154 20.2905 15.9985 20.8855 16 21.486C16 26.126 18.709 27.166 21.5 27.5C20.909 28.089 20.94 28.683 21 29.5V33M21 31C16.714 32.35 16.714 28.45 15 28L21 31Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              <FormattedMessage
                                id="components__nav__community_github"
                                defaultMessage="GitHub"
                              />
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              <FormattedMessage
                                id="components__nav__community_github_description"
                                defaultMessage="为 OneKey 贡献开源代码"
                              />
                            </p>
                          </div>
                        </a>
                        <a
                          href="https://www.reddit.com/r/OneKeyHQ"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-600 text-white sm:h-12 sm:w-12">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.625 4.5C18.4534 4.5 19.125 3.82843 19.125 3C19.125 2.17157 18.4534 1.5 17.625 1.5C16.7966 1.5 16.125 2.17157 16.125 3C16.125 3.82843 16.7966 4.5 17.625 4.5Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15.0962 16.5001C14.1385 16.9929 13.0771 17.25 12 17.25C10.923 17.25 9.86153 16.9929 8.90387 16.5001"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12 6.75L12.75 2.25L16.1423 2.77191"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5.5695 8.4261C7.28593 7.38265 9.53625 6.75 12 6.75C14.4638 6.75 16.7141 7.38265 18.4305 8.4261L18.4304 8.4263C18.627 8.15609 18.8814 7.93307 19.175 7.77344C19.4686 7.6138 19.794 7.52157 20.1277 7.50344C20.4614 7.4853 20.7949 7.54172 21.1041 7.6686C21.4133 7.79547 21.6903 7.98961 21.9151 8.23693C22.1398 8.48424 22.3067 8.77851 22.4035 9.09836C22.5003 9.41821 22.5247 9.75561 22.4748 10.0861C22.425 10.4165 22.3021 10.7317 22.1152 11.0087C21.9283 11.2858 21.6821 11.5177 21.3943 11.6877L21.3945 11.6876C21.6283 12.2633 21.749 12.8786 21.75 13.5C21.75 17.2279 17.3848 20.25 12 20.25C6.61522 20.25 2.25 17.2279 2.25 13.5C2.25103 12.8786 2.37172 12.2633 2.60547 11.6876L2.60566 11.6877C2.31791 11.5177 2.07163 11.2858 1.88472 11.0087C1.69781 10.7317 1.57495 10.4165 1.52508 10.086C1.4752 9.75557 1.49956 9.41816 1.59639 9.09829C1.69321 8.77842 1.86007 8.48414 2.08483 8.23682C2.3096 7.9895 2.58664 7.79534 2.89582 7.66847C3.205 7.54159 3.53856 7.48518 3.87226 7.50332C4.20597 7.52147 4.53145 7.61372 4.82504 7.77337C5.11864 7.93302 5.373 8.15606 5.56962 8.4263L5.5695 8.4261Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.25 13.875C9.07843 13.875 9.75 13.2034 9.75 12.375C9.75 11.5466 9.07843 10.875 8.25 10.875C7.42157 10.875 6.75 11.5466 6.75 12.375C6.75 13.2034 7.42157 13.875 8.25 13.875Z"
                                fill="white"
                              />
                              <path
                                d="M15.75 13.875C16.5784 13.875 17.25 13.2034 17.25 12.375C17.25 11.5466 16.5784 10.875 15.75 10.875C14.9216 10.875 14.25 11.5466 14.25 12.375C14.25 13.2034 14.9216 13.875 15.75 13.875Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              <FormattedMessage
                                id="components__nav__community_reddit"
                                defaultMessage="Reddit"
                              />
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              <FormattedMessage
                                id="components__nav__community_reddit_description"
                                defaultMessage="讨论交流 OneKey 的动态与使用心得"
                              />
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="p-5 bg-gray-50 sm:p-8">
                        <a
                          href={`${helpCenterHref}/requests/new`}
                          className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100 transition ease-in-out duration-150"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="flex items-center">
                            <span className="text-base font-medium text-gray-900">
                              <FormattedMessage
                                id="components__nav__community_needhelp_title"
                                defaultMessage="需要我们帮你解决问题？"
                              />
                            </span>
                          </span>
                          <p className="mt-1 flex items-center text-sm text-gray-500">
                            <FormattedMessage
                              id="components__nav__community_needhelp_description"
                              defaultMessage="点击提交工单，通过人工服务获取进一步帮助"
                            />
                            <span aria-hidden="true">→</span>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Community End */}

              {/* Security */}

              <Link
                href="/security"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                <FormattedMessage
                  id="components.nav.security"
                  defaultMessage="安全"
                />
              </Link>
              {/* Security */}

              <a
                href="https://docs.onekey.so/"
                target="_blank"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
                rel="noreferrer"
              >
                <FormattedMessage
                  id="components.nav.developer"
                  defaultMessage="开发者文档"
                />
              </a>

              <ShopLink />

              <Link
                href="/download"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                <FormattedMessage
                  id="components.nav.download"
                  defaultMessage="下载"
                />
              </Link>

              {/* Help center */}
              <div className="relative">
                <div className="group inline-block">
                  <button
                    type="button"
                    className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
                  >
                    <span>
                      <FormattedMessage
                        id="components.nav.helpCenter"
                        defaultMessage="帮助中心"
                      />
                    </span>
                    <svg
                      className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="hidden group-hover:block absolute left-1/2 z-10 transform -translate-x-1/2 pt-3 px-2 w-screen max-w-md sm:px-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a
                          href={`${helpCenterHref}/categories/360000170236`}
                          className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                          <div className="ml-4 z-auto">
                            <p className="text-base font-medium text-gray-900">
                              <FormattedMessage
                                id="components.nav.app.get.started"
                                defaultMessage="使用指南"
                              />
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              <FormattedMessage
                                id="components.nav.app.get.started.description"
                                defaultMessage="从零到一迅速上手，你可能会遇到的绝大部分问题都能在这里找到答案。"
                              />
                            </p>
                          </div>
                        </a>

                        <a
                          href={`${helpCenterHref}/articles/360002123856`}
                          className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              <FormattedMessage
                                id="components.nav.hardware.manual"
                                defaultMessage="硬件钱包手册"
                              />
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              <FormattedMessage
                                id="components.nav.hardware.manual.description"
                                defaultMessage="从激活到备份，以及相当数量的疑难杂症的药方，别担忧，这份手册就是为了帮你获得从容使用硬件的自信。"
                              />
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                        <div>
                          <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                            <FormattedMessage
                              id="components.nav.latest.announcement"
                              defaultMessage="最新公告"
                            />
                          </h3>
                          {articles.length <= 0 ? null : (
                            <ul className="mt-4 space-y-4">
                              {articles.map((e) => {
                                return (
                                  <li key={e.id} className="text-base truncate">
                                    <a
                                      href={e.htmlUrl}
                                      className="font-medium text-gray-900 hover:text-gray-700"
                                    >
                                      {e.name}
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </div>
                        <div className="mt-5 text-sm">
                          <a
                            href={helpCenterHref}
                            className="font-medium text-green-600 hover:text-green-500"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FormattedMessage
                              id="components.nav.view.all"
                              defaultMessage="查看全部"
                            />

                            <span aria-hidden="true">→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Help end */}
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 ">
              <LanguageSwitcher />

              <Link
                href="/download"
                className="hidden lg:inline-flex ml-4 whitespace-nowrap items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
              >
                <FormattedMessage
                  id="components.nav.free.download"
                  defaultMessage="免费下载"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menus */}
        <div className="block md:hidden">
          <div
            className={classnames(
              "absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right",
              visible ? "block" : "hidden"
            )}
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <Link href="/">
                    <span className="sr-only">OneKey</span>
                    <div className="h-8 w-8 sm:w-10 sm:h-10">
                      <img
                        // width={40}
                        // height={40}
                        className="h-8 w-8 sm:w-10 sm:h-10"
                        src="/img/logo_green_vector.png"
                        alt="logo"
                        // unoptimized
                      />
                    </div>
                  </Link>
                  <div
                    className="-mr-2"
                    onClick={() => {
                      setVisible(false);
                    }}
                    onKeyDown={() => setVisible(false)}
                    tabIndex={0}
                    role="menuitem"
                  >
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                    >
                      <span className="sr-only">关闭</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Link
                      href="/download"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        <FormattedMessage
                          id="component.nav.onekey.app"
                          defaultMessage="手机钱包 App"
                        />
                      </span>
                    </Link>
                    <Link
                      href="/hardware"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        <FormattedMessage
                          id="component.nav.onekey.hardware"
                          defaultMessage="硬件设备"
                        />
                      </span>
                    </Link>
                    <Link
                      href="/plugin"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        <FormattedMessage
                          id="component.nav.onekey.browserextension"
                          defaultMessage="浏览器插件"
                        />
                      </span>
                    </Link>
                    <a
                      href="https://swap.onekey.so"
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-green-600"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24Z"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17.3391 24L29.1717 17.1684L22.9652 15.5272M30.8833 24.9552L19.0507 31.7868L25.2572 33.428"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span className="ml-3 text-base font-medium text-gray-900">
                        <FormattedMessage
                          id="component.nav.onekey.swap"
                          defaultMessage="闪兑 Swap"
                        />
                      </span>
                    </a>
                    <Link
                      href="/tokens"
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <ViewGridAddIcon className="flex-shrink-0 h-6 w-6 text-green-600" />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        <FormattedMessage
                          id="component.nav.onekey.token"
                          defaultMessage="Tokens 列表"
                        />
                      </span>
                    </Link>
                    <a
                      href="//bip39.onekey.so"
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <PencilIcon className="flex-shrink-0 h-6 w-6 text-green-600" />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        <FormattedMessage
                          id="components__nav__products__bip39"
                          defaultMessage="助记词转换器"
                        />
                      </span>
                    </a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                      href="https://j.youzan.com/dZTtS2"
                      target="_blank"
                      rel="noreferrer"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        YouZan 有赞商城
                      </span>
                    </a>

                    <a
                      href="https://shop.onekey.so/products/onekey-mini-%E7%A1%AC%E4%BB%B6%E9%92%B1%E5%8C%85-%E5%8D%95%E5%8F%B0"
                      target="_blank"
                      rel="noreferrer"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <img
                        className="flex-shrink-0 h-6 w-6 text-green-600"
                        src="/img/shopify.svg"
                        alt="Shopify Logo"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Shopify 商城
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link
                    href="/download"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    <FormattedMessage
                      id="components.nav.download"
                      defaultMessage="下载"
                    />
                  </Link>
                  <Link
                    href="/security"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    <FormattedMessage
                      id="components.nav.security"
                      defaultMessage="安全"
                    />
                  </Link>
                  <a
                    href={helpCenterHref}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    <FormattedMessage
                      id="components.nav.helpCenter"
                      defaultMessage="帮助中心"
                    />
                  </a>
                  <a
                    href={`${helpCenterHref}/categories/360000170236`}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    <FormattedMessage
                      id="components.nav.app.get.started"
                      defaultMessage="使用指南"
                    />
                  </a>
                  <a
                    href={`${helpCenterHref}/articles/360002123856`}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    <FormattedMessage
                      id="components.nav.hardware.manual"
                      defaultMessage="硬件钱包手册"
                    />
                  </a>
                  <a
                    href={helpCenterHref}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    <FormattedMessage
                      id="components.nav.latest.announcement"
                      defaultMessage="最新公告"
                    />
                  </a>
                </div>
                <div>
                  <Link
                    href="/download"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
                  >
                    <FormattedMessage
                      id="components.nav.free.download"
                      defaultMessage="免费下载"
                    />
                  </Link>

                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    <FormattedMessage
                      id="components.nav.have.a.problem"
                      defaultMessage="遇到问题？<a>提交工单</a>"
                      values={{
                        // eslint-disable-next-line react/display-name
                        a: (text: string) => (
                          <a
                            href={`${helpCenterHref}/requests/new`}
                            className="text-green-600 hover:text-green-500"
                          >
                            {text}
                          </a>
                        ),
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
