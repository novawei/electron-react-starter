import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import Game from './views/Game'

const App = () => (
  <Provider store={store}>
    <Game/>
  </Provider>
)

export default hot(App)