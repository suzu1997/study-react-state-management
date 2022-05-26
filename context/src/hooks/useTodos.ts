import { useContext } from 'react'
import { TodosContext } from 'src/state/todos'

// React.useContextを Custom Hooks 経由で隠蔽
// Component に影響することなくロジックの修正が可能に
export const useTodos = () => {
  return useContext(TodosContext)
}