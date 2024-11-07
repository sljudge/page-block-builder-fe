import debounce from '../debounce';

describe('debounce', () => {
  it('Execute just once', () => {
    jest.useFakeTimers();
    const func = jest.fn();
    const debouncedFunc = debounce(func, 500);

    // Execute for the first time
    debouncedFunc();

    // Move on the timer
    jest.advanceTimersByTime(250);
    // try to execute a 2nd time
    debouncedFunc();

    // Fast-forward time
    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(1);
  });
  it('Execute twice', () => {
    jest.useFakeTimers();
    const func = jest.fn();
    const debouncedFunc = debounce(func, 500);

    // Execute for the first time
    debouncedFunc();

    // Move on the timer
    jest.advanceTimersByTime(600);
    // try to execute a 2nd time
    debouncedFunc();

    // Fast-forward time
    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(2);
  });
});
