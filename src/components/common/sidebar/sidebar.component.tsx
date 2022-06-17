import { FC, memo, ReactElement, useEffect, useState } from 'react';
import styles from './style.module.scss';
import { Button, CloseIcon } from '../../';

interface SidebarProps {
  children: ReactElement | ReactElement[];
  isOpen: boolean;
  callbackClose(): void;
}

interface ItemProps {
  id: string;
  text: string;
  onClick(id: string): void;
  selected?: string;
}

const Item: FC<ItemProps> = memo(({ id, text, onClick, selected }) => {
  return (
    <li className={selected === id ? styles['sidebar__selected'] : ''}>
      <Button label={text} color="transparent" onClick={() => onClick(id)} />
    </li>
  );
});

export const Sidebar = ({ children, isOpen, callbackClose }: SidebarProps) => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const isMobileView = window.innerWidth <= 1024;

    setMobile(isMobileView);
  }, []);

  return (
    <aside
      className={`${styles['sidebar']} ${
        isOpen ? `${styles.open}` : `${styles.close}`
      }`}
    >
      <div className={`${styles['sidebar__close']}`}>
        {isMobile && (
          <span onClick={() => callbackClose()}>
            <CloseIcon />
          </span>
        )}
        <h3>Categories</h3>
      </div>
      <nav>
        <ul>{children}</ul>
      </nav>
    </aside>
  );
};

Sidebar.Item = Item;
