import { createContext, useCallback, useMemo, useState } from 'react';

import type { FC, ReactNode } from 'react';
import type { Todo } from 'src/types';

const TODOS = [
  { id: 1, title: 'Todo1', isDone: false },
  { id: 2, title: 'Todo2', isDone: true },
];

// Contextは、更新系と参照系に分けるべし！(パフォーマンスの観点から)
// NOTE: https://zenn.dev/takepepe/articles/context-custom-hooks#1.%E3%80%8C%E7%8A%B6%E6%85%8B%E5%8F%82%E7%85%A7%E7%B3%BB%E3%83%BB%E6%9B%B4%E6%96%B0%E7%B3%BB%E3%80%8D%E3%81%A7-context-%E3%81%AF%E4%BA%8C%E5%88%86%E5%89%B2%E3%81%99%E3%82%8B

// 状態参照系context
export const TodosContext = createContext<Todo[]>(TODOS);

// 状態更新系context
// 更新系にはdispatchという単語が使われることが多い
export const TodosDispatchContext = createContext<{
  toggleIsDone: (id: Todo['id']) => void;
  addTodo: (text: Todo['title']) => void;
}>({
  toggleIsDone: () => {
    // NOTE: 関数の初期値は() => undefined か、
    // 呼ばれるはずのないものである(上書きされるべき)ため、Errorを投げる
    throw Error('No default value!');
  },
  addTodo: () => {
    throw Error('No default value!');
  },
});

export const TodosProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  // 呼び出されたタイミングで再生成・再レンダリングが起きないよう、useCallbackで囲む
  const toggleIsDone = useCallback((id: Todo['id']) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
  }, []);

  const addTodo = useCallback((text: Todo['title']) => {
    setTodos((prevTodos) => {
      const id = prevTodos.length + 1;
      const newTodo = { id, title: text, isDone: false };
      return [...prevTodos, newTodo];
    });
  }, []);

  // そのまま渡してしまうと呼び出しのたびに再生成されるので、useMemoで囲む
  const todosDispatchValue = useMemo(() => {
    return { toggleIsDone, addTodo };
  }, [toggleIsDone, addTodo]);

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={todosDispatchValue}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};
