import { FormattedMessage } from "react-intl";
import { toHelpLink } from "../../utils/utils";
import Link from "../universal/link";
import { useLocale } from "../universal/IntlProvider";

export default function CTA() {
  const { locale } = useLocale();

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block mb-2">
            <FormattedMessage
              id="pages.home.cta.ready"
              defaultMessage="准备好了吗？"
            />
          </span>
          <span className="block text-green-600">
            <FormattedMessage
              id="pages.home.cta.start"
              defaultMessage="今天就开始使用 OneKey 钱包。"
            />
          </span>
        </h2>
        <div className="mt-8 flex flex-col md:flex-row lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/download"
              className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              <FormattedMessage
                id="pages.home.cta.download"
                defaultMessage="免费下载"
              />
            </Link>
          </div>
          <div className="mt-2 md:mt-0 md:ml-3 inline-flex rounded-md shadow">
            <a
              target="_blank"
              rel="noreferrer"
              href={toHelpLink({ locale, path: "categories/360000170236" })}
              className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
            >
              <FormattedMessage
                id="pages.home.cta.guide"
                defaultMessage="新手指南"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
