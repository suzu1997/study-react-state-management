import { createContext, useState } from 'react';

import { Layout } from 'src/components/Layout';

import type { AppProps } from 'next/app';
import type { Dispatch, SetStateAction } from 'react';
import type { Todo } from 'src/types';

const TODOS = [
  { id: 1, title: 'Todo1', isDone: false },
  { id: 2, title: 'Todo2', isDone: true },
];

export const TodoContext = createContext<{
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

export default function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TodoContext.Provider>
  );
}
