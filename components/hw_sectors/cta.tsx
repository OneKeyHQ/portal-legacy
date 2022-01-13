import { FormattedMessage } from "react-intl";

export default function CTA() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl flex-1">
          <span className="block">
            <FormattedMessage
              defaultMessage="准备好了？"
              id="pages.hw_sectors.cta.title1"
            />
          </span>
          <span className="block bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
            <FormattedMessage
              defaultMessage="用硬件钱包，轻松保护你的加密资产"
              id="pages.hw_sectors.cta.title2"
            />
          </span>
        </h2>
        <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5 md:flex-1 sm:justify-end">
          <a
            href="https://shop.onekey.so/products/onekey-mini-hardware-wallet"
            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r bg-green-600 hover:bg-green-700"
          >
            <FormattedMessage
              defaultMessage="现在购买"
              id="pages.hw_sectors.cta.buy"
            />
          </a>
          <a
            href="https://help.onekey.so/hc/articles/360002123856"
            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-800 bg-green-50 hover:bg-green-100"
          >
            <FormattedMessage
              defaultMessage="上手教程"
              id="pages.hw_sectors.cta.tutor"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
