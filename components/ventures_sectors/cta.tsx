import { FormattedMessage } from "react-intl";

export default function CTA() {
  return (
    <div className="bg-green-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">
            <FormattedMessage
              defaultMessage="让社会的变革沿着最小阻力发生"
              id="pages.ventures_sectors.cta.title1"
            />
          </span>
          <span className="block">
            <FormattedMessage
              defaultMessage="现在就行动，申请 OneKey Venture"
              id="pages.ventures_sectors.cta.title2"
            />{" "}
          </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-green-200">
          <FormattedMessage
            defaultMessage="如果有进一步消息，我们会在7个工作日内完成回复"
            id="pages.ventures_sectors.cta.title3"
          />
        </p>
        <a
          href="mailto:hi@onekey.so"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-2xl font-medium rounded-md text-green-600 bg-white hover:bg-indigo-50 sm:w-auto"
        >
          <FormattedMessage
            defaultMessage="申请"
            id="pages.ventures_sectors.cta.apply"
          />
        </a>
      </div>
    </div>
  );
}
