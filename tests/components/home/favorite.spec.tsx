import { render, screen } from '@testing-library/react';
import { Favorite } from '../../../src/components/home/favorite/favorite.component';

describe('Component Favorite tests', () => {
  const fn = jest.fn();

  const createWrapper = (fav: boolean) => {
    return render(<Favorite id="1" fav={fav} callbackFavorite={fn} />);
  };

  it('should have a favorite checked', () => {
    const wrapper = createWrapper(true);

    expect(
      wrapper.container
        .getElementsByClassName('fa-heart')[0]
        .getAttribute('data-prefix')
    ).toBe('fas');
  });

  it('should have a favorite unchecked', () => {
    const wrapper = createWrapper(false);

    expect(
      wrapper.container
        .getElementsByClassName('fa-heart')[0]
        .getAttribute('data-prefix')
    ).toBe('far');
  });
});
