import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { init as initSentry } from "../utils/sentry";
import CookieBanner from "../components/universal/cookie_banner";
import { useEffect, useState } from "react";
import { KEY_ACCEPT_COOKIE } from "../utils/constants";
import BackTop from "../components/universal/back_top";
import IntlProvider from "../components/universal/IntlProvider";
import localeMessages from "../locales";
import useCookieLocale from "../libs/hooks/getNextLocale";

// Sentry initialization
initSentry();

export default function App({ Component, pageProps }) {
  const cookieLocale = useCookieLocale();
  const [acceptBefore, setAcceptBefore] = useState(false);

  useEffect(() => {
    const row = localStorage.getItem(KEY_ACCEPT_COOKIE);
    setAcceptBefore(JSON.parse(row));
  }, []);

  const handleAcceptCookie = () => {
    localStorage.setItem(KEY_ACCEPT_COOKIE, JSON.stringify(true));
    setAcceptBefore(true);
  };

  useEffect(() => {
    if (window.zE) {
      if (cookieLocale === "en-US") {
        window.zE("webWidget", "setLocale", "en-us");
        window.zE("webWidget:on", "open", function () {
          window?.zE("webWidget", "helpCenter:setSuggestions", {
            search: "top",
          });
        });
      } else {
        window.zE("webWidget", "setLocale", "zh-cn");
        window.zE("webWidget:on", "open", function () {
          window.zE("webWidget", "helpCenter:setSuggestions", {
            search: "常见问题",
          });
        });
      }
    }
  }, [cookieLocale]);

  return (
    <div className="relative">
      <IntlProvider
        locale={cookieLocale}
        messages={localeMessages[cookieLocale]}
      >
        <Component {...pageProps} />
        <NextNProgress
          color="#00AA11"
          startPosition={0.3}
          stopDelayMs={333}
          options={{ showSpinner: false }}
        />
        {typeof window !== "undefined" && !acceptBefore && (
          <CookieBanner onConfirm={handleAcceptCookie} />
        )}
        <BackTop />
      </IntlProvider>
    </div>
  );
}
