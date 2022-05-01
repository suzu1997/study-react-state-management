import { useContext } from 'react';
import Link from 'next/link';

import { TodoCounter } from './TodoCounter';
import { LangContext, ThemeContext } from 'src/pages/_app';

import type { FC } from 'react';

type PropsType = {
  todoCount: number;
};

export const Header: FC<PropsType> = ({ todoCount }) => {
  const theme = useContext(ThemeContext);
  const lang = useContext(LangContext);
  console.log({ theme, lang });

  return (
    <div>
      <header>
        <nav>
          <h1>
            <Link href='/'>
              <a>React状態管理</a>
            </Link>
          </h1>
          <Link href='/'>
            <a>TODO一覧</a>
          </Link>
          <Link href='/add'>
            <a>TODO追加</a>
          </Link>
        </nav>
        <TodoCounter todoCount={todoCount} />
      </header>
    </div>
  );
};
