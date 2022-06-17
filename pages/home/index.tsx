import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { Header, Sidebar, Main, Loader } from '../../src/components';
import { AppStorage, CategoryService, SearchService } from '../../src/service';
import styles from './style.module.scss';

type CategoryType = {
  id: string;
  name: string;
};

type ItemType = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
};

export const Home = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [categorieSelected, setCategorieSelected] = useState<string>('');
  const [items, setItems] = useState<ItemType[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingItem, setLoadingItem] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const firstCategoryId = 'MLB5672';

  useEffect(() => {
    setLoading(true);
    const token = AppStorage.getValueStorage('access-token');

    if (token) getAll();
    else router.push('/redirect');
  }, []);

  useEffect(() => {
    if (categorieSelected) {
      setLoadingItem(true);

      getItemsByCategoryId(categorieSelected)
        .then((res) => {
          res?.items?.data.results && setItems(res?.items.data.results);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => setLoadingItem(false));
    }
  }, [categorieSelected]);

  const getAll = async () => {
    return await Promise.all([
      getCategories(),
      getItemsByCategoryId(firstCategoryId),
    ])
      .then((values) => {
        values.forEach((item: any) => {
          item?.categories?.data && setCategories(item?.categories.data);
          item?.items?.data.results && setItems(item?.items.data.results);
        });
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setLoading(false));
  };

  const getCategories = async () => {
    return await CategoryService.getCategories();
  };

  const getItemsByCategoryId = async (id: string) => {
    return await CategoryService.getItemsByCategoryId(id);
  };

  const handleCategory = useCallback(
    (id: string) => {
      setCategorieSelected(id);
      setIsOpen(false);
    },
    [setCategorieSelected]
  );

  const handleSearch = async (value: string) => {
    setLoadingItem(true);

    await SearchService.getItemsBySearch(value)
      .then((res) => {
        res?.data.results && setItems(res?.data.results);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setLoadingItem(false));
  };

  return loading ? (
    <Loader />
  ) : (
    <div className={styles.home}>
      <Header
        onClick={(search) => handleSearch(search)}
        callbackSidebar={() => setIsOpen(!isOpen)}
      />
      <Sidebar isOpen={isOpen} callbackClose={() => setIsOpen(false)}>
        {categories &&
          categories.map((category: CategoryType) => (
            <Sidebar.Item
              key={category.id}
              id={category.id}
              text={category.name}
              onClick={(id) => handleCategory(id)}
              selected={categorieSelected ? categorieSelected : firstCategoryId}
            />
          ))}
      </Sidebar>
      <Main>
        {loadingItem ? (
          <Loader />
        ) : (
          items &&
          items.map((item) => (
            <Main.Item
              key={item.id}
              id={item.id}
              description={item.title}
              thumbnail={item.thumbnail}
              price={item.price}
            />
          ))
        )}
      </Main>
    </div>
  );
};

export default Home;
