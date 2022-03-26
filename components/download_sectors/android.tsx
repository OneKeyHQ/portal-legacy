import { FormattedMessage } from "react-intl";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { OSTypes } from "../../constants";
import { useOSType } from "../../libs/hooks/osType";

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

export default function Android(props: {
  version?: string;
  url?: string;
  ascUrl?: string;
}) {
  const [osname] = useOSType();
  const timestamp = Date.now();

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
                values={{ type: "Android" }}
              />
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-700" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <img
                    className="mx-auto my-5 h-20 w-20 rounded-full lg:w-24 lg:h-24"
                    src="/img/logo_green_vector.png"
                    alt="OneKey Logo"
                  />
                  <div className="flex items-center justify-center">
                    <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide bg-indigo-100 text-indigo-600">
                      <span>
                        <FormattedMessage
                          id="pages.download.android.playStore.version"
                          defaultMessage="Google PlayStore 版"
                        />
                      </span>
                      <span className="ml-2">{props.version || "1.0.0 "}</span>
                    </h3>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <Tick />
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <FormattedMessage
                          id="pages.download.android.playStore.features1"
                          defaultMessage="功能全面"
                        />
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <Tick />
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <FormattedMessage
                          id="pages.download.android.playStore.features2"
                          defaultMessage="PlayStore 自动更新"
                        />
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <Tick />
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <FormattedMessage
                          id="pages.download.android.playStore.features3"
                          defaultMessage="Google 审核较松，全功能支持"
                        />
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <Tick />
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <FormattedMessage
                          id="pages.download.android.playStore.features4"
                          defaultMessage="适合能够正常访问 Google PlayStore 的用户"
                        />
                      </p>
                    </li>
                  </ul>
                  <div className="rounded-md shadow">
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.bixin.wallet.mainnet"
                      rel="noreferrer"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700"
                      aria-describedby="tier-standard"
                    >
                      <FormattedMessage
                        id="pages.download.android.playStore.download"
                        defaultMessage="下载 Google PlayStore 版"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
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
                          id="pages.download.android.apk.version"
                          defaultMessage="安装包 APK"
                        />
                      </span>
                      <span className="ml-2">{props.version || "1.0.0 "}</span>
                    </h3>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <Tick />
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <FormattedMessage
                          id="pages.download.android.sdk.features1"
                          defaultMessage="功能全面"
                        />
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <Tick />
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <FormattedMessage
                          id="pages.download.android.sdk.features2"
                          defaultMessage="更新及时，支持热更新"
                        />
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <Tick />
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <FormattedMessage
                          id="pages.download.android.sdk.features3"
                          defaultMessage="无需 Google 账户"
                        />
                      </p>
                    </li>
                  </ul>
                  <div className="rounded-md shadow">
                    <a
                      target="_blank"
                      href={props.url}
                      rel="noreferrer"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700"
                      aria-describedby="tier-standard"
                    >
                      <FormattedMessage
                        id="pages.download.android.sdk.download"
                        defaultMessage="下载 APK 安装包"
                      />
                    </a>
                  </div>
                </div>
              </div>
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
                      id="pages.download.minimum.supported.system.version.android"
                      defaultMessage="Android 8.0及以上。"
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
