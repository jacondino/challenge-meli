import { FC } from 'react';
import { HeartIcon, HeartRegularIcon } from '../..';
import { UserService } from '../../../service';
import styles from './style.module.scss';

interface FavoriteProps {
  id: string;
  fav: boolean;
  callbackFavorite(e: boolean): void;
}

export const Favorite: FC<FavoriteProps> = ({ id, fav, callbackFavorite }) => {
  const handleAddFavorite = () => {
    UserService.setFavorite(id);
    callbackFavorite(true);
  };

  const handleRemoveFavorite = () => {
    UserService.removeFavorite(id);
    callbackFavorite(false);
  };

  return (
    <span
      className={styles.favorite}
      onClick={() => (fav ? handleRemoveFavorite() : handleAddFavorite())}
    >
      {fav ? <HeartIcon /> : <HeartRegularIcon />}
    </span>
  );
};
