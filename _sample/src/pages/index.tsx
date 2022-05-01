import type { NextPage } from 'next';
import type { Dispatch, SetStateAction } from 'react';
import type { Todo } from 'src/types';

type PropsType = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const Home: NextPage<PropsType> = ({ todos, setTodos }) => {
  const toggleIsDone = (id: Todo['id']) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
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
