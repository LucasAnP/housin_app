import React from 'react';

import { View, StatusBar } from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import AppStyleHousin from '../../../AppStyleHousin';
import style from './style';

import SliderComponent from '../../components/SliderComponent';
import LinearGradient from 'react-native-linear-gradient';

import HousinLogo from '../../assets/images/housin-name-logo.svg';

const InitialPage = ({navigation}) =>{
  const colorScheme = useColorScheme();
  const styles = style(colorScheme);

    return (
      <>
      <LinearGradient style={styles.container} colors={[AppStyleHousin.colorSet[colorScheme].mainThemeBackgroundColor, AppStyleHousin.colorSet[colorScheme].minLinearThemeBackground]}>
        <StatusBar backgroundColor={AppStyleHousin.colorSet[colorScheme].mainThemeBackgroundColor} />
        <View style={styles.logoContainer}>
          <HousinLogo width={AppStyleHousin.WINDOW_WIDTH*0.7} />
        </View>
      </LinearGradient>
      <View style={styles.sliderContainer}>
        <SliderComponent onPress={()=>navigation.navigate('SignIn')}/>
      </View>
      </>
    );
}
export default InitialPage;
