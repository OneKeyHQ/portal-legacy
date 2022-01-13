import Image from "next/image";
import { FormattedMessage } from "react-intl";

export default function Hero() {
  return (
    <div className="bg-gray-50 pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto justify-center text-center">
          <div className="mx-auto content-center mt-8 mb-12">
            <img
              className="mx-auto w-80"
              src="/img/safe_hero.png"
              alt="security_hero_img"
            />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <FormattedMessage
              defaultMessage="安全，软硬兼备"
              id="components.security_sectors.hero.title"
            />
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            <FormattedMessage
              defaultMessage="更多人选择的硬件钱包"
              id="components.security_sectors.hero.sub_title"
            />
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-md leading-6 font-medium text-gray-500">
                    <FormattedMessage
                      defaultMessage="软、硬件代码公开验证"
                      id="components.security_sectors.tab.sub_title1"
                    />
                  </dt>
                  <dd className="order-1 text-3xl font-extrabold text-green-600">
                    <FormattedMessage
                      defaultMessage="1. 开源"
                      id="components.security_sectors.tab.title1"
                    />
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-md leading-6 font-medium text-gray-500">
                    <FormattedMessage
                      defaultMessage="无法暴力破解"
                      id="components.security_sectors.tab.sub_title2"
                    />
                  </dt>
                  <dd className="order-1 text-3xl font-extrabold text-green-600">
                    <FormattedMessage
                      defaultMessage="2. 安全芯片"
                      id="components.security_sectors.tab.title2"
                    />
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-md leading-6 font-medium text-gray-500">
                    <FormattedMessage
                      defaultMessage="隔绝电脑病毒"
                      id="components.security_sectors.tab.sub_title3"
                    />
                  </dt>
                  <dd className="order-1 text-3xl font-extrabold text-green-600">
                    <FormattedMessage
                      defaultMessage="3. 私钥不触网"
                      id="components.security_sectors.tab.title3"
                    />
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
