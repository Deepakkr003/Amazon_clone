import { formatCurrency } from "../../scripts/utils/money.js";

describe ('test suite: formatCurrency', () => {
  it('converts cents to dollars', () => {
    expect(formatCurrency(2095)).toBe('20.95');
  });

  it('works with 0', () => {
    expect(formatCurrency(0)).toBe('0.00');
  });

  it('rounds to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toBe('20.01');
  });
});