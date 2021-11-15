import React from 'react';
import 'react-native-gesture-handler';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import InitialPage from './pages/InitialPage';
import TabNavigator from './pages/tab.navigator'
import CreateAdNavigation from './pages/Profile/CreateAd/CreateAd.navigation';

const Routes = () => {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions='screen' screenOptions={{cardStyleInterpolator:CardStyleInterpolators.forBottomSheetAndroid}}>
      <Stack.Screen options={{headerShown:false}} name='InitialPage' component={InitialPage}/>
      <Stack.Screen options={{headerShown:false}} name='SignIn' component={SignIn} />
      <Stack.Screen options={{headerShown:false}} name='SignUp' component={SignUp} />
      <Stack.Screen options={{headerShown:false}} name='TabNavigator' component={TabNavigator} />
      <Stack.Screen options={{headerShown:false}} name='CreateAd' component={CreateAdNavigation}/>
    </Stack.Navigator>
  )
}
export default Routes;
