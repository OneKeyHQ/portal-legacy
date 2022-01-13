import { FormattedMessage } from "react-intl";
import Header from "../../components/header";
import Link from "../universal/link";
import { useLocale } from "../universal/IntlProvider";

interface TemplateProps {
  title: string | JSX.Element;
  logo: string;
  coin: string | JSX.Element;
  questions: {
    title: string | JSX.Element;
    answers: string | JSX.Element;
  }[];
}

export default function IntroductionPageTemplate(props: TemplateProps) {
  const { locale } = useLocale();

  return (
    <div>
      <Header>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Header>
      <div className="bg-gray-100">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <img
              className="border-2 border-white mx-auto my-5 h-40 w-40 rounded-full lg:w-40 lg:h-40"
              src={props.logo}
              alt="logo"
            />
            <span className="block text-gray-700">
              <FormattedMessage
                id="components.introduction.page.title"
                defaultMessage="安全好用的{ type }钱包"
                values={{ type: props.coin }}
              />
            </span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-700">
            <FormattedMessage
              id="components.introduction.page.subtitle"
              defaultMessage="您可以在 OneKey 钱包进行 { type } 的转账、收款、存储与交易。"
              values={{ type: props.coin }}
            />
          </p>
          <Link
            href="/download"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-500 sm:w-auto"
          >
            <FormattedMessage
              id="components.introduction.page.download"
              defaultMessage="免费下载"
            />
          </Link>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                {props.title}
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                <FormattedMessage
                  id="components.introduction.contract.us"
                  defaultMessage="还是没搞懂？联系我们的<a>客服</a>"
                  values={{
                    a: (text: string) => (
                      <a
                        href={`https://help.onekey.so/hc/${locale?.toLowerCase()}`}
                        className="font-medium text-green-600 hover:text-green-500"
                      >
                        {text}
                      </a>
                    ),
                  }}
                />
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <div className="space-y-12">
                {props.questions.map((e, i) => {
                  return (
                    <div key={i}>
                      <p className="text-lg leading-6 font-medium text-gray-900">
                        {e.title}
                      </p>
                      <div>{e.answers}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
