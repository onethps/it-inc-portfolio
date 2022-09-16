import React, { FC, ReactNode } from 'react';
import s from './Layout.module.scss';
import Sidebar from '../Sidebar/Sidebar';

const Layout: FC<ReactNode> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className={s.main}>{children}</main>
    </>
  );
};

export default Layout;
