import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useColorScheme } from 'react-native-appearance';
import AppStyleHousin from '../../AppStyleHousin';
import ListPage from '../pages/ListPage'
import UserProfileRoutes from './Profile/routes.profile';
import ListMatches from './ListMatches';
import MyAds from './MyAds';

function HomeScreen() {
  return (
    <ListPage/>
  );
}

function HomeMatch(){
  return (
    <ListMatches/>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  return (
      <Tab.Navigator
      safeAreaInsets={true}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconGroup;

          if (route.name === 'Home') {
            iconName = 'home'
            iconGroup='MaterialCommunityIcons'
          } else if (route.name === 'Perfil') {
            iconName = 'person-circle-outline';
          }else if(route.name =='My Ads'){
            iconName='folder-home'
            iconGroup='MaterialCommunityIcons'
          }else if(route.name == 'Meus Matches'){
            iconName='home-heart'
            iconGroup='MaterialCommunityIcons'
          }
          // You can return any component that you like here!
          if(iconGroup=='MaterialCommunityIcons'){
            return <MaterialCommunityIcons name={iconName} size={size} color={color}/>
          }else{
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: AppStyleHousin.colorSet[colorScheme].mainThemeBackgroundColor,
        tabBarInactiveTintColor: AppStyleHousin.colorSet[colorScheme].inputColor,
      })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}  />
        <Tab.Screen name="My Ads" component={MyAds} options={{headerShown:false}}/>
        <Tab.Screen name="Meus Matches" component={HomeMatch} options={{headerShown:false}}/>
        <Tab.Screen name="Perfil" component={UserProfileRoutes} options={{headerShown:false}}/>
      </Tab.Navigator>
  );
}
