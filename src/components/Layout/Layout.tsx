import ScrollToTopButton from 'common/ScrollToTopButton/ScrollToTopButton';
import Sidebar from 'components/Sidebar/Sidebar';
import React, { FC, ReactNode } from 'react';

import s from './Layout.module.scss';

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
