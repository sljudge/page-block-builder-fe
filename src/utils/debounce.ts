/* eslint-disable @typescript-eslint/no-explicit-any */
const debounce = <T extends (...args: any[]) => ReturnType<T>>(
  callback: T,
  timeout = 500
): ((...args: Parameters<T>) => void) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};

export default debounce;
