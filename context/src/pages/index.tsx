import { useTodosDispatch } from 'src/hooks/useTodosDispatch';
import { useTodos } from 'src/hooks/useTodos';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const todos = useTodos();
  const { toggleIsDone } = useTodosDispatch();

  return (
    <div>
      <h3>Todo一覧</h3>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <label style={{ fontSize: '1.5rem' }}>
              <input
                type='checkbox'
                checked={todo.isDone}
                onChange={() => toggleIsDone(todo.id)}
                style={{ width: '1.5rem', height: '1.5rem' }}
              />
              {todo.title}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
