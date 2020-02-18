import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Display from "./src/display";
import { Provider} from "react-redux";
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reducers from './src/redux/rootReducer'

const reducer = combineReducers(reducers)

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  // console.log(store, "this is the store")
  return (
    <Provider store={store}>
    <Display />
    </Provider>
  )
}

