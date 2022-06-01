import type { Reducer } from 'redux'
import type { Todo } from 'src/types'

// 定数で管理するのは必須ではないが、他のところで使い回す時に便利
const ADD_TODO = "ADD_TODO"
const TOGGLE_TODO = "TOGGLE_TODO"

// Actions
export const addTodo = (title: Todo['title']) => {
  return {
    // type... どんな種類の変更(Actions)かをreducersに伝える
    type: ADD_TODO,
    // payload... ストアの変更に必要なデータ
    payload: {
      title
    }
  } as const // wideningを避ける
}

export const toggleTodo = (id: Todo['id']) => {
  return {
    // type... どんな種類の変更(Actions)かをreducersに伝える
    type: TOGGLE_TODO,
    // payload... ストアの変更に必要なデータ
    payload: {
      id
    }
  } as const // wideningを避ける
}

// ReturnTypeは,返り値の型を取り出すUtility Types
type Action = ReturnType<typeof addTodo | typeof toggleTodo>

// initial state
const TODOS = [
  { id: 1, title: 'foo', isDone: false },
  { id: 2, title: 'bar', isDone: true },
];

// Reducer ... 現在の状態とActionを受け取って、新しい状態を返す
export const todosReducer: Reducer<Todo[], Action> = (state = TODOS, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = { id: state.length + 1, title: action.payload.title, isDone: false }
      return [...state, newTodo]
    }
    case TOGGLE_TODO: {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    }
    default: {
      return state
    }
  }
}