import { useCallback, useEffect, useRef, useState } from "react";
import { isFunction } from "./utils";

export const useUpdateEffect = (effect, deps) => {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
    } else {
      effect();
    }
  }, [deps, effect]);
};

export type IFuncUpdater<T> = (previousState?: T) => T;

export type StorageStateResult<T> = [
  T | undefined,
  (value?: T | IFuncUpdater<T>) => void
];

export function createUseStorageState(nullishStorage: Storage | null) {
  const useStorageState = <T>(
    key: string,
    defaultValue?: T | IFuncUpdater<T>
  ): StorageStateResult<T> => {
    const storage = nullishStorage;
    const [state, setState] = useState<T | undefined>(() => getStoredValue());
    useUpdateEffect(() => {
      setState(getStoredValue());
    }, key);

    const getStoredValue = useCallback(() => {
      const raw = storage.getItem(key);
      if (raw) {
        try {
          return JSON.parse(raw);
        } catch (e) {
          //
        }
      }
      if (isFunction<IFuncUpdater<T>>(defaultValue)) {
        return defaultValue();
      }
      return defaultValue;
    }, [storage, key, defaultValue]);

    const updateState = useCallback(
      (value?: T | IFuncUpdater<T>) => {
        if (typeof value === "undefined") {
          storage.removeItem(key);
          setState(undefined);
        } else if (isFunction<IFuncUpdater<T>>(value)) {
          const previousState = getStoredValue();
          const currentState = value(previousState);
          storage.setItem(key, JSON.stringify(currentState));
          setState(currentState);
        } else {
          storage.setItem(key, JSON.stringify(value));
          setState(value);
        }
      },
      [key, getStoredValue, storage]
    );

    return [state, updateState];
  };

  if (!nullishStorage) {
    return function (_: string, defaultValue: any) {
      return [
        isFunction<IFuncUpdater<any>>(defaultValue)
          ? defaultValue()
          : defaultValue,
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => {},
      ];
    } as typeof useStorageState;
  }
  return useStorageState;
}

export const useStorageState = createUseStorageState(
  typeof window === "object" ? window.localStorage : null
);

export function useDebounceValue<T>(value: T, delay = 233) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

export function useThrottle(
  fn: (...args: any[]) => void,
  timeout = 300
): [(...args: any[]) => any, boolean] {
  const [ready, setReady] = useState(true);
  const timerRef = useRef<number | undefined>(undefined);

  if (!fn || typeof fn !== "function") {
    throw new Error(
      "As a first argument, you need to pass a function to useThrottle hook."
    );
  }

  const throttledFn = useCallback(
    (...args: any[]) => {
      if (!ready) {
        return;
      }

      setReady(false);
      fn(...args);
    },
    [ready, fn]
  );

  useEffect(() => {
    if (!ready) {
      timerRef.current = window.setTimeout(() => {
        setReady(true);
      }, timeout);
      return () => window.clearTimeout(timerRef.current);
    }
  }, [ready, timeout]);
  return [throttledFn, ready];
}
