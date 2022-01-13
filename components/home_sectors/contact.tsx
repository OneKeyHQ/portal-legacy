import { FormattedMessage } from "react-intl";
import { useLocale } from "../universal/IntlProvider";

export default function Contact() {
  const { locale } = useLocale();

  return (
    <div className="relative bg-gray-800">
      <div className="h-56 bg-green-600 sm:h-72 md:absolute relative md:left-0 md:h-full md:w-1/2 overflow-hidden">
        <img
          className="object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="/img/help.png"
          alt="help"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
            <FormattedMessage
              id="pages.home.contact.724.support"
              defaultMessage="7/24 客户支持团队"
            />
          </h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            <FormattedMessage
              id="pages.home.contact.oncall"
              defaultMessage="我们随时待命"
            />
          </p>
          <p className="mt-3 text-lg text-gray-300">
            <FormattedMessage
              id="pages.home.contact.when.encounter.difficulties"
              defaultMessage="任何关于 OneKey App 或硬件的疑问，欢迎在我们的帮助中心搜索一下，很有可能你的问题已经有现成解决办法了。如果还是无法解决，欢迎给我们提工单，我们通常会在24小时内完成回复并帮你解决。"
            />
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href={`https://help.onekey.so/hc/${locale?.toLowerCase()}`}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
              >
                <FormattedMessage
                  id="pages.home.contact.enter.helpCenter"
                  defaultMessage="进入帮助中心"
                />
                <svg
                  className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
