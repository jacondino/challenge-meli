import { FC, useCallback, useEffect, useState } from 'react';
import styles from './style.module.scss';
import logo from '/public/images/ml.png';
import Image from 'next/image';
import { Button, Input, SearchIcon, UserIcon, BarsIcon } from '../..';

interface HeaderProps {
  onClick(value: string): void;
  callbackSidebar(): void;
}

export const Header: FC<HeaderProps> = ({ onClick, callbackSidebar }) => {
  const [search, setSearch] = useState('');
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const isMobileView = window.innerWidth <= 1024;

    setMobile(isMobileView);
  }, []);

  const handleSearch = useCallback(
    (value: string) => setSearch(value ?? ''),
    [setSearch]
  );

  return (
    <header className={styles.headerHome}>
      <Image src={logo} width={120} height={17} />
      <div className={styles['headerHome__search']}>
        <Input
          type="text"
          placeholder="Buscar produtos"
          value={search}
          onChange={(value) => handleSearch(value)}
          required
        />
        <Button label={<SearchIcon />} onClick={() => onClick(search)} />
      </div>
      <div className={styles['headerHome__user']}>
        <UserIcon />
      </div>
      {isMobile && (
        <div className={styles['headerHome__sideBarButton']}>
          Categories
          <span onClick={() => callbackSidebar()}>
            <BarsIcon />
          </span>
        </div>
      )}
    </header>
  );
};
