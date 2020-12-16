import React, {useState} from 'react';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import ConfigureStore  from './src/store'
import {useFonts} from 'expo-font';

import MainScreen from './src/Screens/MainScreen'
import ModalScreen from './src/Screens/ModalScreen'
import DatePickerScreen from './src/Screens/DatePickerScreen'
import SelectScheduleScreen from './src/Screens/SelectScheduleScreen'
import PassangerData from './src/Screens/PassangerData'


const store = ConfigureStore(); 

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="MainScreen" component={MainScreen}  options={{ headerShown: false }} />
      <MainStack.Screen name="SelectScheduleScreen" component={SelectScheduleScreen}  options={{ headerShown: false }} />
      <MainStack.Screen name="PassangerData" component={PassangerData}  options={{ headerShown: false }} />
    </MainStack.Navigator>
  );
}

function App() {
  let [fontsLoaded, error] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf')
    });
  if (!fontsLoaded) {
    return <AppLoading />;  
  }
  else {
    return (
      <Provider store={store}>
        <NavigationContainer>
        <RootStack.Navigator mode="modal" headerMode="none">
          <RootStack.Screen name="MainScreen" component={MainStackScreen}  />
          <RootStack.Screen name="ModalScreen" component={ModalScreen}  options={{ headerShown: false }}/>        
          <RootStack.Screen name="DatePickerScreen" component={DatePickerScreen}  options={{ headerShown: false }}/>            
        </RootStack.Navigator>
      </NavigationContainer>
      </Provider>
  
    )
  }
  
}

export default App;