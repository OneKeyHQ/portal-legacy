export function getUserAgent(ctx) {
  return ctx.req
    ? ctx.req.headers["user-agent"]
    : typeof navigator !== "undefined" && navigator.userAgent;
}

function normalizePath(path?: string) {
  return path ? path.replace(/^\/|\/$/g, "") : "";
}

export const HELP_LINK = "https://help.onekey.so/hc";

interface LinkParams {
  path?: string;
  locale?: string;
}

export function toHelpLink({ path = "", locale = "zh-cn" }: LinkParams = {}) {
  // Replace all "_" to "-"
  const normalizedLocale = locale.replace(/_/g, "-").toLowerCase();
  // Remvoe the first and last "/" char
  const normalizedPath = normalizePath(path);
  const finalHref = `${HELP_LINK}/${normalizedLocale}/${normalizedPath}`;
  // In case theres no path at the end, remove the last '/' char
  return normalizePath(finalHref);
}

export function isFunction<T>(obj: any): obj is T {
  return typeof obj === "function";
}

export function getParameterByName(name, url = window.location.href) {
  // eslint-disable-next-line no-param-reassign
  name = name.replace(/[\[\]]/g, "\\$&");
  let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  let results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
