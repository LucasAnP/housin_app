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
import { Input } from 'react-native-elements';

const FourthPage = ({navigation}) =>{
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
              height: '20%',
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
              height: '80%',
              width: '100%',
              backgroundColor: AppStyleHousin.colorSet[colorScheme].secondThemeBackgroundColor,
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              justifyContent: 'center',
              alignItems:'center',
              paddingVertical:'15%',
            }}>
              <Text style={[styles.h1TextGray,{alignSelf:'flex-start', paddingHorizontal:'5%', paddingRight:'25%', textAlign:'left'}]}>Onde está localizada a moradia?</Text>
              <View style={styles.contentContainer}>
                <View style={{width:'90%', height:'10%', alignItems:'flex-start'}}>
                  <Text style={styles.subTextGray}>Título</Text>
                  <Input inputContainerStyle={{width:'100%', height:'50%'}} ></Input>
                </View>
                <View style={{width:'90%', height:'10%', alignItems:'flex-start'}}>
                  <Text style={styles.subTextGray}>Endereço</Text>
                  <Input inputContainerStyle={{width:'100%', height:'50%'}}  ></Input>
                </View>
                <View style={{width:'90%', height:'10%', alignItems:'flex-start'}}>
                  <Text style={styles.subTextGray}>Descrição</Text>
                  <Input inputContainerStyle={{width:'100%', height:'50%'}}  ></Input>
                </View>
              </View>
              <ButtonContinue text={'Próximo'} onPress={()=>navigation.navigate('Fifth Page',{title:'Casa de lá',address:'Perto do outro lado', description:'Casa bonita, um local bem arejado e com uma vizinhança incrível'})}/>
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
export default FourthPage;
