import { AppStorage } from '..';

export const UserService = {
  getFavorites: () => {
    let favs = AppStorage.getValueStorage('favorite_item');

    return favs && JSON.parse(favs);
  },
  setFavorite: (favorite: string) => {
    let favOld = AppStorage.getValueStorage('favorite_item');

    let favNew = favOld && JSON.parse(favOld);

    if (favNew) favNew.push(favorite);
    else favNew = [favorite];

    AppStorage.setValueStorage('favorite_item', JSON.stringify(favNew));
  },
  removeFavorite: (favorite: string) => {
    let favOld = AppStorage.getValueStorage('favorite_item');

    let favNew = favOld && JSON.parse(favOld);

    if (favNew) favNew.pop(favorite);
    else favNew = [];

    AppStorage.setValueStorage('favorite_item', JSON.stringify(favNew));
  },
  getAvaliables: () => {
    let ava = AppStorage.getValueStorage('avaliable_item');

    return ava && JSON.parse(ava);
  },
  setAvaliable: (id: string, rating: number) => {
    const avaliable = { id, rating };

    let avaOld = AppStorage.getValueStorage('avaliable_item');

    let avaNew = avaOld && JSON.parse(avaOld);

    const index = avaNew?.findIndex((obj: any) => {
      return obj.id === id;
    });

    if (!avaNew) {
      avaNew = [avaliable];
    }

    if (avaNew[index]) {
      avaNew[index].rating = rating;
    } else {
      avaNew.push(avaliable);
    }

    AppStorage.setValueStorage('avaliable_item', JSON.stringify(avaNew));
  },
};
