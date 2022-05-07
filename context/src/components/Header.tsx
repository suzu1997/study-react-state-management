import Link from 'next/link';

import { TodoCounter } from './TodoCounter';

import type { FC } from 'react';

export const Header: FC = () => {
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
        <TodoCounter />
      </header>
    </div>
  );
};
