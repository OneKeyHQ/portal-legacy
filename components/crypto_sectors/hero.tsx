import { FormattedMessage } from "react-intl";

export default function Hero() {
  return (
    <div className="bg-gray-50">
      <div className="relative overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6" />
          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block my-4">
                  <FormattedMessage
                    defaultMessage="OneKey 加密资产"
                    id="pages.crypto_sectors.hero.title"
                  />
                </span>
                <span className="block text-green-600">
                  <FormattedMessage
                    defaultMessage="支持列表"
                    id="pages.crypto_sectors.hero.subtitle"
                  />
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                <FormattedMessage
                  defaultMessage="如果找不到你想要的币种，欢迎与 hi@onekey.so 沟通上架。"
                  id="pages.crypto_sectors.hero.contact"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
