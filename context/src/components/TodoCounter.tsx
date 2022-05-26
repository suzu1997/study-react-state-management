import { useTodos } from 'src/hooks/useTodos';

import type { FC } from 'react';

export const TodoCounter: FC = () => {
  const todos = useTodos();

  return <h2>TODO: {todos.length}件</h2>;
};
