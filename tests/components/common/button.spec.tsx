import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../../../src/components';

describe('Component Button tests', () => {
  const fn = jest.fn();

  const createWrapper = ({
    label = 'test',
    size = 'primary',
    color = 'medium',
  }) => {
    const customArgs: any = {
      label,
      size,
      color,
    };

    return render(<Button {...customArgs} onClick={fn} />);
  };

  it('should have a click in button', () => {
    createWrapper({});
    const button = screen.getByRole('button', { name: /test/i });

    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should have a button with text, size medium and primary color', () => {
    createWrapper({});

    const button = screen.getByRole('button', { name: /test/i });

    expect(button).toBeInTheDocument();
  });

  it('should have a button with text, size large and transparent background color', () => {
    createWrapper({ size: 'large', color: 'tranparent' });

    const button = screen.getByRole('button', { name: /test/i });

    expect(button).toHaveClass('button__large');
    expect(button).toHaveClass('button__tranparent');
  });

  it('should have a button with text, size small and secondary color', () => {
    createWrapper({ size: 'small', color: 'secondary' });

    const button = screen.getByRole('button', { name: /test/i });

    expect(button).toHaveClass('button__small');
    expect(button).toHaveClass('button__secondary');
  });
});
