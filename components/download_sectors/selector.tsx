import { FormattedMessage } from "react-intl";
import classnames from "classnames";

interface SelectorProps {
  onClick: (type: "ios" | "android" | "desktop" | "bridge") => void;
  type: "ios" | "android" | "desktop" | "bridge";
}

export default function Selector(props: SelectorProps): JSX.Element {
  const { type, onClick } = props;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto pt-24 pb-0 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center capitalize">
            <FormattedMessage
              id="pages.download.selectors.switcher"
              defaultMessage="下载 OneKey 客户端"
            />
          </h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            <FormattedMessage
              id="pages.download.system.support"
              defaultMessage="支持 iOS、Android、macOS、Windows、Linux 操作系统"
            />
          </p>
          <div className="h-10 self-center mt-6 bg-gray-100 rounded-lg p-0.5 sm:mt-8 sm:w-128">
            <div className="relative flex">
              <div
                className={classnames(
                  "absolute h-9 w-1/4 border-gray-200 rounded-md bg-white shadow-sm transition-all ease-out duration-300 top-auto",
                  {
                    "left-0": type === "ios",
                    "left-1/4": type === "android",
                    "left-2/4": type === "desktop",
                    "left-3/4": type === "bridge",
                  }
                )}
                key={new Date().getTime()}
              />
              <button
                onClick={() => onClick("ios")}
                type="button"
                className={classnames(
                  "absolute left-0 w-1/4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none sm:px-8"
                )}
              >
                iOS
              </button>
              <button
                onClick={() => onClick("android")}
                type="button"
                className={classnames(
                  "absolute left-1/4 w-1/4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none sm:px-8"
                )}
              >
                Android
              </button>
              <button
                onClick={() => onClick("desktop")}
                type="button"
                className={classnames(
                  "absolute right-1/4 w-1/4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none sm:px-8"
                )}
              >
                Desktop
              </button>
              <button
                onClick={() => onClick("bridge")}
                type="button"
                className={classnames(
                  "absolute right-0 w-1/4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none sm:px-8"
                )}
              >
                Bridge
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
