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
      </div>
    </div>
  );
}
