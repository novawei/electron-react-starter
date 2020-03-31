import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enhancer = applyMiddleware(thunk);
const initialState: AppState = {
  module1: {
    val1: 'xxx'
  },
  module2: {
    val2: 1
  }
}

const store = createStore(rootReducer, initialState, enhancer)

export default store