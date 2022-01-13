import localforage from "localforage";

export async function getStorageItem(key: string) {
  try {
    const serializedData = (await localforage.getItem(key)) as string;
    if (serializedData === null) {
      return undefined;
    }

    return JSON.parse(serializedData);
  } catch (err) {
    return undefined;
  }
}

export async function setStorageItem(
  key: string,
  value: Record<string, unknown>
) {
  try {
    const serializedData = JSON.stringify(value);
    await localforage.setItem(key, serializedData);
  } catch (err) {
    console.warn(err);
  }
}
