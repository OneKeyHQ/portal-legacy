import classNames from "classnames";
import React from "react";
import { FormattedMessage } from "react-intl";

export default function AlaphaEntry() {
  return (
    <div className="relative py-3 bg-green-nft-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <p className="text-white font-semibold text-base leading-8 mr-10">
          <FormattedMessage id="web__banner__entry_desc" />
        </p>

        <a
          rel="noreferrer"
          href="https://github.com/OneKeyHQ/app-monorepo/releases"
          className={classNames(
            "px-3 py-2 border border-transparent rounded shadow-sm text-green-nft-500 bg-white cursor-pointer",
            "text-base md:text-xs font-bold text-center",
            "w-full md:w-auto h-12 md:h-10 align-middle flex items-center justify-center"
          )}
        >
          <FormattedMessage id="web__banner_entry_back_it" />
        </a>
      </div>
    </div>
  );
}
