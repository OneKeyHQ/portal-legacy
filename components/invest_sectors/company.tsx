import { FormattedMessage } from "react-intl";

export default function Company() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-4xl">
        <p className="mt-2 text-xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
          <FormattedMessage
            defaultMessage="我们做到："
            id="pages.invest_sectors.company.title"
          />
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3">
                      <img
                        className="mx-auto h-40 w-40 rounded-full lg:w-40 lg:h-40"
                        src="/img/biz_team.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    <FormattedMessage
                      defaultMessage="团队知识密度高"
                      id="pages.invest_sectors.company.ft1"
                    />
                  </h3>
                  <p className="mt-5 text-sm text-gray-500">
                    <FormattedMessage
                      defaultMessage="我们喜欢聚合且活跃、密集的讨论与输出"
                      id="pages.invest_sectors.company.desc1"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3">
                      <img
                        className="mx-auto h-40 w-40 rounded-full lg:w-40 lg:h-40"
                        src="/img/biz_river.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    <FormattedMessage
                      defaultMessage="护城河牢靠"
                      id="pages.invest_sectors.company.ft2"
                    />
                  </h3>
                  <p className="mt-5 text-sm text-gray-500">
                    <FormattedMessage
                      defaultMessage="我们掌握复杂的软硬件产品打磨及供应链管理能力"
                      id="pages.invest_sectors.company.desc2"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3">
                      <img
                        className="mx-auto h-40 w-40 rounded-full lg:w-40 lg:h-40"
                        src="/img/biz_model.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    <FormattedMessage
                      defaultMessage="商业模式简单"
                      id="pages.invest_sectors.company.ft3"
                    />
                  </h3>
                  <p className="mt-5 text-sm text-gray-500">
                    <FormattedMessage
                      defaultMessage="我们偏好简单、持久且能产生规模效益的业务"
                      id="pages.invest_sectors.company.desc3"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3">
                      <img
                        className="mx-auto h-40 w-40 rounded-full lg:w-40 lg:h-40"
                        src="/img/biz_cashflow.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    <FormattedMessage
                      defaultMessage="现金流稳健"
                      id="pages.invest_sectors.company.ft4"
                    />
                  </h3>
                  <p className="mt-5 text-sm text-gray-500">
                    <FormattedMessage
                      defaultMessage="我们不喜欢举债经营"
                      id="pages.invest_sectors.company.desc4"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3">
                      <img
                        className="mx-auto h-40 w-40 rounded-full lg:w-40 lg:h-40"
                        src="/img/biz_growth.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    <FormattedMessage
                      defaultMessage="增长持续"
                      id="pages.invest_sectors.company.ft5"
                    />
                  </h3>
                  <p className="mt-5 text-sm text-gray-500">
                    <FormattedMessage
                      defaultMessage="我们爱增长，它几乎能解决一切问题"
                      id="pages.invest_sectors.company.desc5"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3">
                      <img
                        className="mx-auto h-40 w-40 rounded-full lg:w-40 lg:h-40"
                        src="/img/biz_margin.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    <FormattedMessage
                      defaultMessage="边际利润合理"
                      id="pages.invest_sectors.company.ft6"
                    />
                  </h3>
                  <p className="mt-5 text-sm text-gray-500">
                    <FormattedMessage
                      defaultMessage="我们让产品有合理利润"
                      id="pages.invest_sectors.company.desc6"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
