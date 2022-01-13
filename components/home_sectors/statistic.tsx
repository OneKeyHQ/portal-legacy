import { FormattedMessage } from "react-intl";

export default function Statistic() {
  return (
    <div className="bg-green-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <FormattedMessage
              id="pages.home.statistic.title"
              defaultMessage="备受信赖的钱包"
            />
          </h2>
          <p className="mt-3 text-xl text-green-200 sm:mt-4">
            <FormattedMessage
              id="pages.home.statistic.description"
              defaultMessage="和我们的用户一起成长"
            />
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <FormattedMessage
              id="pages.home.statistic.opensource"
              description="请保留span, strong等标签"
              defaultMessage="<span>代码开源</span><strong>100%</strong>"
              values={{
                span: (e: any) => (
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-green-200">
                    {e}
                  </dt>
                ),
                strong: (value: any) => (
                  <dd className="order-1 text-5xl font-extrabold text-white">
                    {value}
                  </dd>
                ),
              }}
            />
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <FormattedMessage
              id="pages.home.statistic.usedby"
              description="请保留span, strong等标签"
              defaultMessage="<span>国家或地区的用户</span><strong>80个</strong>"
              values={{
                span: (e: any) => (
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-green-200">
                    {e}
                  </dt>
                ),
                strong: (value: any) => (
                  <dd className="order-1 text-5xl font-extrabold text-white">
                    {value}
                  </dd>
                ),
              }}
            />
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <FormattedMessage
              id="pages.home.statistic.assets"
              description="请保留span, strong等标签"
              defaultMessage="<span>客户支持</span><strong>5星+</strong>"
              values={{
                span: (e: any) => (
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-green-200">
                    {e}
                  </dt>
                ),
                strong: (value: any) => (
                  <dd className="order-1 text-5xl font-extrabold text-white">
                    {value}
                  </dd>
                ),
              }}
            />
          </div>
        </dl>
      </div>
    </div>
  );
}
