import React from 'react';
import 'react-native-gesture-handler';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';

const CreateAdNavigation = () => {

  const Stack = createStackNavigator();

  const config = {
    animation: 'slide',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <Stack.Navigator screenOptions='screen' screenOptions={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}>
      <Stack.Screen options={{headerShown:false}} name='First Page' component={FirstPage} />
      <Stack.Screen options={{headerShown:false}} name='Second Page' component={SecondPage}/>
      <Stack.Screen options={{headerShown:false}} name='Third Page' component={ThirdPage}/>
      <Stack.Screen options={{headerShown:false}} name='Fourth Page' component={FourthPage}/>
      <Stack.Screen options={{headerShown:false}} name='Fifth Page' component={FifthPage}/>
      {/* <Stack.Screen options={{headerShown:false}} name='Photo Page' component={PhotoPage}/> */}
    </Stack.Navigator>
  )
}
export default CreateAdNavigation;
