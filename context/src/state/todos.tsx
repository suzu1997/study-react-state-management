import { createContext, useState } from 'react';

import type { Dispatch, SetStateAction, FC, ReactNode } from 'react';
import type { Todo } from 'src/types';

const TODOS = [
  { id: 1, title: 'Todo1', isDone: false },
  { id: 2, title: 'Todo2', isDone: true },
];

export const TodosContext = createContext<{
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}>({
  todos: TODOS,
  setTodos: () => {
    // NOTE: 関数の初期値は() => undefined か、
    // 呼ばれるはずのないものであるため、Errorを投げる
    throw Error('No default value!');
  },
});

export const TodosProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};
