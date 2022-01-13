/* eslint-disable @onekeyhq/literal-blacklist/literal-blacklist */
import { useState } from "react";
import { ExclamationCircleIcon, XIcon } from "@heroicons/react/solid";

export default function CautionBanner() {
  const [visible, setVisible] = useState(true);

  return (
    visible && (
      <div className="bg-red-600">
        <div className="max-w-7xl mx-auto py-4 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-red-700">
                <ExclamationCircleIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="mx-3 font-medium text-white">
                <span className="md:hidden">
                  重要通知：最近遇到极少量用户使用旧版 App
                  激活硬件钱包出错，导致后续无法恢复地址，或连接 MetaMask
                  时点击固件升级后变砖的情况，我们已经尽责通知用户到位。务必不要使用旧
                  OneKey App 激活硬件，也不要通过 MetaMask 升级 Trezor
                  固件。使用 OneKey 桌面客户端和 OneKey
                  官方插件无上述问题。对于用户自身不当使用造成的损失，OneKey
                  不承担任何责任。
                </span>
                <span className="hidden md:inline">
                  重要通知：最近遇到极少量用户使用旧版 App
                  激活硬件钱包出错，导致后续无法恢复地址，或连接 MetaMask
                  时点击固件升级后变砖的情况，我们已经尽责通知用户到位。务必不要使用旧
                  OneKey App 激活硬件，也不要通过 MetaMask 升级 Trezor
                  固件。使用 OneKey 桌面客户端和 OneKey
                  官方插件无上述问题。对于用户自身不当使用造成的损失，OneKey
                  不承担任何责任。
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="https://weibo.com/7355578397/KfS2Hndjt"
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-600 bg-white hover:bg-red-50"
                target="_blank"
                rel="noreferrer"
              >
                了解更多
              </a>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                onClick={() => setVisible(false)}
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
