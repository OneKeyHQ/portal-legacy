import { FormattedMessage } from "react-intl";

export default function Transparent() {
  return (
    <div className="bg-gray-50 pt-12 sm:pt-16 py-10">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <FormattedMessage
              id="pages_hw__price_sector__title"
              defaultMessage="价格透明"
            />
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            <FormattedMessage
              id="pages_hw__price_sector__detail"
              defaultMessage="我们相信，每个用户都有权知道自己购买的商品都包含了哪些成本"
            />
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12  sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dd className="order-1 text-xl font-extrabold text-green-600">
                    <img
                      className="mx-auto my-4 h-20 w-20 rounded-full lg:w-24 lg:h-24"
                      src="/img/shell.png"
                      alt=""
                    />
                  </dd>
                  <dd className="order-1 text-xl font-extrabold text-green-600">
                    <FormattedMessage
                      id="pages_hw__price_sector__cost_title_hw"
                      defaultMessage="元器件及外壳"
                    />
                  </dd>
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    <FormattedMessage
                      id="pages_hw__price_sector__cost_price_hw"
                      defaultMessage="¥ 305.00"
                    />
                  </dt>
                </div>
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dd className="order-1 text-xl font-extrabold text-green-600">
                    <img
                      className="mx-auto my-4 h-20 w-20 rounded-full lg:w-24 lg:h-24"
                      src="/img/factory.png"
                      alt=""
                    />
                  </dd>
                  <dd className="order-1 text-xl font-extrabold text-green-600">
                    <FormattedMessage
                      id="pages_hw__price_sector__cost_title_factory"
                      defaultMessage="工厂组装"
                    />
                  </dd>
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    <FormattedMessage
                      id="pages_hw__price_sector__cost_price_factory"
                      defaultMessage="¥ 35.00"
                    />
                  </dt>
                </div>
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dd className="order-1 text-xl font-extrabold text-green-600">
                    <img
                      className="mx-auto my-4 h-20 w-20 rounded-full lg:w-24 lg:h-24"
                      src="/img/taxes.png"
                      alt=""
                    />
                  </dd>
                  <dd className="order-1 text-xl font-extrabold text-green-600">
                    <FormattedMessage
                      id="pages_hw__price_sector__cost_title_tax"
                      defaultMessage="税费"
                    />
                  </dd>
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    <FormattedMessage
                      id="pages_hw__price_sector__cost_price_tax"
                      defaultMessage="¥ 50.00"
                    />
                  </dt>
                </div>
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dd className="order-1 text-xl font-extrabold text-green-600">
                    <img
                      className="mx-auto my-4 h-20 w-20 rounded-full lg:w-24 lg:h-24"
                      src="/img/shipping.png"
                      alt=""
                    />
                  </dd>
                  <dd className="order-1 text-xl font-extrabold text-green-600">
                    <FormattedMessage
                      id="pages_hw__price_sector__cost_title_freight"
                      defaultMessage="运费"
                    />
                  </dd>
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    <FormattedMessage
                      id="pages_hw__price_sector__cost_price_freight"
                      defaultMessage="¥ 30.00（平均）"
                    />
                  </dt>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center my-4">
        <img
          className="mx-auto my-4 h-20 w-20 lg:w-24 lg:h-24"
          src="/img/arrow.png"
          alt=""
        />
      </div>

      <div className="flex flex-col max-w-7xl my-4 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <FormattedMessage
                        id="pages_hw__price_sector__table_title_cost"
                        defaultMessage="真实成本"
                      />
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <FormattedMessage
                        id="pages_hw__price_sector__table_title_price"
                        defaultMessage="OneKey 售价（包含所有软、硬件研发成本）"
                      />
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <FormattedMessage
                        id="pages_hw__price_sector__table_title_other"
                        defaultMessage="其他厂商售价"
                      />
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <FormattedMessage
                        id="pages_hw__price_sector__table_title_saving"
                        defaultMessage="你节省了"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="/img/cost.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-lg font-medium text-gray-900">
                            <FormattedMessage
                              id="pages_hw__price_sector__table_value_cost"
                              defaultMessage="¥ 420.00"
                            />
                          </div>
                          <div className="text-sm text-gray-500">
                            <FormattedMessage
                              id="pages_hw__price_sector__table_value_cost_desc"
                              defaultMessage="*成本随采购量不同有所变动"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-xl font-medium text-gray-900">
                        <FormattedMessage
                          id="pages_hw__price_sector__table_value_price"
                          defaultMessage="¥ 499.00（全球包邮）"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-xl font-medium text-gray-900">
                        <FormattedMessage
                          id="pages_hw__price_sector__table_value_other"
                          defaultMessage="¥ 1200.00 左右"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 inline-flex text-md leading-8 font-semibold rounded-full bg-green-100 text-green-800">
                        <FormattedMessage
                          id="pages_hw__price_sector__table_value_saving"
                          defaultMessage="58.41 + %"
                        />
                      </span>
                    </td>
                  </tr>
                  {/* More items... */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
