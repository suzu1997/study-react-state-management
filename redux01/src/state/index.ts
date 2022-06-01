import { combineReducers, legacy_createStore } from 'redux'

import { todosReducer } from './todos'

// ストアを作成
export const store = legacy_createStore(combineReducers({
  todos: todosReducer
}))

export type Rootstate = ReturnType<typeof store.getState> 