import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import carReducer from './reducers/carReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {};

const store = createStore(
  carReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;