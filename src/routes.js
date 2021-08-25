import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import InitialPage from './pages/InitialPage';
import SliderComponent from './components/SliderComponent';
import TabNavigator from './pages/tab.navigator'

const Routes = () => {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions='screen'>
      <Stack.Screen options={{headerShown:false}} name='InitialPage' component={InitialPage}/>
      <Stack.Screen options={{headerShown:false}} name='SignIn' component={SignIn} />
      <Stack.Screen options={{headerShown:false}} name='SignUp' component={SignUp} />
      <Stack.Screen options={{headerShown:false}} name='TabNavigator' component={TabNavigator} />
    </Stack.Navigator>
  )
}
export default Routes;
