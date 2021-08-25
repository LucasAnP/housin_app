import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useColorScheme } from 'react-native-appearance';
import AppStyleHousin from '../../AppStyleHousin';
import ListPage from '../pages/ListPage'

function HomeScreen() {
  return (
    <ListPage/>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = 'person-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: AppStyleHousin.colorSet[colorScheme].mainThemeBackgroundColor,
        tabBarInactiveTintColor: AppStyleHousin.colorSet[colorScheme].inputColor,
      })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}  />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown:false}}/>
      </Tab.Navigator>
  );
}
