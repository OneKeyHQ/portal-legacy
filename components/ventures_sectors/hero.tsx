import { FormattedMessage } from "react-intl";

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <img
                className="block my-10 h-14 lg:h-18 xs:mx-auto"
                src="/img/logo_green_text_venture.png"
                alt="OneKey Ventures"
              />
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-7xl">
                <span className="block">
                  <FormattedMessage
                    defaultMessage="人们先是想象"
                    id="pages.ventures_sectors.hero.title1"
                  />
                </span>
                <span className="block text-green-600 xl:inline">
                  <FormattedMessage
                    defaultMessage="然后开始相信"
                    id="components.ventures_sectors.hero.title2"
                  />
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <FormattedMessage
                  defaultMessage="我们致力于拥抱更自由的金融秩序，这条路并不孤单。"
                  id="components.ventures_sectors.hero.sub_title"
                />
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="mailto:hi@onekey.so"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                  >
                    <FormattedMessage
                      defaultMessage="申请"
                      id="pages.ventures_sectors.hero.apply"
                    />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/img/ventures_hero.png"
          alt=""
        />
      </div>
    </div>
  );
}
