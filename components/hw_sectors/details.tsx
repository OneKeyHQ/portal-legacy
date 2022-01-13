import { FormattedMessage } from "react-intl";

export default function Details() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold text-green-600 uppercase tracking-wide">
            <FormattedMessage
              defaultMessage="强大功能，只需 OneKey"
              id="pages.hw.details.subtitle"
            />
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 capitalize">
            <FormattedMessage
              defaultMessage="全平台支持*"
              id="pages.hw.details.title"
            />
          </p>
          <p className="mt-4 text-lg text-gray-500">
            <FormattedMessage
              defaultMessage="部分官方暂未支持的平台，亦可通过第三方客户端使用。"
              id="pages.hw.details.desc"
            />
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            <div className="flex">
              {/* Heroicon name: check */}
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
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  <FormattedMessage
                    defaultMessage="支持上千种加密货币"
                    id="pages.hw.details.title_coin"
                  />
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  <FormattedMessage
                    defaultMessage="包括但不限于 BTC、ETH、DOT、USDT等（官方 App 暂只支持 BTC，其他币种陆续添加中）。"
                    id="pages.hw.details.desc_coin"
                  />
                </dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: check */}
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
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  <FormattedMessage
                    defaultMessage="支持 iOS 系统"
                    id="pages.hw.details.title_ios"
                  />
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  <FormattedMessage
                    defaultMessage="iOS 11.0 及更高版本"
                    id="pages.hw.details.desc_ios"
                  />
                </dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: check */}
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
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  <FormattedMessage
                    defaultMessage="支持 Android 系统"
                    id="pages.hw.details.title_android"
                  />
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  <FormattedMessage
                    defaultMessage="Android 8.0 或更高版本"
                    id="pages.hw.details.desc_android"
                  />
                </dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: check */}
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
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  <FormattedMessage
                    defaultMessage="支持浏览器"
                    id="pages.hw.details.title_browser"
                  />
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  <FormattedMessage
                    defaultMessage="Chrome、Firefox、Edge 等主流浏览器，畅玩 DeFi。"
                    id="pages.hw.details.desc_browser"
                  />
                </dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: check */}
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
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  <FormattedMessage
                    defaultMessage="支持 macOS 系统"
                    id="pages.hw.details.title_macos"
                  />
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  <FormattedMessage
                    defaultMessage="macOS 10.9 或更高版本"
                    id="pages.hw.details.desc_macos"
                  />
                </dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: check */}
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
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  <FormattedMessage
                    defaultMessage="支持 Windows 系统"
                    id="pages.hw.details.title_windows"
                  />
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  <FormattedMessage
                    defaultMessage="Windows 7 或更高版本"
                    id="pages.hw.details.desc_windows"
                  />
                </dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: check */}
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
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  <FormattedMessage
                    defaultMessage="支持 Linux 系统"
                    id="pages.hw.details.title_linux"
                  />
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  <FormattedMessage
                    defaultMessage="Ubuntu 或其他主流 Linux 版本"
                    id="pages.hw.details.desc_linux"
                  />
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
