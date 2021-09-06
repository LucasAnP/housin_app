import React from 'react';
import 'react-native-gesture-handler';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import UserProfilePage from './UserProfile';
import UserCredentials from './UserCredentials';
import CreateAdNavigation from './CreateAd/CreateAd.navigation';

const UserProfileRoutes = () => {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions='screen' screenOptions={{cardStyleInterpolator:CardStyleInterpolators.forBottomSheetAndroid}}>
      <Stack.Screen options={{headerShown:false}} name='UserProfile' component={UserProfilePage}/>
      <Stack.Screen options={{headerShown:false}} name='UserCredentials' component={UserCredentials}/>
      <Stack.Screen options={{headerShown:false}} name='CreateAd' component={CreateAdNavigation}/>
    </Stack.Navigator>
  )
}
export default UserProfileRoutes;
