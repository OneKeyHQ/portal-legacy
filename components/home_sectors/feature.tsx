import { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import { toHelpLink } from "../../utils/utils";
import { useLocale } from "../universal/IntlProvider";

function TickIcon() {
  return (
    <svg
      className="flex-shrink-0 h-6 w-6 text-green-500"
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
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function Feature() {
  const { locale } = useLocale();

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            <FormattedMessage
              id="pages.home.feature.title"
              defaultMessage="真开源，才敢用。"
            />
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            <FormattedMessage
              id="pages.home.feature.desc"
              defaultMessage="配料表成分干净、清楚是产品的美德"
            />
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          <div className="flex">
            <TickIcon />
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                <FormattedMessage
                  id="pages.home.feature.item1.title"
                  defaultMessage="软件代码开源"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <FormattedMessage
                  id="pages.home.feature.item1.desc"
                  defaultMessage="如果一个钱包不开源它的代码，你很可能担心它藏有后门，危害你的资产安全。我们的代码完全公开托管在 <a>Github</a>，任何人都可以检查或使用我们的代码。"
                  values={{
                    a: (text: ReactNode) => (
                      <a
                        className="text-green-600"
                        target="_blank"
                        href="https://github.com/OneKeyHQ/OneKey-Wallet"
                        rel="noreferrer"
                      >
                        {text}
                      </a>
                    ),
                  }}
                />
              </dd>
            </div>
          </div>
          <div className="flex">
            <TickIcon />
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                <FormattedMessage
                  id="pages.home.feature.item2.title"
                  defaultMessage="固件代码开源"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <FormattedMessage
                  id="pages.home.feature.item2.desc"
                  defaultMessage=" 我们同时使用了安全芯片（SE）和通用芯片来制作硬件钱包。同样的，从 3D 源文件到 PCB 电路板，以及最重要的，固件源代码，都可以在我们的 <a>代码仓库</a> 中找到。"
                  values={{
                    a: (text: any) => (
                      <a
                        className="text-green-600"
                        target="_blank"
                        href="https://github.com/OneKeyHQ"
                        rel="noreferrer"
                      >
                        {text}
                      </a>
                    ),
                  }}
                />
              </dd>
            </div>
          </div>
          <div className="flex">
            <TickIcon />
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                <FormattedMessage
                  id="pages.home.feature.item3.title"
                  defaultMessage="私钥自己掌控"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <FormattedMessage
                  id="pages.home.feature.item3.desc"
                  defaultMessage=" 通过 OneKey 创建的钱包助记词、Seed 均加密存储在本地，只有您能解密信息，我们的服务器不会、也无法存储用户的任何私密数据。不再有中心化机构的介入，加密资产完全由您自己掌控。"
                />
              </dd>
            </div>
          </div>
          <div className="flex">
            <TickIcon />
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                <FormattedMessage
                  id="pages.home.feature.item4.title"
                  defaultMessage="倾听社区的意见"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <FormattedMessage
                  id="pages.home.feature.item4.desc"
                  defaultMessage=" 我们选择和用户一起成长，而不是资本。通过各类渠道对我们的建议，都会被听到。受制于人手，并不是所有的需求都能被满足，但我们会尽可能给出当下的最优解。"
                />
              </dd>
            </div>
          </div>
          <div className="flex">
            <TickIcon />
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                <FormattedMessage
                  id="pages.home.feature.item5.title"
                  defaultMessage="贴心的客户支持"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <FormattedMessage
                  id="pages.home.feature.item5.desc"
                  defaultMessage=" 我们的客服7/24响应，推荐你使用 <a>工单</a> 来提交问题。它们中的绝大多数都能在24小时内得到妥善解决。"
                  values={{
                    a: (text: any) => (
                      <a
                        className="text-green-600"
                        target="_blank"
                        href={toHelpLink({ path: "requests/new", locale })}
                        rel="noreferrer"
                      >
                        {text}
                      </a>
                    ),
                  }}
                />
              </dd>
            </div>
          </div>
          <div className="flex">
            <TickIcon />
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                <FormattedMessage
                  id="pages.home.feature.item6.title"
                  defaultMessage="隐私是头等大事"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <FormattedMessage
                  id="pages.home.feature.item6.desc"
                  defaultMessage=" 你可以在 App 中自行更改节点、服务器、区块浏览器，偏好设置皆存在本地。OneKey 的服务器不会存储用户的任何私密数据，也不觊觎用户的个人信息。"
                />
              </dd>
            </div>
          </div>
          <div className="flex">
            <TickIcon />
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                <FormattedMessage
                  id="pages.home.feature.item7.title"
                  defaultMessage="小白也能轻易上手"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <FormattedMessage
                  id="pages.home.feature.item7.desc"
                  defaultMessage="我们努力降低小白上手的门槛。如果你甚至可以放心的把它推荐给你的长辈，那是对我们工作最大的褒奖。"
                />
              </dd>
            </div>
          </div>
          <div className="flex">
            <TickIcon />
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                <FormattedMessage
                  id="pages.home.feature.item8.title"
                  defaultMessage="体面地赚钱"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <FormattedMessage
                  id="pages.home.feature.item8.desc"
                  defaultMessage="我们提供优秀的产品，创造一流的体验，提供完善的服务，敲定厚道的价格，赚取合理的利润。就是这么简单。"
                />
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
}
