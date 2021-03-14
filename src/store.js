import { createStore, applyMiddleware, compose } from "redux";
import createRootReducer from "./reducer/rootReducer";
import thunk from "redux-thunk";
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore(preloadedState){
  const store=createStore(
  createRootReducer(history),
  preloadedState,
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))))
  return store
};
