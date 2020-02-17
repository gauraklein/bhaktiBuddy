import {createStore, compose, applyMiddleware} from "redux";
import combineReducers from './reducers'
import thunk from "redux-thunk";

const composedEnhancer = compose( applyMiddleware(thunk));

const initStore = () => createStore(combineReducers,
    composedEnhancer);

module.exports = {
    initStore
};
