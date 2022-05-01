import { Header } from './Header';

import type { FC, ReactNode } from 'react';
import type { Todo } from 'src/types';

type PropsType = {
  todos: Todo[];
  children: ReactNode;
};

export const Layout: FC<PropsType> = ({ todos, children }) => {
  return (
    <>
      <Header todoCount={todos.length} />
      <main>{children}</main>
    </>
  );
};
