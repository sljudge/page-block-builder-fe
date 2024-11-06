/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

class Console {
  log(...args: any[]): void {
    if (process.env.NODE_ENV !== 'production') {
      console.log(...args);
    }
  }

  info(...args: any[]): void {
    if (process.env.NODE_ENV !== 'production') {
      console.info(...args);
    }
  }

  warn(...args: any[]): void {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(...args);
    }
  }

  error(...args: any[]): void {
    if (process.env.NODE_ENV !== 'production') {
      console.error(...args);
    }
  }

  debug(...args: any[]): void {
    if (process.env.NODE_ENV !== 'production') {
      console.debug(...args);
    }
  }
}

const Export = new Console();

export default Export;
