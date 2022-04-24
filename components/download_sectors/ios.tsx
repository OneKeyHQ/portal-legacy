import { QuestionMarkCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
// import {  } from '@heroicons/react'

function Tick() {
  return (
    <svg
      className="h-6 w-6 text-green-500"
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

export default function Ios(props: { version?: string }) {
  return (
    <div className="bg-gray-700">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-lg leading-6 font-semibold text-gray-200 uppercase tracking-wider">
              <FormattedMessage
                id="pages.download.preference.choice.provided"
                defaultMessage="我们针对不同用户偏好提供以下选择"
              />
            </h2>
            <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              <FormattedMessage
                id="pages.download.preference.choice.needed"
                defaultMessage="选择你需要的 { type } 版本"
                values={{ type: "iOS" }}
              />
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-700" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto space-y-4 max-w-4xl flex justify-center">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden max-w-xl">
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div className="mx-auto my-5 h-20 w-20 lg:w-24 lg:h-24">
                    <img
                      className="h-20 w-20 lg:w-24 lg:h-24 rounded-full"
                      src="/img/logo_green_vector.png"
                      alt=""
                    />
                  </div>

                  <div className="flex items-center justify-center">
                    <h3
                      className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                      id="tier-standard"
                    >
                      <span>
                        <FormattedMessage id="pages.download.ios.appstore.version" />
                      </span>
                      <span className="ml-2">{props.version || "1.0.1"}</span>
                    </h3>
                  </div>
                  <p className="flex items-center justify-center mt-5 text-lg text-gray-500">
                    <FormattedMessage
                      id="pages.download.ios.appstore.scope"
                      defaultMessage="Appstore 版适合海外用户"
                    />
                  </p>
                </div>
                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <Tick />
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <FormattedMessage
                          id="pages.download.ios.appstore.features1"
                          defaultMessage="功能相对稳定"
                        />
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <Tick />
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <FormattedMessage
                          id="pages.download.ios.appstore.features2"
                          defaultMessage="Appstore 自动更新，不用担心失效"
                        />
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-yellow-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <FormattedMessage
                          id="pages.download.ios.appstore.features3"
                          defaultMessage="Apple 审核政策较严格，部分功能无法上架"
                        />
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <Tick />
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <FormattedMessage
                          id="pages.download.ios.appstore.features4"
                          defaultMessage="适合有非中国大陆区 Apple ID 的用户（香港、台湾亦可）"
                        />
                      </p>
                    </li>
                    <li className="flex items-center">
                      <div className="flex-shrink-0">
                        <QuestionMarkCircleIcon className="h-6 w-6 text-yellow-500" />
                      </div>
                      <a
                        href="https://help.onekey.so/hc/zh-cn/articles/4404262744591"
                        target="_blank"
                        className="ml-3 text-base text-green-700 hover:underline"
                        rel="noreferrer"
                      >
                        <FormattedMessage
                          id="download__help__register_account"
                          defaultMessage="如何申请海外 Apple ID"
                        />
                      </a>
                    </li>
                    <li className="flex items-center">
                      <div className="flex-shrink-0">
                        <QuestionMarkCircleIcon className="h-6 w-6 text-yellow-500" />
                      </div>
                      <a
                        href="https://help.onekey.so/hc/zh-cn/articles/4404258872335"
                        target="_blank"
                        className="ml-3 text-base text-green-700 hover:underline"
                        rel="noreferrer"
                      >
                        <FormattedMessage
                          id="download__help__activate_discover"
                          defaultMessage="如何打开发现页"
                        />
                      </a>
                    </li>
                  </ul>
                  <div className="rounded-md shadow">
                    {/* Update to link in the future */}
                    <a
                      // href="https://apps.apple.com/us/app/onekey-wallet/id1568432215"
                      // target="_blank"
                      href="javscript: void 0"
                      rel="noreferrer"
                      className="opacity-50 cursor-not-allowed flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700"
                      aria-describedby="tier-standard"
                    >
                      {/* <FormattedMessage id="pages.download.ios.appstore.version" /> */}
                      <FormattedMessage id="action__app_store_in_review" />
                    </a>
                  </div>
                </div>
              </div>

              {/* <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <img
                    className="mx-auto my-5 h-20 w-20 rounded-full lg:w-24 lg:h-24"
                    src="/img/logo_green_vector.png"
                    alt="OneKey Logo"
                  />
                  <div className="flex items-center justify-center">
                    <h3
                      className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                      id="tier-standard"
                    >
                      <span>
                        <FormattedMessage
                          id="pages.download.ios.testflight.version"
                          defaultMessage="TestFlight 公测版"
                        ></FormattedMessage>
                      </span>
                      <span className="ml-2">{props.version || "1.0.1"}</span>
                    </h3>
                  </div>
                  <p className="flex items-center justify-center mt-5 text-lg text-gray-500">
                    <FormattedMessage
                      id="pages.download.ios.testflight.scope"
                      defaultMessage="TestFlight 公测版适合中国大陆用户"
                    ></FormattedMessage>
                  </p>
                </div>
                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <Tick></Tick>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <FormattedMessage
                          id="pages.download.ios.testflight.features1"
                          defaultMessage="功能最全面"
                        ></FormattedMessage>
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <Tick></Tick>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <FormattedMessage
                          id="pages.download.ios.testflight.features2"
                          defaultMessage="更新及时，新版本审核时间通常较短"
                        ></FormattedMessage>
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <Tick></Tick>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <FormattedMessage
                          id="pages.download.ios.testflight.features3"
                          defaultMessage="无需海外 Apple ID"
                        ></FormattedMessage>
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <Tick></Tick>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <FormattedMessage
                          id="pages.download.ios.testflight.features4"
                          defaultMessage="适合中国大陆地区用户"
                        ></FormattedMessage>
                      </p>
                    </li>
                  </ul>
                  <div className="rounded-md shadow">
                    <a
                      target="_blank"
                      href="https://testflight.apple.com/join/pgXi9sf6"
                      rel="noreferrer"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700"
                      aria-describedby="tier-standard"
                    >
                      <FormattedMessage
                        id="pages.download.ios.testflight.download"
                        defaultMessage="下载 TestFlight 公测版"
                      ></FormattedMessage>
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div className="max-w-md mx-auto lg:max-w-5xl">
            <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                    <FormattedMessage
                      id="pages.download.attention"
                      defaultMessage="注意"
                    />
                  </h3>
                </div>
                <div className="mt-4 text-lg text-gray-600">
                  <span>
                    <FormattedMessage
                      id="pages.download.minimum.supported.system.version"
                      defaultMessage="最低支持系统版本"
                    />
                    <span>:</span>
                  </span>
                  <span className="font-semibold text-gray-900">
                    <FormattedMessage
                      id="pages.download.minimum.supported.system.version.iOS"
                      defaultMessage=" iOS 13.0 及以上。"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
