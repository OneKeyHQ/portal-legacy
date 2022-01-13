import Image from "next/image";

export default function LogoClouds() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          <div className="flex justify-center">
            <img
              // layout="fixed"
              // width={105}
              // height={48}
              className="w-26.25 h-12"
              src="/img/logo_coinbase.png"
              alt="Coinbase"
            />
          </div>
          <div className="flex justify-center">
            <img
              // layout="fixed"
              // width={105}
              // height={48}
              className="w-26.25 h-12"
              src="/img/logo_huobi.png"
              alt="Huobi"
            />
          </div>
          <div className="flex justify-center">
            <img
              // layout="fixed"
              // width={105}
              // height={48}
              className="w-26.25 h-12"
              src="/img/logo_okex.png"
              alt="OKEX"
            />
          </div>
          <div className="flex justify-center">
            <img
              // layout="fixed"
              // width={105}
              // height={48}
              className="w-26.25 h-12"
              src="/img/logo_bitstamp.png"
              alt="Bitstamp"
            />
          </div>
          <div className="flex justify-center">
            <img
              // layout="fixed"
              // Increase the size in order to look more harmonize other images
              // width={105 * 1.2}
              // height={48 * 1.2}
              className="w-31.5 h-14.4"
              src="/img/logo_binance.png"
              alt="Binance"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
