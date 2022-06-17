import { render, fireEvent, act } from '@testing-library/react';
import { Header } from '../../../src/components';

describe('Component Header tests', () => {
  const fn = jest.fn();

  const createWrapper = () => {
    return render(<Header callbackSidebar={fn} onClick={fn} />);
  };

  it('should have search the value after click in button', () => {
    const wrapper = createWrapper();

    const input = wrapper.getByPlaceholderText(
      /Buscar produtos/i
    ) as HTMLInputElement;

    const button = wrapper.container.getElementsByClassName('button')[0];

    fireEvent.change(input, {
      target: {
        value: 'test',
      },
    });

    fireEvent.click(button);

    expect(fn.mock.calls.join()).toBe('test');
    expect(input.value).toBe('test');
  });

  it('should have sidebar button in mobile', () => {
    act(() => {
      window.innerWidth = 500;
      fireEvent(window, new Event('resize'));
    });

    const wrapper = createWrapper();

    expect(
      wrapper.container.getElementsByClassName('headerHome__sideBarButton')
    ).toBeTruthy();
  });
});
