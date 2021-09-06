import React, { useEffect, useState } from 'react';

import { View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar} from 'react-native';
  import { useColorScheme } from 'react-native-appearance';
import LinearGradient from 'react-native-linear-gradient';
import AppStyleHousin from '../../../../../AppStyleHousin';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ButtonContinue from '../../../../components/Button';

import style from './style';

const FirstPage = ({navigation}) =>{
    const colorScheme = useColorScheme();
    const styles = style(colorScheme);

    let imageLocal = require('../../../../assets/images/estudent-home-image.jpg');

    return (
      <View style={{flex:1}}>
          <LinearGradient
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          colors={[
            AppStyleHousin.colorSet[colorScheme].mainThemeBackgroundColor,
            AppStyleHousin.colorSet[colorScheme].minLinearThemeBackground,
          ]}>
          <StatusBar translucent={true} backgroundColor={'rgba(0, 0, 0, .2)'} />
          <View style={styles.goBackAbsoluteContainer}>
            <TouchableOpacity style={styles.iconContainer} onPress={()=>navigation.goBack()}>
            <MaterialIcons
                          name={'arrow-back-ios'}
                          color={
                            AppStyleHousin.colorSet[colorScheme]
                              .textDarkGray
                          }
                          size={AppStyleHousin.WINDOW_HEIGHT * 0.02}
                        />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: '60%',
              width: AppStyleHousin.WINDOW_WIDTH * 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ImageBackground
                    resizeMode='cover'
                    source={imageLocal}
                    style={styles.imageStyleFullRadius}
                  />
          </View>

          {/* WhiteView 67% */}
          <View
            style={{
              height: '40%',
              width: '100%',
              backgroundColor: AppStyleHousin.colorSet[colorScheme].secondThemeBackgroundColor,
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              justifyContent: 'center',
              alignItems:'center',
              paddingVertical:'15%',
            }}>
              <Text style={[styles.h1TextGray,{alignSelf:'flex-start', paddingHorizontal:'5%', paddingRight:'25%', textAlign:'left'}]}>Comece agora e crie seu anúncio</Text>
              <View style={styles.contentContainer}>
                <Text style={styles.subTextGray}>Faça com que as pessoas possam ver suas moradias, podendo assim receber diversos matches e possíveis locatários</Text>
              </View>
              <ButtonContinue text={'Começar'} onPress={()=>navigation.navigate('Second Page')}/>
          </View>
          {/* /WhiteView 67% */}

        </LinearGradient>
      </View>
    );
}
export default FirstPage;
