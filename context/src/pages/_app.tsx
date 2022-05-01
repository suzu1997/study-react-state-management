import { createContext, useState } from 'react';

import { Layout } from 'src/components/Layout';

import type { AppProps } from 'next/app';
import type { Todo } from 'src/types';

const TODOS = [
  { id: 1, title: 'Todo1', isDone: false },
  { id: 2, title: 'Todo2', isDone: true },
];

export const ThemeContext = createContext('light');
export const LangContext = createContext('ja');

export default function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>(TODOS);
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('ja');

  return (
    <ThemeContext.Provider value={theme}>
      <LangContext.Provider value={lang}>
        <Layout todos={todos}>
          <button
            onClick={() =>
              setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
            }
          >
            テーマ切り替え
          </button>
          <button
            onClick={() => setLang((prev) => (prev === 'ja' ? 'en' : 'ja'))}
          >
            言語切り替え
          </button>
          <Component {...pageProps} todos={todos} setTodos={setTodos} />
        </Layout>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}
