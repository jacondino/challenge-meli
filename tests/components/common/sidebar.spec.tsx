import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from '../../../src/components';

describe('Component Sidebar tests', () => {
  const fn = jest.fn();

  const createWrapper = () => {
    return render(
      <Sidebar isOpen={true} callbackClose={fn}>
        <Sidebar.Item id="1" onClick={fn} text="test1" selected="1" />
        <Sidebar.Item id="2" onClick={fn} text="test2" selected="" />
      </Sidebar>
    );
  };

  it('should have a two items', () => {
    const { container } = createWrapper();

    const button = container.getElementsByClassName('button');

    expect(button.length).toBe(2);
  });

  it('should have a item selected', () => {
    const { container } = createWrapper();

    const button = container.getElementsByClassName('sidebar__selected');

    expect(button.length).toBe(1);
  });

  it('should change item selected', () => {
    const { container } = createWrapper();

    const buttons = container.getElementsByClassName('button');

    fireEvent.click(buttons[1], {
      target: {
        value: '2',
      },
    });

    expect(fn.mock.calls.join()).toEqual('2');
  });
});
