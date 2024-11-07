import genNumInRange from '../genNumInRange';

describe('genNumInRange', () => {
  it('is within range', () => {
    const min = 0;
    const max = 100;
    const randomInt = genNumInRange(min, max);
    expect(Number.isInteger(randomInt)).toBeTruthy();
    expect(randomInt).toBeGreaterThan(min);
    expect(randomInt).toBeLessThan(max);
  });
});
