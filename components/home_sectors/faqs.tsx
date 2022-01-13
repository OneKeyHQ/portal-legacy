import { useState, useRef } from "react";
import classnames from "classnames";
import { FormattedMessage } from "react-intl";
import QuestionList from "../../fixtures/questions";

export interface FAQItemProps {
  title: string | JSX.Element;
  answers: string | JSX.Element;
}

function FAQItem(props: FAQItemProps) {
  const [folded, setFolded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleFold = () => setFolded((val) => !val);
  return (
    <div className="pt-6">
      <div
        className="text-2xl"
        onClick={handleFold}
        onKeyPress={handleFold}
        role="button"
        tabIndex={0}
      >
        <p className="text-left w-full flex justify-between items-center text-gray-400 cursor-pointer select-none">
          <span className="font-medium text-gray-900 select-text">
            {props.title}
          </span>
          <span className="ml-6 h-7 flex items-center">
            <svg
              className={classnames("h-6 w-6 transform transition-transform", {
                "-rotate-180": folded,
              })}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </p>
      </div>
      <div
        ref={ref}
        style={{
          height: !folded ? 0 : ref.current && ref.current.scrollHeight + "px",
        }}
        className="mt-2 space-y-4 overflow-hidden transition-all duration-300 ease-in-out"
      >
        {props.answers}
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <FormattedMessage
              id="pages.home.faq.title"
              defaultMessage="常见问题"
            />
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {QuestionList.map((e, i) => {
              return <FAQItem key={i} title={e.title} answers={e.answers} />;
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
