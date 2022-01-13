import { FormattedMessage } from "react-intl";

export default function Cryptos() {
  return (
    <div className="relative bg-gray-900">
      <div className="h-80 absolute bottom-0 xl:inset-0 xl:h-auto xl:grid xl:grid-cols-2">
        <div className="h-full xl:relative xl:col-start-2">
          <img
            className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
            src="/img/hw_ppl.jpeg"
            alt="Engineer background"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold tracking-wide uppercase">
            <span className="bg-gradient-to-r from-purple-300 to-green-300 bg-clip-text text-transparent">
              <FormattedMessage
                defaultMessage="保护你的加密资产"
                id="pages.hw_sectors.cryptos.subtitle_1"
              />
            </span>
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-white">
            <FormattedMessage
              defaultMessage="安全第一位"
              id="pages.hw_sectors.cryptos.title"
            />
          </p>
          <p className="mt-5 text-lg text-gray-300">
            <FormattedMessage
              defaultMessage="坚若磐石且优秀的使用体验背后，需要大量努力。"
              id="pages.hw_sectors.cryptos.subtitle_2"
            />
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            <p>
              <span className="block text-2xl font-bold text-white">
                <FormattedMessage
                  defaultMessage="300+"
                  id="pages_hardward__cryptos__descrption_test_num"
                />
              </span>
              <span className="mt-1 block text-base text-gray-300">
                <span className="font-medium text-white">
                  <FormattedMessage
                    defaultMessage="测试项，"
                    id="pages.hw_sectors.cryptos.text1"
                  />{" "}
                </span>
                <FormattedMessage
                  defaultMessage="会在每一次更新前进行检查。"
                  id="pages.hw_sectors.cryptos.text1_sub"
                />
              </span>
            </p>
            <p>
              <span className="block text-2xl font-bold text-white">
                <FormattedMessage
                  defaultMessage="40+"
                  id="pages_hardward__cryptos__descrption_engineer_num"
                />
              </span>
              <span className="mt-1 block text-base text-gray-300">
                <span className="font-medium text-white">
                  <FormattedMessage
                    defaultMessage="工程师，"
                    id="pages.hw_sectors.cryptos.text2"
                  />{" "}
                </span>
                <FormattedMessage
                  defaultMessage="确保版本更新迭代。"
                  id="pages.hw_sectors.cryptos.text2_sub"
                />
              </span>
            </p>
            <p>
              <span className="block text-2xl font-bold text-white">
                <FormattedMessage
                  defaultMessage="96.8%"
                  id="pages_hardward__cryptos__descrption_satisfaction_num"
                />
              </span>
              <span className="mt-1 block text-base text-gray-300">
                <span className="font-medium text-white">
                  <FormattedMessage
                    defaultMessage="客户满意度，"
                    id="pages.hw_sectors.cryptos.text3"
                  />{" "}
                </span>
                <FormattedMessage
                  defaultMessage="拿数据说话。"
                  id="pages.hw_sectors.cryptos.text3_sub"
                />
              </span>
            </p>
            <p>
              <span className="block text-2xl font-bold text-white">
                <FormattedMessage
                  defaultMessage="0"
                  id="pages_hardward__cryptos__descrption_accident_num"
                />
              </span>
              <span className="mt-1 block text-base text-gray-300">
                <span className="font-medium text-white">
                  <FormattedMessage
                    defaultMessage="安全事故，"
                    id="pages.hw_sectors.cryptos.text4"
                  />{" "}
                </span>
                <FormattedMessage
                  defaultMessage="无客户因硬件损失资产。"
                  id="pages.hw_sectors.cryptos.text4_sub"
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
