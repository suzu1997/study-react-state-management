import { useContext } from 'react'
import { TodosDispatchContext } from 'src/state/todos'

export const useTodosDispatch = () => {
  return useContext(TodosDispatchContext)
}