import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../../../src/components';

describe('Component Inpus tests', () => {
  const fn = jest.fn();

  const createWrapper = () => {
    render(
      <Input onChange={fn} value={'testing'} placeholder={'placeholder'} />
    );
  };

  it('should have a value', () => {
    createWrapper();

    const input = screen.getByPlaceholderText(
      /placeholder/i
    ) as HTMLInputElement;

    expect(input.value).toBe('testing');
  });

  it('should change a value', async () => {
    createWrapper();

    const input = screen.getByPlaceholderText(
      /placeholder/i
    ) as HTMLInputElement;

    fireEvent.change(input, {
      target: {
        value: 'test',
      },
    });

    expect(fn.mock.calls.join()).toEqual('test');
  });
});
