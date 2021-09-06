import React, { useEffect, useState } from 'react';

import { View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar, SafeAreaView} from 'react-native';
  import { useColorScheme } from 'react-native-appearance';
import LinearGradient from 'react-native-linear-gradient';
import AppStyleHousin from '../../../../../AppStyleHousin';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ButtonContinue from '../../../../components/Button';

import style from './style';

const SecondPage = ({navigation}) =>{
    const colorScheme = useColorScheme();
    const styles = style(colorScheme);

    let imageLocal = require('../../../../assets/images/home-colorful.jpg');

    const [isSelected1, setIsSelected1] = useState(false);
    const [isSelected2, setIsSelected2] = useState(false);
    const [isSelected3, setIsSelected3] = useState(false);

    const [buttonAble, setButtonAble] = useState(false);

    function clickOnChoice(choice){
      if(choice == 'ButtonOne'){
        setIsSelected2(false);
        setIsSelected3(false);
      }else if(choice == 'ButtonTwo'){
        setIsSelected1(false);
        setIsSelected3(false);
      }else if(choice == 'ButtonThree'){
        setIsSelected1(false);
        setIsSelected2(false);
      }

    }

    useEffect(()=> {
      if(isSelected1 || isSelected2 || isSelected3){
        setButtonAble(true);
      }else{
        setButtonAble(false);
      }
    },[isSelected1, isSelected2, isSelected3])

    return (
      <SafeAreaView style={{flex:1}}>
          <StatusBar translucent={true} backgroundColor={'rgba(0, 0, 0, .2)'} />
          <View
            style={{
              height: '40%',
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
              height: '60%',
              width: '100%',
              backgroundColor: AppStyleHousin.colorSet[colorScheme].secondThemeBackgroundColor,
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              justifyContent: 'center',
              alignItems:'center',
              paddingVertical:'15%',
            }}>
              <Text style={[styles.h1TextGray,{alignSelf:'flex-start', paddingHorizontal:'5%', paddingRight:'25%', textAlign:'left'}]}>Que tipo de moradia você está alugando?</Text>
              <View style={styles.contentContainer}>
                <TouchableOpacity style={isSelected1?styles.buttonContainerSelected:styles.buttonContainer} onPress={()=>{setIsSelected1(!isSelected1); clickOnChoice('ButtonOne')}} >
                  <Text style={isSelected1?styles.subText:styles.subTextGray} >Um apartamento</Text>
                </TouchableOpacity>

                <TouchableOpacity style={isSelected2?styles.buttonContainerSelected:styles.buttonContainer} onPress={()=>{setIsSelected2(!isSelected2); clickOnChoice('ButtonTwo')}} >
                  <Text style={isSelected2?styles.subText:styles.subTextGray} >Uma Casa</Text>
                </TouchableOpacity>

                <TouchableOpacity style={isSelected3?styles.buttonContainerSelected:styles.buttonContainer} onPress={()=>{setIsSelected3(!isSelected3); clickOnChoice('ButtonThree')}} >
                  <Text style={isSelected3?styles.subText:styles.subTextGray} >Um Kitnet</Text>
                </TouchableOpacity>

              </View>
              <ButtonContinue text={'Começar'} onPress={()=>navigation.navigate('Second Page')} disabled={!buttonAble}/>
          </View>
          {/* /WhiteView 67% */}
          <TouchableOpacity style={styles.goBackAbsoluteContainer} onPress={()=>navigation.goBack()}>
            <View style={styles.iconContainer}>
            <MaterialIcons
                          name={'arrow-back-ios'}
                          color={
                            AppStyleHousin.colorSet[colorScheme]
                              .textDarkGray
                          }
                          size={AppStyleHousin.WINDOW_HEIGHT * 0.02}
                        />
            </View>
          </TouchableOpacity>
      </SafeAreaView>
    );
}
export default SecondPage;
