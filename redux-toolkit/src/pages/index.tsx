import { useSelector, useDispatch } from 'react-redux';

import { toggleTodo } from 'src/state/todos';

import type { NextPage } from 'next';
import type { Todo } from 'src/types';
import type { Rootstate } from 'src/state';

const Home: NextPage = () => {
  const todos = useSelector((state: Rootstate) => state.todos);
  const dispatch = useDispatch();

  const toggleIsDone = (id: Todo['id']) => {
    dispatch(toggleTodo({ id }));
  };

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
