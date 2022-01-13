import { FormattedMessage } from "react-intl";

export default function Data() {
  return (
    <div className="relative bg-white py-16 sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
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
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card */}
            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="/img/vitalik.jpg"
                alt=""
              />
              <div
                className="absolute inset-0 bg-indigo-500"
                style={{ mixBlendMode: "multiply" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
              <div className="relative px-8">
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                      <FormattedMessage
                        defaultMessage="比特币经常被称之为“全球账簿”，尽管这个账簿记录的仅仅是一种货币——比特币的全部账单。相应的，以太坊可以被看作一台“全球计算机”：一个任何人都可以上传和执行应用程序，并且程序的有效执行能得到保证的地方，这种保证依赖的正是以太坊系统中鲁棒性极强，去中心化的，由全球成千上万的计算机组成的共识网络。"
                        id="pages.plugin_sectors.data.vitalik"
                      />
                    </p>
                  </div>
                  <footer className="mt-4">
                    <p className="text-base font-semibold text-indigo-200">
                      <FormattedMessage
                        defaultMessage="Vitalik Co-Founder of Ethereum"
                        id="pages.plugin_sectors.data.author"
                      />
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              <FormattedMessage
                defaultMessage="拥抱 DeFi"
                id="pages.plugin_sectors.data.title"
              />
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">
                <FormattedMessage
                  defaultMessage="超级君：行业的发展很快，我们当年的遥想，逐渐成为现实，比如华尔街进场，贝宝可以买币，P
            站接受支付。按我的理解，简洁有力的东西，只需要共识的演进，而共识的演进，并不是逐渐而成的，可能是触发某些黑天鹅事件，在旧秩序崩塌的那刻，突然地扩散，迅速侵占人类的心智。回望过去，比特币和区块链的发展莫过于此。"
                  id="pages.plugin_sectors.data.content1"
                />
              </p>
              <p className="text-lg">
                <FormattedMessage
                  defaultMessage="在这种指数发展的情形下，那么获得最前线信息的能力和动手撸币的执行力，是第一生产力，要理解行业，理解赛道，理解项目，理解社区。我观察到，对于交易所而言，今年招聘人才就大不同于往年，往年总想从外面挖一个优秀的传统金融的人才过来，但今年他们只想挖掘到行业内的极客，因为今年的Defi的发展，是新生猛兽，似乎一夜之间从地里冒出来，未来的区块链新品很可能也是如此，不说传统金融的人，就是古典币圈的人也完全失去主张，不知从哪里俘获这里面的价值，唯有土生土长的从币圈里生长出来的极客，熟悉金融熟悉链上熟悉各种，综合能力超强的人，才能寻找和驾驭这些猛兽。"
                  id="pages.plugin_sectors.data.content2"
                />
              </p>
            </div>
          </div>
          {/* Stats section */}
          <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              <div className="border-t-2 border-gray-100 pt-6">
                <dt className="text-base font-medium text-gray-500">
                  <FormattedMessage
                    defaultMessage="DeFi TVL"
                    id="pages.plugin_sectors.data.tvl"
                  />
                </dt>
                <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                  <FormattedMessage
                    defaultMessage="$33.49B +"
                    id="pages.plugin_sectors.data.tvl_num"
                  />
                </dd>
              </div>
              <div className="border-t-2 border-gray-100 pt-6">
                <dt className="text-base font-medium text-gray-500">
                  <FormattedMessage
                    defaultMessage="插件支持 ETH、BSC、HECO链等"
                    id="pages.plugin_sectors.data.chain"
                  />
                </dt>
                <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                  <FormattedMessage
                    defaultMessage="3000+项目"
                    id="pages.plugin_sectors.data.chain_num"
                  />
                </dd>
              </div>
              <div className="border-t-2 border-gray-100 pt-6">
                <dt className="text-base font-medium text-gray-500">
                  <FormattedMessage
                    defaultMessage="插件代码"
                    id="pages.plugin_sectors.data.code"
                  />
                </dt>
                <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                  <FormattedMessage
                    defaultMessage="完全开源"
                    id="pages.plugin_sectors.data.code_open"
                  />
                </dd>
              </div>
              <div className="border-t-2 border-gray-100 pt-6">
                <dt className="text-base font-medium text-gray-500">
                  <FormattedMessage
                    defaultMessage="硬件钱包配对"
                    id="pages.plugin_sectors.data.hw"
                  />
                </dt>
                <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                  <FormattedMessage
                    defaultMessage="支持"
                    id="pages.plugin_sectors.data.hw_support"
                  />
                </dd>
              </div>
            </dl>
            <div className="mt-10">
              <a
                href="https://www.chainnews.com/u/345196369828.htm"
                className="text-base font-medium text-green-600"
              >
                <FormattedMessage
                  defaultMessage="橙皮书 📙"
                  id="pages.plugin_sectors.data.orangebook"
                />
                <span aria-hidden="true">→</span>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
