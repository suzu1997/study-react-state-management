import { useContext } from 'react';

import { TodosContext } from 'src/state/todos';

import type { FC } from 'react';

export const TodoCounter: FC = () => {
  const { todos } = useContext(TodosContext);

  return <h2>TODO: {todos.length}件</h2>;
};
