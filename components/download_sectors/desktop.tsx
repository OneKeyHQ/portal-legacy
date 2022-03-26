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

interface Props {
  version: string;
  macUrl: string;
  winUrl: string;
  linuxUrl: string;
  ascUrl: string;
}

export default function Desktop(props: Props): JSX.Element {
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
                values={{ type: "Desktop" }}
              />
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-700" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <img
                    className="mx-auto my-5 h-20 w-20 lg:w-24 lg:h-24"
                    src="/img/download_mac_logo.png"
                    alt=""
                  />
                  <div className="flex items-center justify-center">
                    <h3 className="inline-flex px-4 py-1 rounded-full text-sm uppercase font-semibold tracking-wide bg-indigo-100 text-indigo-600">
                      <span>
                        <FormattedMessage
                          id="pages.download.desktop.mac.version"
                          defaultMessage="Mac 版"
                        />
                      </span>
                      <span className="ml-2">{props.version || "1.0.0 "}</span>
                    </h3>
                  </div>
                  <p className="flex items-center justify-center mt-5 text-lg text-gray-500">
                    <FormattedMessage
                      id="pages.download.desktop.mac.scope"
                      defaultMessage="适用于 Mac 用户"
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
                          id="pages.download.desktop.mac.features1"
                          defaultMessage="支持 macOS 10.8 及以上"
                        />
                      </p>
                    </li>
                  </ul>
                  <div className="rounded-md shadow">
                    <a
                      rel="noreferrer"
                      href={props.macUrl}
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700"
                      aria-describedby="tier-standard"
                    >
                      <FormattedMessage
                        id="pages.download.desktop.mac.download"
                        defaultMessage="下载 Mac 版"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <img
                    className="mx-auto my-5 h-20 w-20 lg:w-24 lg:h-24"
                    src="/img/download_windows_logo.png"
                    alt=""
                  />
                  <div className="flex items-center justify-center">
                    <h3
                      className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                      id="tier-standard"
                    >
                      <span>
                        <FormattedMessage
                          id="pages.download.desktop.window.version"
                          defaultMessage="Windows 版"
                        />
                      </span>
                      <span className="ml-2">{props.version || "1.0.0 "}</span>
                    </h3>
                  </div>
                  <p className="flex items-center justify-center mt-5 text-lg text-gray-500">
                    <FormattedMessage
                      id="pages.download.desktop.window.scope"
                      defaultMessage="适用于 Windows 用户"
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
                          id="pages.download.desktop.window.features1"
                          defaultMessage="支持 Windows 7 及以上"
                        />
                      </p>
                    </li>
                  </ul>
                  <div className="rounded-md shadow">
                    <a
                      href={props.winUrl}
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700"
                      aria-describedby="tier-standard"
                    >
                      <FormattedMessage
                        id="pages.download.desktop.window.download"
                        defaultMessage="下载 Windows 版"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <img
                    className="mx-auto my-5 h-20 w-20 lg:w-24 lg:h-24"
                    src="/img/download_linux_logo.png"
                    alt=""
                  />
                  <div className="flex items-center justify-center">
                    <h3
                      className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                      id="tier-standard"
                    >
                      <span>
                        <FormattedMessage
                          id="pages.download.desktop.linux.version"
                          defaultMessage="Linux 版"
                        />
                      </span>
                      <span className="ml-2">{props.version || "1.0.0 "}</span>
                    </h3>
                  </div>
                  <p className="flex items-center justify-center mt-5 text-lg text-gray-500">
                    <FormattedMessage
                      id="pages.download.desktop.linux.scope"
                      defaultMessage="适用于 Linux 用户"
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
                          id="pages.download.desktop.linux.features1"
                          defaultMessage="支持 Ubuntu 12.04 及以上"
                        />
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <Tick />
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <FormattedMessage
                          id="pages.download.desktop.linux.features2"
                          defaultMessage="支持 Fedora 21及以上"
                        />
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <Tick />
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <FormattedMessage
                          id="pages.download.desktop.linux.features3"
                          defaultMessage="支持 Debian 8 及以上"
                        />
                      </p>
                    </li>
                  </ul>
                  <div className="rounded-md shadow">
                    <a
                      href={props.linuxUrl}
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700"
                      aria-describedby="tier-standard"
                    >
                      <FormattedMessage
                        id="pages.download.desktop.linux.download"
                        defaultMessage="下载 Linux 版"
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
                      id="pages.download.desktop.should.know"
                      defaultMessage="桌面版功能和移动端可能存在不一致，务必确保从 onekey.so 官网下载。"
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
                      id="pages.download.package_checksum"
                      defaultMessage="安装包校验"
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
                                      id="pages.download.checksum.step3_mac"
                                      defaultMessage="校验结果; 确保你所下载的DMG文件状态显示为 OK "
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
                                      defaultMessage="获取 Onekey 签名公钥 <code>gpg --keyserver keys.openpgp.org --recv-keys 074C4CCE3C5BC4F6EFB8FC57AF37AFA7F85AEE7F</code>"
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
                                        defaultMessage="Open a terminal (command line prompt) and Change Directory (cd) to the folder you use for downloads. For example:<code>cd %UserProfile%\Downloads</code>"
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
                                          {`OneKey-Desktop-${props.version.substring(
                                            1
                                          )}-win-zadig.zip`}{" "}
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
                                        defaultMessage="获取 Onekey 签名公钥 <code>C:\Program Files\Gnu\GnuPg\gpg.exe --keyserver keys.openpgp.org --recv-keys 074C4CCE3C5BC4F6EFB8FC57AF37AFA7F85AEE7F</code>"
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
                                      defaultMessage="校验结果; 确保你所下载的AppImage文件状态显示为 OK "
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
                                      defaultMessage="获取 Onekey 签名公钥 <code>gpg --keyserver keys.openpgp.org --recv-keys 074C4CCE3C5BC4F6EFB8FC57AF37AFA7F85AEE7F</code>"
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
