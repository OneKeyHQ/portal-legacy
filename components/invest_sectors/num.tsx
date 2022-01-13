import { FormattedMessage } from "react-intl";

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

export default function Num() {
  return (
    <div className="bg-gray-50 pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <FormattedMessage
              defaultMessage="我们的研发效率快、稳、准"
              id="components.invest_sectors.num.title"
            />
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            <FormattedMessage
              defaultMessage="团队遵守敏捷开发（Agile）模式，且介于极限编程（Extreme Programming）和Scrum 之间。"
              id="components.invest_sectors.num.sub_title"
            />
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col justify-between border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-base leading-6 font-medium text-gray-500">
                    <FormattedMessage
                      defaultMessage="精英工程师团队"
                      id="components.invest_sectors.num.team"
                    />
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-green-600">
                    <FormattedMessage
                      defaultMessage="≤ 50人"
                      id="components.invest_sectors.num.team_sub"
                    />
                  </dd>
                </div>
                <div className="flex flex-col justify-between border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-base leading-6 font-medium text-gray-500">
                    <FormattedMessage
                      defaultMessage="版本迭代周期（全平台）"
                      id="components.invest_sectors.num.version"
                    />
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-green-600">
                    <FormattedMessage
                      defaultMessage="7天"
                      id="components.invest_sectors.num.version_sub"
                    />
                  </dd>
                </div>
                <div className="flex flex-col justify-between border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-base leading-6 font-medium text-gray-500">
                    <FormattedMessage
                      defaultMessage="硬件钱包销量增长率（2021）"
                      id="components.invest_sectors.num.rate"
                    />
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-green-600">
                    <FormattedMessage
                      defaultMessage="No.1"
                      id="components.invest_sectors.num.rate_sub"
                    />
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto bg-white py-8">
        <p className="flex justify-center text-xl text-gray-700 font-bold py-4">
          <TickIcon />
          <FormattedMessage
            defaultMessage="我们把安全放在首位。"
            id="components.invest_sectors.num.secure"
          />
        </p>
        <p className="flex justify-center text-xl text-gray-700 font-bold py-4">
          <TickIcon />
          <FormattedMessage
            defaultMessage="我们喜欢直截了当，不喜欢拐弯抹角，团队内部也是尽可能的透明。"
            id="components.invest_sectors.num.straight"
          />
        </p>
        <p className="flex justify-center text-xl text-gray-700 font-bold py-4">
          <TickIcon />
          <FormattedMessage
            defaultMessage="我们把自造血和盈利作为基本。"
            id="components.invest_sectors.num.earn"
          />
        </p>
        <p className="flex justify-center text-xl text-gray-700 font-bold py-4">
          <TickIcon />
          <FormattedMessage
            defaultMessage="我们认真做产品。"
            id="components.invest_sectors.num.prod"
          />
        </p>
        <p className="flex justify-center text-xl text-gray-700 font-bold py-4">
          <TickIcon />
          <FormattedMessage
            defaultMessage="我们从不放慢脚步。"
            id="components.invest_sectors.num.ship"
          />
        </p>
      </div>
    </div>
  );
}
