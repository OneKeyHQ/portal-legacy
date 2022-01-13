import { useCookies } from "react-cookie";

export default function useCookieLocale(): string {
  const [cookies] = useCookies(["NEXT_LOCALE"]);
  return cookies.NEXT_LOCALE || cookies.locale || "zh-CN";
}
