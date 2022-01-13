import Image from "next/image";
import { ReactNode } from "react";
import { FormattedMessage } from "react-intl";

const closeSVGNode = (
  <svg
    className="flex-shrink-0 h-6 w-6 text-red-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const checkSVGNode = (
  <svg
    className="flex-shrink-0 h-6 w-6 text-green-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
);

const renderRow = ({ link, name, symbol, iconOrUrl, supports }: Currency) => {
  const iconNode =
    typeof iconOrUrl === "string" ? (
      <img
        className="w-10 h-10 rounded-full flex items-center justify-center"
        src={iconOrUrl}
        alt={`${iconOrUrl} icon`}
      />
    ) : (
      iconOrUrl
    );

  const supportDevicesRow = supports.map((isSupport, index) => (
    <td className="px-6 py-4 whitespace-nowrap" key={index}>
      {isSupport ? checkSVGNode : closeSVGNode}
    </td>
  ));

  return (
    <tr key={symbol}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">{iconNode}</div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{symbol}</div>
            <div className="text-sm text-gray-500">{name}</div>
          </div>
        </div>
      </td>
      {supportDevicesRow}
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a
          href={link}
          className="text-green-600 hover:text-green-900"
          target="_blank"
          rel="noreferrer"
        >
          <FormattedMessage
            defaultMessage="链接 →"
            id="pages.crypto_sectors.table.link"
          />
        </a>
      </td>
    </tr>
  );
};

// Mobile | HW | Ext | Desktop
export type Support = [boolean, boolean, boolean, boolean];
export interface Currency {
  link: string;
  symbol: string;
  // The i18n-ed name of the token
  name: ReactNode;
  // Url string or Node
  iconOrUrl: ReactNode;
  supports: Support;
}

export default function Table({ currencies }: { currencies: Currency[] }) {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col">
      <div className="my-20 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    <FormattedMessage
                      defaultMessage="币种"
                      id="pages.crypto_sectors.table.coin"
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    <FormattedMessage
                      defaultMessage="移动 App"
                      id="pages.crypto_sectors.table.app"
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    <FormattedMessage
                      defaultMessage="硬件钱包"
                      id="pages.crypto_sectors.table.hw"
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    <FormattedMessage
                      defaultMessage="浏览器插件"
                      id="pages.crypto_sectors.table.add_on"
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    <span>
                      <FormattedMessage
                        defaultMessage="桌面客户端"
                        id="pages.crypto_sectors.table.desktop"
                      />
                    </span>
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">
                      <FormattedMessage
                        defaultMessage="官网网站"
                        id="pages.crypto_sectors.table.official_web"
                      />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currencies.map(renderRow)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
