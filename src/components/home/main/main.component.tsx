import { FC, memo, ReactElement, useEffect, useState } from 'react';
import { UserService } from '../../../service';
import { NumberUtils } from '../../../utils';
import { Star } from '../../';
import styles from './style.module.scss';
import { Favorite } from '../favorite/favorite.component';

interface ItemProps {
  id: string;
  thumbnail: string;
  description: string;
  price: number;
}

interface MainProps {
  children: ReactElement | ReactElement[];
}

const Item: FC<ItemProps> = memo(({ thumbnail, description, price, id }) => {
  const [fav, setFav] = useState(false);
  const [ava, setAva] = useState(0);

  useEffect(() => {
    handleFavInit();
    handleAvaInit();
  }, []);

  const handleFavInit = () => {
    const favorites = UserService.getFavorites();
    const favoriteFind = favorites?.find((favId: string) => favId === id);

    if (favoriteFind) {
      setFav(true);
    }
  };

  const handleAvaInit = () => {
    const avas = UserService.getAvaliables();
    const avaFind = avas?.find((avaId: any) => avaId.id === id);

    if (avaFind) {
      setAva(avaFind.rating);
    }
  };

  return (
    <article className={styles['main__item']}>
      <Favorite id={id} fav={fav} callbackFavorite={(e) => setFav(e)} />
      <div className={styles['main__item__img']}>
        <img src={thumbnail} />
      </div>
      <Star id={id} ava={ava} />
      {description}
      <span className={styles['main__item__price']}>
        <b>{NumberUtils.toCurrency(price)}</b>
      </span>
    </article>
  );
});

export const Main = ({ children }: MainProps) => {
  return <main className={styles.main}>{children}</main>;
};

Main.Item = Item;
