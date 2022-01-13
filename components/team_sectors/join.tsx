import { FormattedMessage } from "react-intl";

export default function Join() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="divide-y-2 divide-gray-200">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              <FormattedMessage
                id="pages.team.join.fringe.benefit"
                defaultMessage="福利待遇"
              />
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  <FormattedMessage
                    id="pages.team.join.team"
                    defaultMessage="团队"
                  />
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dd>
                      <span>- </span>
                      <FormattedMessage
                        id="pages.team.join.team.label1"
                        defaultMessage="强工程师文化，团队工程师占比 90%以上"
                      />{" "}
                    </dd>
                    <dd>
                      <span>- </span>
                      <FormattedMessage
                        id="pages.team.join.team.label2"
                        defaultMessage="项目完全开源"
                      />{" "}
                    </dd>
                    <dd>
                      <span>- </span>
                      <FormattedMessage
                        id="pages.team.join.team.label3"
                        defaultMessage="我们同时做软件和硬件"
                      />
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  <FormattedMessage
                    id="pages.team.join.salary"
                    defaultMessage="薪资"
                  />
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dd>
                      <span>- </span>
                      <FormattedMessage
                        id="pages.team.join.salary.label1"
                        defaultMessage=" 一线大厂水平（可选 BTC）"
                      />
                    </dd>
                    <dd>
                      <span>- </span>
                      <FormattedMessage
                        id="pages.team.join.salary.label2"
                        defaultMessage=" 全配 MBP 及 4K 显示器"
                      />
                    </dd>
                    <dd>
                      <span>- </span>
                      <FormattedMessage
                        id="pages.team.join.salary.label3"
                        defaultMessage="五险一金"
                      />
                    </dd>
                    <dd>
                      <span>- </span>
                      <FormattedMessage
                        id="pages.team.join.salary.label4"
                        defaultMessage="带薪年假"
                      />
                    </dd>
                    <dd>
                      <span>- </span>
                      <FormattedMessage
                        id="pages.team.join.salary.label5"
                        defaultMessage="商业体检"
                      />
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  <FormattedMessage
                    id="pages.team.join.jobs"
                    defaultMessage="工作"
                  />
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dd>
                      <span>- </span>
                      <FormattedMessage
                        id="pages.team.join.jobs.labale1"
                        defaultMessage="弹性工作时间"
                      />
                    </dd>
                    <dd>
                      <span>- </span>
                      <FormattedMessage
                        id="pages.team.join.jobs.labale2"
                        defaultMessage=" 周末双休（虽然本就是应该的但是还是注明下）"
                      />
                    </dd>
                    <dd>
                      <span>- </span>
                      <FormattedMessage
                        id="pages.team.join.jobs.labale3"
                        defaultMessage=" 公司提供中、晚饭（如果在北京 Office ）"
                      />
                    </dd>
                    <dd>
                      <span>- </span>
                      <FormattedMessage
                        id="pages.team.join.jobs.labale4"
                        defaultMessage=" 不限量的零食饮料"
                      />
                    </dd>
                    <dd>
                      <span>- </span>
                      <FormattedMessage
                        id="pages.team.join.jobs.labale5"
                        defaultMessage=" 每周体育中心包场篮球、羽毛球等锻炼项目"
                      />
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  <FormattedMessage
                    id="pages.team.join.others"
                    defaultMessage="额外"
                  />
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dd>
                      <span>- </span>
                      <FormattedMessage
                        id="pages.team.join.others.label1"
                        defaultMessage=" Remote Okay"
                      />
                    </dd>
                    <dd>
                      <span>- </span>
                      <FormattedMessage
                        id="pages.team.join.others.label2"
                        defaultMessage=" 团队 Bonus 激励"
                      />
                    </dd>
                    <dd>
                      <span>- </span>
                      <FormattedMessage
                        id="pages.team.join.others.label3"
                        defaultMessage="Token 或期权（如果有）"
                      />
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              <FormattedMessage
                id="pages.team.join.join.us"
                defaultMessage="加入我们"
              />
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  <FormattedMessage
                    id="pages.team.join.city.beijing"
                    defaultMessage="北京"
                  />
                </h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>
                    <FormattedMessage
                      id="pages.team.join.welcome"
                      defaultMessage="所有岗位开放，包括技术与非技术"
                    />
                  </p>
                  <p className="mt-1">
                    <FormattedMessage
                      id="pages.team.join.send.email"
                      defaultMessage="发送简历邮件至 hi[at]onekey.so"
                    />
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  <FormattedMessage
                    id="pages.team.join.city.cs"
                    defaultMessage="长沙"
                  />
                </h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>
                    <FormattedMessage
                      id="pages.team.join.welcome"
                      defaultMessage="所有岗位开放，包括技术与非技术"
                    />
                  </p>
                  <p className="mt-1">
                    <FormattedMessage
                      id="pages.team.join.send.email"
                      defaultMessage="发送简历邮件至 hi[at]onekey.so"
                    />
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  <FormattedMessage
                    id="pages.team.join.city.remote"
                    defaultMessage="Remote（全世界都可以）"
                  />
                </h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>
                    <FormattedMessage
                      id="pages.team.join.welcome"
                      defaultMessage="所有岗位开放，包括技术与非技术"
                    />
                  </p>
                  <p className="mt-1">
                    <FormattedMessage
                      id="pages.team.join.send.email"
                      defaultMessage="发送简历邮件至 hi[at]onekey.so"
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
