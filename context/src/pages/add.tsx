import { useTodosDispatch } from 'src/hooks/useTodosDispatch';

import type { ComponentProps } from 'react';
import type { NextPage } from 'next';

const Add: NextPage = () => {
  const { addTodo } = useTodosDispatch();

  // NOTE: 制御されたコンポーネントと非制御コンポーネントの概念
  // 制御されたコンポーネント... useStateとonChangeを用いて管理
  // 非制御コンポーネント... formタグとhandleSubmitを用いて管理
  const handleSubmit: ComponentProps<'form'>['onSubmit'] = (e) => {
    e.preventDefault(); // フォームのデフォルト動作をキャンセル
    const title = e.currentTarget.text.value;
    addTodo(title);

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
