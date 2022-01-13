/* eslint-disable @onekeyhq/literal-blacklist/literal-blacklist */
import { FormattedMessage } from "react-intl";
import { toHelpLink } from "../../utils/utils";
import { useLocale } from "../universal/IntlProvider";

export default function Hardware() {
  const { locale } = useLocale();

  return (
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              <FormattedMessage
                id="pages.home.hardware.title"
                defaultMessage="给你的加密资产套上金钟罩"
              />
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              <FormattedMessage
                id="pages.home.hardware.desc"
                defaultMessage="从普通用户到专业投资者，一个称心得手的硬件钱包是妥妥的防守利器。"
              />
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  <FormattedMessage
                    id="pages.home.hardware.onekey.title"
                    defaultMessage="OneKey 硬件钱包"
                  />
                </h3>
                <p className="mt-6 text-base text-gray-500">
                  <FormattedMessage
                    id="pages.home.hardware.onekey.desc"
                    defaultMessage="全开源软硬件架构，对小白用户友好。完美适配 MetaMask 等钱包，DeFi 挖矿收菜两相宜。"
                  />
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-green-600">
                      <FormattedMessage
                        id="pages.home.hardware.onekey.adv"
                        defaultMessage="优点"
                      />
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-green-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-gray-700">
                        <FormattedMessage
                          id="pages.home.hardware.onekey.adv.items1"
                          defaultMessage="认证安全芯片 CC EAL 6+"
                        />
                      </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-green-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-gray-700">
                        <FormattedMessage
                          id="pages.home.hardware.onekey.adv.items2"
                          defaultMessage="完整的线上支持手册和教程"
                        />
                      </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-green-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-gray-700">
                        <FormattedMessage
                          id="pages.home.hardware.onekey.adv.items3"
                          defaultMessage="全球免费寄送"
                        />
                      </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-green-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-gray-700">
                        <FormattedMessage
                          id="pages.home.hardware.onekey.adv.items4"
                          defaultMessage="无二次销售，退回商品全部销毁处理"
                        />
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-medium text-green-900">
                  <FormattedMessage
                    id="pages.home.hardware.onekey.secret.protection"
                    defaultMessage="我们定期销毁用户订单邮件等隐私信息"
                  />
                </p>
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                  <FormattedMessage
                    id="pages.home.hardware.onekey.price"
                    defaultMessage="¥499<span>元</span>"
                    values={{
                      span: (text: string) => (
                        <span className="ml-3 text-xl font-medium text-gray-500">
                          {text}
                        </span>
                      ),
                    }}
                  />
                </div>
                <p className="mt-4 text-sm">
                  <a
                    href={toHelpLink({ path: "articles/360002003315", locale })}
                    className="font-medium text-gray-500 underline"
                  >
                    <FormattedMessage
                      id="pages.home.hardware.onekey.know.our.privacy.policy"
                      defaultMessage="了解我们的隐私政策"
                    />
                  </a>
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="https://shop.onekey.so/products/onekey-mini-hardware-wallet"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                    >
                      <FormattedMessage
                        id="pages.home.hardware.onekey.buy"
                        defaultMessage="购买"
                      />
                    </a>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <div className="font-medium text-green-900 cursor-not-allowed">
                    <FormattedMessage
                      id="pages.home.hardware.onekey.welfare"
                      defaultMessage="早鸟或有福利<span>(待定)</span>"
                      values={{
                        span: (text: any) => (
                          <span className="font-normal text-gray-500">
                            {text}
                          </span>
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
