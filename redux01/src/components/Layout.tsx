import { Header } from './Header';

import type { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
};

export const Layout: FC<PropsType> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
