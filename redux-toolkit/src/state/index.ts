import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './todos'

// ストアを作成
export const store = configureStore({
  reducer: {
    todos: todosReducer
  },
})

export type Rootstate = ReturnType<typeof store.getState> 