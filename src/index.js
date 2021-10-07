import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
//redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

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

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
