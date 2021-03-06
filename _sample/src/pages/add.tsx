import type { NextPage } from 'next';
import type { ComponentProps, Dispatch, SetStateAction } from 'react';
import type { Todo } from 'src/types';

type PropsType = {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const Add: NextPage<PropsType> = ({ setTodos }) => {
  // NOTE: 制御されたコンポーネントと非制御コンポーネントの概念
  // 制御されたコンポーネント... useStateとonChangeを用いて管理
  // 非制御コンポーネント... formタグとhandleSubmitを用いて管理
  const handleSubmit: ComponentProps<'form'>['onSubmit'] = (e) => {
    e.preventDefault(); // フォームのデフォルト動作をキャンセル
    const text = e.currentTarget.text.value;

    setTodos((prevTodos) => {
      const id = prevTodos.length + 1;
      const newTodo = { id, title: text, isDone: false };
      return [...prevTodos, newTodo];
    });

    e.currentTarget.reset(); // formタグのリセット機能
  };

  return (
    <div>
      <h3>Todo追加</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' name='text' autoComplete='off' required />
        <button type='submit'>追加</button>
      </form>
    </div>
  );
};

export default Add;
