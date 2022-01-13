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
                    defaultMessage="我们是一家用心做产品的"
                    id="pages.invest_sectors.hero.title"
                  />
                </span>
                <span className="block bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent pb-2">
                  <FormattedMessage
                    defaultMessage="加密货币安全公司。"
                    id="pages.invest_sectors.hero.subtitle"
                  />
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-lg md:max-w-base">
                <FormattedMessage
                  defaultMessage="由一群对「好好做产品」有执念的工程师、产品设计师、客户支持凝聚而成，"
                  id="pages.invest_sectors.hero.contact"
                />
                <span className="bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent">
                  {" "}
                  <FormattedMessage
                    defaultMessage="我们喜欢实现「不现实」"
                    id="components.invest_sectors.hero.span"
                  />
                </span>
                。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
