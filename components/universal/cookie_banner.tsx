/* This example requires Tailwind CSS v2.0+ */
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { FormattedMessage } from "react-intl";
import { FC } from "react";
import { useLocale } from "./IntlProvider";
interface CookieBannerProps {
  onConfirm: () => void;
}

// eslint-disable-next-line react/prop-types
export const CookieBanner: FC<CookieBannerProps> = ({ onConfirm }) => {
  const { locale } = useLocale();

  return (
    <div className="fixed bottom-0 inset-x-0 mr-32 pb-4 z-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="p-2 rounded-lg bg-green-500 shadow-xl sm:p-3">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex-1 flex items-center">
              <span className="flex p-2 rounded-lg">
                <ExclamationCircleIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="mx-1 font-medium text-white">
                <span className="md:hidden">
                  <FormattedMessage
                    id="banner_cookie__text_mobile"
                    defaultMessage="我们使用 Cookie 来记录语言设置"
                  />
                </span>
                <span className="hidden md:inline">
                  <FormattedMessage
                    id="banner_cookie__text"
                    defaultMessage="我们使用 Cookie 来记录语言设置，更好的提升体验！通过<a>隐私政策</a> 了解更多"
                    values={{
                      // eslint-disable-next-line react/display-name
                      a: (text: string) => (
                        <a
                          href={`https://help.onekey.so/hc/${locale?.toLowerCase()}/articles/360002003315`}
                          className="font-medium underline ml-1"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {text}
                        </a>
                      ),
                    }}
                  />
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <button
                onClick={onConfirm}
                className="w-full cursor-pointer flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-600 bg-white hover:bg-green-50"
              >
                <FormattedMessage
                  id="banner_cookie__agree"
                  defaultMessage="我知道了"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
