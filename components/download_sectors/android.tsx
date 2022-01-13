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
        <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div className="max-w-md mx-auto lg:max-w-5xl">
            <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                    <FormattedMessage
                      id="pages.download.apk_checksum"
                      defaultMessage="APK校验"
                    />
                  </h3>
                </div>
                {!!props.ascUrl && (
                  <div className="mt-4">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-indigo-600 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>
                              <FormattedMessage
                                id="pages.download.package_checksum_mac"
                                defaultMessage="MacOS verification instructions"
                              />
                            </span>
                            <ChevronUpIcon
                              className={`${
                                (osname.includes(OSTypes.mac) ? !open : open)
                                  ? "transform rotate-180"
                                  : ""
                              } w-5 h-5 text-indigo-500`}
                            />
                          </Disclosure.Button>
                          {(osname.includes(OSTypes.mac) ? !open : open) && (
                            <Disclosure.Panel
                              static={osname.includes(OSTypes.mac)}
                              className="px-4 pt-4 pb-2 text-sm text-gray-500"
                            >
                              <ul className="space-y-5 lg:space-y-0 list-disc">
                                <li>
                                  <div className="ml-3 text-sm text-gray-700">
                                    <FormattedMessage
                                      id="pages.download.checksum.step1"
                                      defaultMessage="点击 <a>下载</a> checksum文件"
                                      values={{
                                        a: (text: any) => (
                                          <a
                                            className="text-sm underline"
                                            href={`${props.ascUrl}?${timestamp}`}
                                            download="SHA256SUMS.asc"
                                          >
                                            {text}
                                          </a>
                                        ),
                                      }}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="ml-3 text-sm text-gray-700">
                                    <FormattedMessage
                                      id="pages.download.checksum.step_1"
                                      defaultMessage="Open a terminal (command line prompt) and Change Directory (cd) to the folder you use for downloads. For example:<code>cd Downloads/</code>"
                                      values={{
                                        code: (text: any) => (
                                          <pre className="rounded bg-gray-200 leading-6 px-2 mt-1 truncate">
                                            <code>{text}</code>
                                          </pre>
                                        ),
                                      }}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="ml-3 text-sm text-gray-700">
                                    <FormattedMessage
                                      id="pages.download.checksum.step2"
                                      defaultMessage="使用checksum工具计算shasum值 <code>shasum -a 256 --check SHA256SUMS.asc</code>"
                                      values={{
                                        code: (text: any) => (
                                          <pre className="rounded bg-gray-200 leading-6 px-2 mt-1 truncate">
                                            <code>{text}</code>
                                          </pre>
                                        ),
                                      }}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <p className="ml-3 text-sm text-gray-700">
                                    <FormattedMessage
                                      id="pages.download.checksum.step3"
                                      defaultMessage="校验结果; 确保你所下载的APK文件状态显示为 OK "
                                    />
                                  </p>
                                </li>
                                <li>
                                  <p className="ml-3 text-sm text-gray-700">
                                    <FormattedMessage
                                      id="pages.download.checksum.step_3_1"
                                      defaultMessage="If you haven't previously installed GNU Privacy Guard (GPG) on your system, <a>install it now</a>"
                                      values={{
                                        a: (text: any) => (
                                          <a
                                            className="mr-1 text-sm underline"
                                            href="https://gpgtools.org/"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            {text}
                                          </a>
                                        ),
                                      }}
                                    />
                                    <FormattedMessage
                                      id="pages.download.checksum.step_3_2"
                                      defaultMessage=" or see other installation <a>options</a>"
                                      values={{
                                        a: (text: any) => (
                                          <a
                                            className="text-sm underline"
                                            href="https://www.gnupg.org/download/index.en.html#binary"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            {text}
                                          </a>
                                        ),
                                      }}
                                    />
                                  </p>
                                </li>
                                <li>
                                  <div className="ml-3 text-sm text-gray-700">
                                    <FormattedMessage
                                      id="pages.download.checksum.step4"
                                      defaultMessage="获取 Onekey 签名公钥 <code>gpg --keyserver hkp://keyserver.ubuntu.com --recv-keys 1FE64A16589A05A709CC86A93663A830ECAE91EF</code>"
                                      values={{
                                        code: (text: any) => (
                                          <pre className="rounded bg-gray-200 leading-6 px-2 mt-1 truncate">
                                            <code>{text}</code>
                                          </pre>
                                        ),
                                      }}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="ml-3 text-sm text-gray-700">
                                    <FormattedMessage
                                      id="pages.download.checksum.step5"
                                      defaultMessage="校验checksum文件 <code>gpg --verify SHA256SUMS.asc</code>"
                                      values={{
                                        code: (text: any) => (
                                          <pre className="rounded bg-gray-200 leading-6 px-2 mt-1 truncate">
                                            <code>{text}</code>
                                          </pre>
                                        ),
                                      }}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="ml-3 text-sm text-gray-700">
                                    <FormattedMessage
                                      id="pages.download.checksum.step6"
                                      defaultMessage="确认校验结果"
                                    />
                                  </div>
                                </li>
                              </ul>
                            </Disclosure.Panel>
                          )}
                        </>
                      )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-2">
                      {({ open }) => {
                        return (
                          <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-indigo-600 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                              <span>
                                <FormattedMessage
                                  id="pages.download.package_checksum_win"
                                  defaultMessage="Windows verification instructions"
                                />
                              </span>
                              <ChevronUpIcon
                                className={`${
                                  (osname.includes(OSTypes.win) ? !open : open)
                                    ? "transform rotate-180"
                                    : ""
                                } w-5 h-5 text-indigo-500`}
                              />
                            </Disclosure.Button>
                            {(osname.includes(OSTypes.win) ? !open : open) && (
                              <Disclosure.Panel
                                static={osname.includes(OSTypes.win)}
                                className="px-4 pt-4 pb-2 text-sm text-gray-500"
                              >
                                <ul className=" list-disc">
                                  <li>
                                    <div className="ml-3 text-sm text-gray-700">
                                      <FormattedMessage
                                        id="pages.download.checksum.step1"
                                        defaultMessage="点击 <a>下载</a> checksum文件"
                                        values={{
                                          a: (text: any) => (
                                            <a
                                              className="text-sm underline"
                                              href={`${props.ascUrl}?${timestamp}`}
                                              download="SHA256SUMS.asc"
                                            >
                                              {text}
                                            </a>
                                          ),
                                        }}
                                      />
                                    </div>
                                  </li>
                                  <li>
                                    <div className="ml-3 text-sm text-gray-700">
                                      <FormattedMessage
                                        id="pages.download.checksum.step_1_win"
                                        defaultMessage="Open a terminal (command line prompt) and Change Directory (cd) to the folder you use for downloads. For example:<code>cd %UserProfile%\\Downloads</code>"
                                        values={{
                                          code: (text: any) => (
                                            <pre className="rounded bg-gray-200 leading-6 px-2 mt-1 truncate">
                                              <code>{text}</code>
                                            </pre>
                                          ),
                                        }}
                                      />
                                    </div>
                                  </li>
                                  <li>
                                    <div className="ml-3 text-sm text-gray-700">
                                      <FormattedMessage
                                        id="pages.download.checksum.step2_win"
                                        defaultMessage="Run the following command to generate a checksum of the release file you downloaded"
                                      />
                                      <pre className="rounded bg-gray-200 leading-6 px-2 mt-1 truncate">
                                        <code>
                                          certUtil -hashfile{" "}
                                          {`${props.url.substring(
                                            props.url.lastIndexOf("/") + 1
                                          )}`}{" "}
                                          SHA256
                                        </code>
                                      </pre>
                                    </div>
                                  </li>
                                  <li>
                                    <p className="ml-3 text-sm text-gray-700">
                                      <FormattedMessage
                                        id="pages.download.checksum.step3_win"
                                        defaultMessage="Checksum result; Ensure that the checksum produced by the command above matches one of the checksums listed in the checksums file you downloaded earlier"
                                      />
                                    </p>
                                  </li>
                                  <li>
                                    <p className="ml-3 text-sm text-gray-700">
                                      <FormattedMessage
                                        id="pages.download.checksum.step_3_1"
                                        defaultMessage="If you haven't previously installed GNU Privacy Guard (GPG) on your system, <a>install it now</a>"
                                        values={{
                                          a: (text: any) => (
                                            <a
                                              className="text-sm underline"
                                              href="https://gpgtools.org/"
                                              target="_blank"
                                              rel="noreferrer"
                                            >
                                              {text}
                                            </a>
                                          ),
                                        }}
                                      />
                                      <FormattedMessage
                                        id="pages.download.checksum.step_3_2"
                                        defaultMessage="or see other installation <a>options</a>"
                                        values={{
                                          a: (text: any) => (
                                            <a
                                              className="text-sm underline"
                                              href="https://www.gnupg.org/download/index.en.html#binary"
                                              target="_blank"
                                              rel="noreferrer"
                                            >
                                              {text}
                                            </a>
                                          ),
                                        }}
                                      />
                                    </p>
                                  </li>
                                  <li>
                                    <div className="ml-3 text-sm text-gray-700">
                                      <FormattedMessage
                                        id="pages.download.checksum.step4_win"
                                        defaultMessage="获取 Onekey 签名公钥 <code>C:\Program Files\Gnu\GnuPg\gpg.exe --keyserver hkp://keyserver.ubuntu.com --recv-keys 1FE64A16589A05A709CC86A93663A830ECAE91EF</code>"
                                        values={{
                                          code: (text: any) => (
                                            <pre className="rounded bg-gray-200 leading-6 px-2 mt-1 truncate">
                                              <code className="whitespace-normal">
                                                {text}
                                              </code>
                                            </pre>
                                          ),
                                        }}
                                      />
                                    </div>
                                  </li>
                                  <li>
                                    <div className="ml-3 text-sm text-gray-700">
                                      <FormattedMessage
                                        id="pages.download.checksum.step5_win"
                                        defaultMessage="校验checksum文件 <code>C:\Program Files\Gnu\GnuPg\gpg.exe --verify SHA256SUMS.asc</code>"
                                        values={{
                                          code: (text: any) => (
                                            <pre className="rounded bg-gray-200 leading-6 px-2 mt-1 truncate">
                                              <code>{text}</code>
                                            </pre>
                                          ),
                                        }}
                                      />
                                    </div>
                                  </li>
                                  <li>
                                    <div className="ml-3 text-sm text-gray-700">
                                      <FormattedMessage
                                        id="pages.download.checksum.step6"
                                        defaultMessage="确认校验结果"
                                      />
                                    </div>
                                  </li>
                                </ul>
                              </Disclosure.Panel>
                            )}
                          </>
                        );
                      }}
                    </Disclosure>
                    <Disclosure as="div" className="mt-2">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-indigo-600 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>
                              <FormattedMessage
                                id="pages.download.package_checksum_linux"
                                defaultMessage="Linux verification instructions"
                              />
                            </span>
                            <ChevronUpIcon
                              className={`${
                                (osname.includes(OSTypes.linux) ? !open : open)
                                  ? "transform rotate-180"
                                  : ""
                              } w-5 h-5 text-indigo-500`}
                            />
                          </Disclosure.Button>
                          {(osname.includes(OSTypes.linux) ? !open : open) && (
                            <Disclosure.Panel
                              static={osname.includes(OSTypes.linux)}
                              className="px-4 pt-4 pb-2 text-sm text-gray-500"
                            >
                              <ul className="space-y-5 lg:space-y-0 list-disc">
                                <li>
                                  <div className="ml-3 text-sm text-gray-700">
                                    <FormattedMessage
                                      id="pages.download.checksum.step1"
                                      defaultMessage="点击 <a>下载</a> checksum文件"
                                      values={{
                                        a: (text: any) => (
                                          <a
                                            className="text-sm underline"
                                            href={`${props.ascUrl}?${timestamp}`}
                                            download="SHA256SUMS.asc"
                                          >
                                            {text}
                                          </a>
                                        ),
                                      }}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="ml-3 text-sm text-gray-700">
                                    <FormattedMessage
                                      id="pages.download.checksum.step_1"
                                      defaultMessage="Open a terminal (command line prompt) and Change Directory (cd) to the folder you use for downloads. For example:<code>cd Downloads/</code>"
                                      values={{
                                        code: (text: any) => (
                                          <pre className="rounded bg-gray-200 leading-6 px-2 mt-1 truncate">
                                            <code>{text}</code>
                                          </pre>
                                        ),
                                      }}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="ml-3 text-sm text-gray-700">
                                    <FormattedMessage
                                      id="pages.download.checksum.step2_linux"
                                      defaultMessage="使用checksum工具计算shasum值 <code>sha256sum --ignore-missing --check SHA256SUMS.asc</code>"
                                      values={{
                                        code: (text: any) => (
                                          <pre className="rounded bg-gray-200 leading-6 px-2 mt-1 truncate">
                                            <code>{text}</code>
                                          </pre>
                                        ),
                                      }}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <p className="ml-3 text-sm text-gray-700">
                                    <FormattedMessage
                                      id="pages.download.checksum.step3"
                                      defaultMessage="校验结果; 确保你所下载的APK文件状态显示为 OK "
                                    />
                                  </p>
                                </li>
                                <li>
                                  <p className="ml-3 text-sm text-gray-700">
                                    <FormattedMessage
                                      id="pages.download.checksum.step_3_1"
                                      defaultMessage="If you haven't previously installed GNU Privacy Guard (GPG) on your system, <a>install it now</a>"
                                      values={{
                                        a: (text: any) => (
                                          <a
                                            className="text-sm underline"
                                            href="https://gpgtools.org/"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            {text}
                                          </a>
                                        ),
                                      }}
                                    />
                                    <FormattedMessage
                                      id="pages.download.checksum.step_3_2"
                                      defaultMessage="or see other installation <a>options</a>"
                                      values={{
                                        a: (text: any) => (
                                          <a
                                            className="text-sm underline"
                                            href="https://www.gnupg.org/download/index.en.html#binary"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            {text}
                                          </a>
                                        ),
                                      }}
                                    />
                                  </p>
                                </li>
                                <li>
                                  <div className="ml-3 text-sm text-gray-700">
                                    <FormattedMessage
                                      id="pages.download.checksum.step4"
                                      defaultMessage="获取 Onekey 签名公钥 <code>gpg --keyserver hkp://keyserver.ubuntu.com --recv-keys 1FE64A16589A05A709CC86A93663A830ECAE91EF</code>"
                                      values={{
                                        code: (text: any) => (
                                          <pre className="rounded bg-gray-200 leading-6 px-2 mt-1 truncate">
                                            <code>{text}</code>
                                          </pre>
                                        ),
                                      }}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="ml-3 text-sm text-gray-700">
                                    <FormattedMessage
                                      id="pages.download.checksum.step5"
                                      defaultMessage="校验checksum文件 <code>gpg --verify SHA256SUMS.asc</code>"
                                      values={{
                                        code: (text: any) => (
                                          <pre className="rounded bg-gray-200 leading-6 px-2 mt-1 truncate">
                                            <code>{text}</code>
                                          </pre>
                                        ),
                                      }}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="ml-3 text-sm text-gray-700">
                                    <FormattedMessage
                                      id="pages.download.checksum.step6"
                                      defaultMessage="确认校验结果"
                                    />
                                  </div>
                                </li>
                              </ul>
                            </Disclosure.Panel>
                          )}
                        </>
                      )}
                    </Disclosure>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
