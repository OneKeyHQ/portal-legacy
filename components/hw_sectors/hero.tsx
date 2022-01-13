import { FormattedMessage } from "react-intl";

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="hw-hero relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="/img/hw_hero.png"
              alt=""
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl capitalize">
              <span className="block text-white">
                <FormattedMessage
                  defaultMessage="OneKey 硬件钱包"
                  id="pages.hw_sectors.hero.prod"
                />
              </span>
              <br />
              <span className="block text-green-200">
                <FormattedMessage
                  defaultMessage="守护用“芯”，操作放心"
                  id="pages.hw_sectors.hero.title"
                />
              </span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-green-200 sm:max-w-3xl">
              <FormattedMessage
                defaultMessage="内置安全芯片，确保私钥全程安全。"
                id="pages.hw_sectors.hero.desc"
              />
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <a
                  href="https://shop.onekey.so/products/onekey-mini-hardware-wallet"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-700 bg-white hover:bg-green-50 sm:px-8"
                >
                  <FormattedMessage
                    defaultMessage=" 购买"
                    id="pages.hw_sectors.hero.buy"
                  />
                </a>
                <a
                  href="https://help.onekey.so/hc/zh-cn/articles/360002123856"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                >
                  <FormattedMessage
                    defaultMessage="上手教程"
                    id="pages.hw_sectors.hero.tutor"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
