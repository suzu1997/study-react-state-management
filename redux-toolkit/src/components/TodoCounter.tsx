import { useSelector } from 'react-redux';

import type { FC } from 'react';
import type { Rootstate } from 'src/state';

export const TodoCounter: FC = () => {
  const todos = useSelector((state: Rootstate) => state.todos);
  
  return <h2>TODO: {todos.length}件</h2>;
};
