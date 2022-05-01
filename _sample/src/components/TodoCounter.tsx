import type { FC } from 'react';

type PropsType = {
  todoCount: number;
};

export const TodoCounter: FC<PropsType> = ({ todoCount }) => {
  return <h2>TODO: {todoCount}件</h2>;
};
