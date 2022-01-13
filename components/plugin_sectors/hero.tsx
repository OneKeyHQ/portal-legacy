/* eslint-disable @onekeyhq/literal-blacklist/literal-blacklist */
import { FormattedMessage } from "react-intl";
import { useLocale } from "../universal/IntlProvider";

export default function Hero() {
  const { locale } = useLocale();

  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 h-full w-full" aria-hidden="true" />
        <div className="relative pt-6 pb-16 sm:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6" />
          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block capitalize">
                  <FormattedMessage
                    defaultMessage="更安全地接入区块链"
                    id="pages.plugin_sectors.hero.title"
                  />
                </span>
                <span className="my-4 block text-green-600 capitalize">
                  <FormattedMessage
                    defaultMessage="干净、好用的浏览器插件"
                    id="pages.plugin_sectors.hero.subtitle"
                  />
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                <FormattedMessage
                  defaultMessage="全开源，MetaMask 的完美（Almost）替代。"
                  id="pages.plugin_sectors.hero.desc"
                />
              </p>
            </div>
            <div className="max-w-7xl mt-6 mx-auto flex justify-center">
              <div className="flex px-4 py-2 rounded-lg text-sm text-center font-semibold bg-yellow-100 text-yellow-800">
                <FormattedMessage
                  id="pages__download__edge__warnning"
                  defaultMessage="提示：Edge 暂时不支持硬件钱包"
                />
              </div>
            </div>
            <div className="mt-6 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-around">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
                <div className="mx-12">
                  <div className="flex justify-center">
                    <img
                      // width={128}
                      // height={128}
                      // layout="fixed"
                      className="w-32 h-32"
                      src="/img/plugin_chrome.png"
                      alt="OneKey for Chrome"
                    />
                  </div>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href="https://chrome.google.com/webstore/detail/onekey/infeboajgfhgbjpjbeppbkgnabfdkdaf"
                    className="flex items-center justify-center my-4 px-1 py-1 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 sm:px-8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FormattedMessage
                      defaultMessage="下载"
                      id="pages.plugin_sectors.hero.dl1"
                    />
                  </a>
                </div>
                <div className="mx-12">
                  <div className="flex justify-center">
                    <img
                      // width={128}
                      // height={128}
                      // layout="fixed"
                      className="w-32 h-32"
                      src="/img/plugin_firefox.png"
                      alt="OneKey for Firefox"
                    />
                  </div>
                  <a
                    href={`https://addons.mozilla.org/${locale}/firefox/addon/onekey-wallet/`}
                    className="flex items-center justify-center my-4 px-1 py-1 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 sm:px-8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FormattedMessage
                      defaultMessage="下载"
                      id="pages.plugin_sectors.hero.dl2"
                    />
                  </a>
                </div>
                <div className="mx-12">
                  <div className="flex justify-center">
                    <img
                      // width={128}
                      // height={128}
                      // layout="fixed"
                      className="w-32 h-32"
                      src="/img/plugin_edge.png"
                      alt="OneKey for Edge"
                    />
                  </div>
                  <a
                    href={`https://microsoftedge.microsoft.com/addons/detail/onekey/leimfdljadbnnecmkpfmgcdmiglejnnp?hl=${locale}`}
                    className="flex items-center justify-center my-4 px-1 py-1 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 sm:px-8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FormattedMessage
                      defaultMessage="下载"
                      id="pages.plugin_sectors.hero.dl2"
                    />
                  </a>
                </div>
                {/* Comment it until Brave connection is available */}
                {/* <div className="mx-12">
                  <div className="flex justify-center">
                    <Image
                      width={128}
                      height={128}
                      layout="fixed"
                      src="/img/plugin_brave.png"
                      alt="OneKey for Brave"
                    />
                  </div>
                  <a
                    href="https://chrome.google.com/webstore/detail/onekey/infeboajgfhgbjpjbeppbkgnabfdkdaf"
                    className="flex items-center justify-center my-4 px-1 py-1 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 sm:px-8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FormattedMessage
                      defaultMessage="下载"
                      id="pages.plugin_sectors.hero.dl1"
                    />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="flex-1 w-full bg-gray-800" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="w-full relative">
              <img
                // width={1232}
                // height={744.52}
                className="rounded-lg shadow-lg relative w-full"
                src="/img/plugin_hero_bg.png"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">
            <FormattedMessage
              defaultMessage="守望 DeFi 无限未来"
              id="components.plugin_sectors.hero.text_line"
            />
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                // width={96}
                // height={96}
                className="w-24 h-24"
                src="/img/uni_logo.png"
                alt="Uniswap"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="w-24 h-24" src="/img/yfi_logo.png" alt="YFI" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                // width={96}
                // height={96}
                className="w-24 h-24"
                src="/img/comp_logo.png"
                alt="Compound"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img className="w-24 h-24" src="/img/crv_logo.png" alt="Curve" />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <img className="w-24 h-24" src="/img/dai_logo.png" alt="Dai" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
