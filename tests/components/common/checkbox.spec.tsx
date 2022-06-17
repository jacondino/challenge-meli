import { render, screen } from '@testing-library/react';
import { Checkbox } from '../../../src/components';

describe('Component Checkbox tests', () => {
  const fn = jest.fn();

  const createWrapper = (value: boolean) => {
    render(<Checkbox label="test" value={value} onChange={() => fn} />);
  };

  it('should have a checkbox not checked', () => {
    createWrapper(false);

    const input = screen.getByRole('checkbox');

    expect(input).not.toBeChecked();
  });

  it('should have a checkbox checked', () => {
    createWrapper(true);

    const input = screen.getByRole('checkbox');

    expect(input).toBeChecked();
  });
});
