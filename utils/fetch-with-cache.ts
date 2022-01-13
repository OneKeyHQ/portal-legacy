import fetch from "node-fetch";
import { getStorageItem, setStorageItem } from "./storage-helpers";

export const fetchWithCache = async (
  url: string,
  { cacheRefreshTime = 360000 } = {}
) => {
  const currentTime = Date.now();
  const cacheKey = `cached:${url}`;
  const { cachedResponse, cachedTime } = (await getStorageItem(cacheKey)) || {};
  if (cachedResponse && currentTime - cachedTime < cacheRefreshTime) {
    return cachedResponse;
  }
  const response = await fetch(url, { method: "GET" });
  if (!response.ok) {
    throw new Error(
      `Fetch failed with status '${response.status}': '${response.statusText}'`
    );
  }
  const responseJson = await response.json();
  const cacheEntry = {
    cachedResponse: responseJson,
    cachedTime: currentTime,
  };

  setStorageItem(cacheKey, cacheEntry);
  return responseJson;
};
