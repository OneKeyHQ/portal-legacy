/* eslint-disable @onekeyhq/literal-blacklist/literal-blacklist */
import { FormattedMessage } from "react-intl";

export default function Compatibility() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black">
          <FormattedMessage
            defaultMessage="完美兼容以下第三方软件"
            id="pages.hw_sectors.compatibility.title"
          />
        </h2>
        <p>
          <FormattedMessage
            defaultMessage="实测可用，访问"
            id="pages.hw_sectors.compatibility.subtitle_1"
          />

          <a
            href="https://github.com/OneKeyHQ/doc/blob/master/docs/app.md"
            className="text-green-600"
          >
            {" "}
            <FormattedMessage
              defaultMessage="全部使用教程"
              id="pages.hw_sectors.compatibility.tutor"
            />{" "}
          </a>
          <FormattedMessage
            defaultMessage="了解更多。"
            id="pages.hw_sectors.compatibility.subtitle_2"
          />
        </p>
        <div className="mt-6 border-t border-indigo-300 border-opacity-25 pt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
            <div>
              <dt className="text-lg leading-6 font-medium text-black">
                <FormattedMessage
                  defaultMessage="Trezor 网页版钱包（开源）"
                  id="pages.hw_sectors.compatibility.trezor"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <a href="https://wallet.trezor.io/">wallet.trezor.io</a>
                <a
                  href="https://help.onekey.so/hc/articles/360002884596/"
                  className="text-green-600 mx-2"
                >
                  <FormattedMessage
                    defaultMessage="教程"
                    id="pages.hw_sectors.compatibility.tutor_link"
                  />
                  →
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-lg leading-6 font-medium text-black">
                <FormattedMessage
                  defaultMessage="Electrum（开源）"
                  id="pages.hw_sectors.compatibility.electrum"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <a href="https://electrum.org/#home">electrum.org</a>
              </dd>
            </div>
            <div>
              <dt className="text-lg leading-6 font-medium text-black">
                <FormattedMessage
                  defaultMessage="MetaMask（开源）"
                  id="pages.hw_sectors.compatibility.metamask"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <a href="https://metamask.io/">metamask.io</a>
                <a
                  href="https://help.onekey.so/hc/articles/360002664975"
                  className="text-green-600 mx-2"
                >
                  <FormattedMessage
                    defaultMessage="教程"
                    id="pages.hw_sectors.compatibility.tutor_link2"
                  />
                  →
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-lg leading-6 font-medium text-black">
                <FormattedMessage
                  defaultMessage="Mycelium（部分开源）"
                  id="pages.hw_sectors.compatibility.mycelium"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <a href="https://wallet.mycelium.com/">mycelium.com</a>
              </dd>
            </div>
            <div>
              <dt className="text-lg leading-6 font-medium text-black">
                <FormattedMessage
                  defaultMessage="Exodus（部分开源）"
                  id="pages.hw_sectors.compatibility.exodus"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <a href="https://www.exodus.io/">exodus.io</a>
              </dd>
            </div>
            <div>
              <dt className="text-lg leading-6 font-medium text-black">
                <FormattedMessage
                  defaultMessage="MyEtherWallet（开源）"
                  id="pages.hw_sectors.compatibility.myetherwallet"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <a href="https://www.myetherwallet.com/">myetherwallet.com</a>
              </dd>
            </div>
            <div>
              <dt className="text-lg leading-6 font-medium text-black">
                <FormattedMessage
                  defaultMessage="Bitcoin Core + Specter（开源）"
                  id="pages.hw_sectors.compatibility.specter"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <a href="https://specter.solutions/">specter.solutions</a>
              </dd>
            </div>
            <div>
              <dt className="text-lg leading-6 font-medium text-black">
                <FormattedMessage
                  defaultMessage="Bitcoin Core + HWI（开源）"
                  id="pages.hw_sectors.compatibility.hwi"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <a href="https://github.com/bitcoin-core/HWI/blob/master/docs/bitcoin-core-usage.md">
                  github.com/bitcoin-core
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-lg leading-6 font-medium text-black">
                <FormattedMessage
                  defaultMessage="BTCPayServer（开源）"
                  id="pages.hw_sectors.compatibility.btcpayserver"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <a href="https://btcpayserver.org/">btcpayserver.org</a>
              </dd>
            </div>
            <div>
              <dt className="text-lg leading-6 font-medium text-black">
                <FormattedMessage
                  defaultMessage="Electrum-DASH（开源）"
                  id="pages.hw_sectors.compatibility.electrum_dash"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <a href="https://electrum.dash.org">electrum.dash.org</a>
              </dd>
            </div>
            <div>
              <dt className="text-lg leading-6 font-medium text-black">
                <FormattedMessage
                  defaultMessage="Electrum-LTC（开源）"
                  id="pages.hw_sectors.compatibility.electrum_ltc"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <a href="https://electrum-ltc.org">electrum-ltc.org</a>
              </dd>
            </div>
            <div>
              <dt className="text-lg leading-6 font-medium text-black">
                <FormattedMessage
                  defaultMessage="EtherWall（开源）"
                  id="pages.hw_sectors.compatibility.etherwall"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <a href="https://www.etherwall.com">etherwall.com</a>
              </dd>
            </div>
            <div>
              <dt className="text-lg leading-6 font-medium text-black">
                <FormattedMessage
                  defaultMessage="Nano Wallet（开源）"
                  id="pages.hw_sectors.compatibility.nanowallet"
                />
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <a href="https://nem.io/">nem.io</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
