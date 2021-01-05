import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import showScreen from './src/helpers/showScreen'
import { Provider } from 'react-redux';
import combineReducers from './src/helpers/reducers/index';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import gasScreen from './src/helpers/addScreen';
import deleteScreen from './src/helpers/deleteScreen'
import RenewGasScreen from './src/helpers/renewGasTank'
import showAllOrders from './src/helpers/showOrders'
import showFinishedOrdersScreen from './src/helpers/FinishedOrders'

const Tab = createBottomTabNavigator();

const store = createStore(combineReducers, applyMiddleware(ReduxThunk));
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
            initialRoute="SHOW"
            tabBarOptions={{activeTintColor: '#deaf04'}}>
              <Tab.Screen name="SHOW" component={showScreen} />
              <Tab.Screen name="ADD" component={gasScreen} />
              <Tab.Screen name="Delete" component={deleteScreen} />
              <Tab.Screen name="Renew" component={RenewGasScreen} />
              <Tab.Screen name="Orders" component={showAllOrders} />
              <Tab.Screen name="Finished Orders" component={showFinishedOrdersScreen} />
              
          </Tab.Navigator>
        </NavigationContainer>
        </Provider>
    );
  }
}
export default App;
