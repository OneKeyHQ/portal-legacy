import Image from "next/image";
import { FormattedMessage } from "react-intl";

export default function Payments() {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>
        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                <FormattedMessage
                  id="pages.home.payments.title"
                  defaultMessage="自己掌握私钥，痛快呼吸。"
                />
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                <FormattedMessage
                  id="pages.home.payments.description"
                  defaultMessage="👋 再见了，「提币审核」。"
                />
              </p>
              <dl className="mt-10 space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <svg
                        className="flex-shrink-0 h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      <FormattedMessage
                        id="pages.home.payment.advantage1.title"
                        defaultMessage="手机钱包可独立使用"
                      />
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      <FormattedMessage
                        id="pages.home.payment.advantage1.desc"
                        defaultMessage="你可以独立使用 OneKey App 来安全的存储、使用你的加密资产。我们经过谨慎的安全考量，使用了业界领先的加密算法，确保每个用户的资产都能妥善的加密并保管在本地。"
                      />
                    </dd>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <svg
                        className="flex-shrink-0 h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      <FormattedMessage
                        id="pages.home.payment.advantage2.title"
                        defaultMessage="配合硬件钱包更安全"
                      />
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      <FormattedMessage
                        id="pages.home.payment.advantage2.desc"
                        defaultMessage="硬件钱包能够将你的资产安全提升到新的等级，从物理上隔绝黑客、木马、病毒软件的攻击，所有的转账操作都要经过硬件钱包的审核，不用担心手机遗失或被窃。"
                      />
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <img
                // height={434.78}
                // width={600}
                // quality={100}
                className="w-150"
                src="/img/keys.png"
                alt="Illustration"
                // unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
