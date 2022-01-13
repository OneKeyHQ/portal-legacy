import React, { useState, useEffect, useMemo } from "react";
import {
  createIntl,
  createIntlCache,
  RawIntlProvider,
  IntlConfig,
} from "react-intl";
import cookie from "js-cookie";
import localeMessages from "../../locales";
import { useCookies } from "react-cookie";

type localeType = IntlConfig["locale"];
type messagesType = IntlConfig["messages"];

interface ContextProps {
  setLocale: (locale: localeType) => void;
  locale: localeType;
  messages: messagesType;
}

const LocaleContext = React.createContext<any>({});

export const useLocale = () => React.useContext<ContextProps>(LocaleContext);

const cache = createIntlCache();

const IntlProvider: React.FC<Pick<ContextProps, "locale" | "messages">> = ({
  children,
  locale,
  messages,
}) => {
  const [intl, setIntl] = useState(createIntl({ locale, messages }, cache));
  const [cookies, setCookie] = useCookies(["NEXT_LOCALE"]);

  const value = useMemo(() => {
    const setLocale = async (nextLocale: localeType) => {
      // only triggered by used in this case go and fetch new locale data
      const nextMessages = await localeMessages[nextLocale];
      setIntl(
        createIntl({ locale: nextLocale, messages: nextMessages }, cache)
      );
      cookie?.set("locale", nextLocale, { expires: 7 });
      setCookie("NEXT_LOCALE", nextLocale, {
        path: "/",
        maxAge: 86400 * 7, // Expires after 7d
        sameSite: true,
      });
    };
    return {
      setLocale,
      locale: intl.locale,
    };
  }, [setCookie, intl.locale]);

  useEffect(() => {
    setIntl(createIntl({ locale, messages }, cache));
  }, [locale, messages]);

  return (
    <LocaleContext.Provider value={value}>
      <RawIntlProvider value={intl}>{children}</RawIntlProvider>
    </LocaleContext.Provider>
  );
};
export default IntlProvider;
