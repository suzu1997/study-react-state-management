import { useDispatch, useSelector } from 'react-redux';

import { addTodo } from 'src/state/todos';

import type { NextPage } from 'next';
import type { ComponentProps } from 'react';
import type { Rootstate } from 'src/state';

const Add: NextPage = () => {
  // useSelector  …  現在のstoreの中身を取得できる
  const todos = useSelector((state: Rootstate) => state.todos);
  console.log(todos);
  // useDispatch   …  storeの中身を変更するとき(Actionの発行のため)に使う
  const dispatch = useDispatch();

  // NOTE: 制御されたコンポーネントと非制御コンポーネントの概念
  // 制御されたコンポーネント... useStateとonChangeを用いて管理
  // 非制御コンポーネント... formタグとhandleSubmitを用いて管理
  const handleSubmit: ComponentProps<'form'>['onSubmit'] = (e) => {
    e.preventDefault(); // フォームのデフォルト動作をキャンセル
    const title: string = e.currentTarget.text.value;

    dispatch(addTodo({title}));

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
