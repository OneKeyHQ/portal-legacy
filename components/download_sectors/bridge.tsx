import { FormattedMessage } from "react-intl";
import { Fragment, useState } from "react";
import { Listbox, Transition, Disclosure } from "@headlessui/react";
import { CheckIcon, SelectorIcon, ChevronUpIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import { OSTypes } from "../../constants";
import { useOSType } from "../../libs/hooks/osType";
import { useLocale } from "../universal/IntlProvider";
interface Props {
  version: string;
  linux32Rpm: string;
  linux64Rpm: string;
  linux32Deb: string;
  linux64Deb: string;
  winUrl: string;
  macUrl: string;
  changeLogCn: string;
  changeLogEn: string;
  ascUrl: string;
}

const options = [
  {
    id: "linux64Deb",
    name: "Linux 64-bit（deb）",
  },
  {
    id: "linux64Rpm",
    name: "Linux 64-bit（rpm）",
  },
  {
    id: "linux32Deb",
    name: "Linux 32-bit（deb）",
  },
  {
    id: "linux32Rpm",
    name: "Linux 32-bit（rpm）",
  },
];

export default function Bridge(props: Props): JSX.Element {
  const [selected, setSelected] = useState(options[0]);
  const [osname] = useOSType();
  const { locale } = useLocale();
  const changelogKey = locale === "zh-CN" ? "changeLogCn" : "changeLogEn";
  const changelogList = (props[changelogKey] || "")
    .split("\n")
    .map((item) => item);
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
                values={{ type: "Bridge" }}
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
                <div className="flex-1 flex flex-col-reverse justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
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
                <div className="flex-1 flex flex-col-reverse justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
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
              <div className="flex flex-col rounded-lg shadow-lg">
                <div className="px-6 py-8 rounded-t-lg bg-white sm:p-10 sm:pb-6">
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
                <div className="flex-1 flex flex-col justify-between rounded-b-lg px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                  <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => {
                      return (
                        <div className="mt-1 relative">
                          <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm">
                            <span className="flex items-center">
                              <span className="ml-3 block truncate">
                                {selected.name}
                              </span>
                            </span>
                            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                              <SelectorIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options
                              static
                              className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                            >
                              {options.map((option) => (
                                <Listbox.Option
                                  key={option.id}
                                  className={({ active }) =>
                                    classNames(
                                      {
                                        "text-white bg-green-500": active,
                                        "text-gray-900": !active,
                                      },
                                      "cursor-default select-none relative py-2 pl-3 pr-9"
                                    )
                                  }
                                  value={option}
                                >
                                  {({ selected, active }) => {
                                    return (
                                      <>
                                        <div className="flex items-center">
                                          <span
                                            className={classNames(
                                              {
                                                "font-semibold": selected,
                                                "font-normal": !selected,
                                              },
                                              "ml-3 block truncate"
                                            )}
                                          >
                                            {option.name}
                                          </span>
                                        </div>

                                        {selected ? (
                                          <span
                                            className={classNames(
                                              {
                                                "text-white": active,
                                                "text-green-500": !active,
                                              },
                                              "absolute inset-y-0 right-0 flex items-center pr-4"
                                            )}
                                          >
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    );
                                  }}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      );
                    }}
                  </Listbox>
                  <div className="rounded-md shadow">
                    <a
                      rel="noreferrer"
                      href={props[selected["id"]]}
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
                      id="pages.download.bridge.changelog"
                      defaultMessage="变更日志"
                    />
                  </h3>
                </div>
                <ul className="mt-8 space-y-5 lg:space-y-0 list-disc">
                  {changelogList.map((list, index) => (
                    <li key={index}>
                      <div className="ml-3 text-sm text-gray-700">
                        {list.replace(/- /g, "")}
                      </div>
                    </li>
                  ))}
                </ul>
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
                                          {`onekey-bridge-${props.version.substring(
                                            1
                                          )}-win32-install.exe`}{" "}
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
                                      id="pages.download.checksum.step3_linux"
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
