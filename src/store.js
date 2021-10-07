import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const persistentState = localStorage.getItem('state')
  ? JSON.parse(localStorage.getItem('state'))
  : {}
const store = createStore(
  rootReducer,
  persistentState,
  composeEnhancer(applyMiddleware(thunk))
)

store.subscribe(() => {
  const state = store.getState()
  const serializedState = JSON.stringify(state)
  localStorage.setItem('state', serializedState)
})

export default store
