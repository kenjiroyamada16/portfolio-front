export function debouncer<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeoutId: number | undefined;

  return function (this: any, ...args: Parameters<T>) {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = window.setTimeout(() => {
      func.apply(this, args);
    }, delay);
  } as T;
}
