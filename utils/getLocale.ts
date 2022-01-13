import cookie from "js-cookie";

const acceptLanguages = ["zh-CN", "en-US"];
const defaultLocale = acceptLanguages[0];

const getLocale = () => {
  try {
    if (typeof window === "undefined") {
      return defaultLocale;
    }

    let locale = defaultLocale;

    // check if user has set locale
    const systemLocale =
      cookie.get("NEXT_LOCALE") ||
      cookie.get("locale") ||
      (typeof navigator !== "undefined" && navigator.language) ||
      defaultLocale;
    locale = acceptLanguages.includes(systemLocale)
      ? systemLocale
      : defaultLocale;
    cookie.set("locale", locale, { expires: 365 });
    return locale;
  } catch (error) {
    console.error(error);
    return defaultLocale;
  }
};

export default getLocale;
