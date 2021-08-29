import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import UserProfilePage from './UserProfile';

const UserProfileRoutes = () => {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions='screen'>
      <Stack.Screen options={{headerShown:false}} name='UserProfile' component={UserProfilePage}/>
    </Stack.Navigator>
  )
}
export default UserProfileRoutes;
