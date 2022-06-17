import { FC, useEffect, useState } from 'react';
import { StarIcon } from '../..';
import { UserService } from '../../../service';
import styles from './style.module.scss';

interface StarProps {
  id: string;
  ava: number;
}

export const Star: FC<StarProps> = ({ id, ava }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleAvaliable = (rating: number) => {
    UserService.setAvaliable(id, rating);
    setRating(rating);
  };

  return (
    <div className={styles.star}>
      {[...Array(5)].map((_, index) => {
        index += 1;

        return (
          <button
            type="button"
            key={index}
            className={
              index <= (hover || rating || ava) ? styles['on'] : styles['off']
            }
            onClick={() => handleAvaliable(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <StarIcon />
          </button>
        );
      })}
    </div>
  );
};
