import { NumberUtils } from '../../../src/utils';

describe('Component NumberUtils tests', () => {
  it('should convert number in R$', () => {
    const returnedValue = NumberUtils.toCurrency(80.3);

    expect(returnedValue).toBe('R$ 80,30');
  });
});
