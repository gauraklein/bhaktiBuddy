import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducers from "./src/redux/rootReducer";

//SCREENS
import Home from "./src/screens/home/homeComponent"
import Japa from "./src/screens/japa/japaComponent"
import Reflections from "./src/screens/reflections/reflectionsComponent"
import Inspiration from "./src/screens/inspiration/inspirationComponent"

const reducer = combineReducers(reducers);

const store = createStore(reducer, applyMiddleware(thunk));


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
            headerShown: false
            // headerStyle: {
            //   backgroundColor: '#485460'
            // },
            // headerTintColor: '#fff',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
          }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Japa" component={Japa} />
            <Stack.Screen name="Reflections" component={Reflections} />
            <Stack.Screen name="Inspiration" component={Inspiration} />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </Display> */}
    </Provider>
  );
}
