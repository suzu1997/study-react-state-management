import { useState } from 'react';

import { Layout } from 'src/components/Layout';

import type { AppProps } from 'next/app';
import type { Todo } from 'src/types';

const TODOS = [
  { id: 1, title: 'Todo1', isDone: false },
  { id: 2, title: 'Todo2', isDone: true },
];

export default function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  return (
    <>
      {/* <Header todos={todos} /> */}
      <Layout todos={todos}>
        <Component {...pageProps} todos={todos} setTodos={setTodos} />
      </Layout>
    </>
  );
}
