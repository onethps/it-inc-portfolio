import React, { FC, ReactNode } from 'react';
import s from './Layout.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import ScrollToTopButton from '../../common/ScrollToTopButton/ScrollToTopButton';

const Layout: FC<ReactNode> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className={s.container}>
        <div className={s.wrapper}>{children}</div>
      </main>
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
