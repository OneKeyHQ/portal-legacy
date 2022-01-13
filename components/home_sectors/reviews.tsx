import Image from "next/image";
import { FormattedMessage } from "react-intl";

export default function Review() {
  return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            <FormattedMessage
              id="pages.home.reviews.opinion"
              defaultMessage="用户的声音"
            />
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            <FormattedMessage
              id="pages.home.reviews.opinion.title"
              defaultMessage="听听他们如何评价我们的钱包"
            />
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          <div className="grid grid-rows-7">
            <div>
              <p className="inline-block">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  <FormattedMessage
                    id="pages.home.reviews.item1.label"
                    defaultMessage="DeFi"
                  />
                </span>
              </p>
            </div>
            <div className="block mt-4 row-span-5">
              <p className="text-xl font-semibold text-gray-900">
                <FormattedMessage
                  id="pages.home.reviews.item1.title"
                  defaultMessage="DeFi 挖矿用 OneKey"
                />
              </p>
              <p className="mt-3 text-base text-gray-500">
                <FormattedMessage
                  id="pages.home.reviews.item1.description"
                  defaultMessage="区块链金融正在席卷而来，链上操作和交互日益频繁，作为区块链人，非常需要一个安全的盾牌和进攻的利器，我在整个DeFi 进程中选择的是 OneKey。"
                />
              </p>
            </div>
            <div className="flex items-center mt-3">
              <div className="flex-shrink-0">
                <div>
                  <span className="sr-only">
                    <FormattedMessage
                      id="pages.home.reviews.item1.username"
                      defaultMessage="超级君"
                    />
                  </span>
                  <img
                    // height={40}
                    // width={40}
                    className="rounded-full w-10 h-10"
                    src="/img/avatar/cj.jpg"
                    alt="Avatar of reviewer"
                  />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  <FormattedMessage
                    id="pages.home.reviews.item1.username"
                    defaultMessage="超级君"
                  />
                </p>
                <span className="flex space-x-1 text-sm text-gray-500">
                  <FormattedMessage
                    id="pages.home.reviews.item1.professional.title"
                    defaultMessage="资深区块链专家·去中心化金融践行者"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-7">
            <div>
              <p className="inline-block">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-600">
                  <FormattedMessage
                    id="pages.home.reviews.item2.label"
                    defaultMessage="比特币"
                  />
                </span>
              </p>
            </div>
            <div className="block mt-4 row-span-5">
              <p className="text-xl font-semibold text-gray-900">
                <FormattedMessage
                  id="pages.home.reviews.item2.title"
                  defaultMessage="囤币用 OneKey"
                />
              </p>
              <p className="mt-3 text-base text-gray-500">
                <FormattedMessage
                  id="pages.home.reviews.item2.description"
                  defaultMessage="OneKey出自一群深耕比特币多年的专业人士之手，在安全性和操作体验上都做得非常出色。相比之下，它优雅的外观已经不值一提了。"
                />
              </p>
            </div>
            <div className="flex items-center mt-4">
              <div className="flex-shrink-0">
                <div>
                  <span className="sr-only">
                    <FormattedMessage
                      id="pages.home.reviews.item2.username"
                      defaultMessage="熊越"
                    />
                  </span>
                  <img
                    // height={40}
                    // width={40}
                    className="rounded-full w-10 h-10"
                    src="/img/avatar/xiongyue.jpg"
                    alt="Avatar of reviewer"
                  />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  <FormattedMessage
                    id="pages.home.reviews.item2.username"
                    defaultMessage="熊越"
                  />
                </p>
                <span className="flex space-x-1 text-sm text-gray-500">
                  <FormattedMessage
                    id="pages.home.reviews.item2.professional.title"
                    defaultMessage="早期比特币布道者"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-7">
            <div>
              <div className="inline-block">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <FormattedMessage
                    id="pages.home.reviews.item3.label"
                    defaultMessage="Holder"
                  />
                </span>
              </div>
            </div>
            <div className="block mt-4 row-span-5">
              <p className="text-xl font-semibold text-gray-900">
                <FormattedMessage
                  id="pages.home.reviews.item3.title"
                  defaultMessage="从 Bitcoin Qt 到 OneKey"
                />
              </p>
              <div className="mt-3 text-base text-gray-500">
                <FormattedMessage
                  id="pages.home.reviews.item3.description"
                  defaultMessage="<p>囤币多年，涨跌看淡。</p><p> 从使用 Bitcoin Qt，到入手 OneKey，靠谱的人打磨出靠谱的产品，我要再囤500年。 </p>"
                  values={{ p: (text: string) => <p>{text}</p> }}
                />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <div className="flex-shrink-0">
                <div>
                  <span className="sr-only">
                    <FormattedMessage
                      id="pages.home.reviews.item3.username"
                      defaultMessage="朱靖"
                    />
                  </span>
                  <img
                    // height={40}
                    // width={40}
                    className="rounded-full w-10 h-10"
                    src="/img/avatar/zj.jpg"
                    alt="Avatar of reviewer"
                  />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  <FormattedMessage
                    id="pages.home.reviews.item3.username"
                    defaultMessage="朱靖"
                  />
                </p>
                <span className="flex space-x-1 text-sm text-gray-500">
                  <FormattedMessage
                    id="pages.home.reviews.item3.professional.title"
                    defaultMessage="资深比特币玩家"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
