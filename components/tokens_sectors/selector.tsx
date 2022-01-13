import { FormattedMessage } from "react-intl";
import classnames from "classnames";

export type TokenType = "heco" | "bsc" | "eth";

interface SelectorProps {
  onClick: (type: TokenType) => void;
  type: TokenType;
}

export default function Selector(props: SelectorProps): JSX.Element {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
            <FormattedMessage
              id="pages.token.selectors.switcher"
              defaultMessage="Tokens 列表"
            />
          </h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            <FormattedMessage
              id="pages.token.support"
              defaultMessage="支持 ETH, BSC 和 HECO 链上的代币"
            />
          </p>
          <div className="h-10 self-center mt-6 bg-gray-100 rounded-lg p-0.5 sm:mt-8 sm:w-96">
            <div className="relative flex">
              <div
                className={classnames(
                  "absolute h-9 w-1/3 border-gray-200 rounded-md bg-white shadow-sm transition-all ease-out duration-1000 top-auto",
                  {
                    "left-0": props.type === "bsc",
                    "left-1/3": props.type === "heco",
                    "left-2/3": props.type === "eth",
                  }
                )}
              />
              <button
                onClick={() => props.onClick("bsc")}
                type="button"
                className={classnames(
                  "absolute left-0 w-1/3 py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none sm:px-8"
                )}
              >
                BSC
              </button>
              <button
                onClick={() => props.onClick("heco")}
                type="button"
                className={classnames(
                  "absolute right-1/3 w-1/3 py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none sm:px-8"
                )}
              >
                HECO
              </button>
              <button
                onClick={() => props.onClick("eth")}
                type="button"
                className={classnames(
                  "absolute right-0 w-1/3 py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none sm:px-8"
                )}
              >
                ETH
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
