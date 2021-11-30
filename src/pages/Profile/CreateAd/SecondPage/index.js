import React, { useEffect, useState } from 'react';

import { View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,TextInput, KeyboardAvoidingView } from 'react-native';
  import { useColorScheme } from 'react-native-appearance';
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
    const [title, onChangeText] = useState('');
    const [description, onChangeDescription] = useState('');
    const [address, onChangeAddress] = useState('');

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
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
        enabled={Platform.OS === 'ios' ? true : false}
        style={{flex:1}}
        behavior={'height'}>
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
              <Text style={[styles.h1TextGray,{alignSelf:'flex-start', paddingHorizontal:'5%', paddingRight:'25%', textAlign:'left'}]}>Diga um pouco mais sobre sua moradia...</Text>
              <View style={styles.contentContainer}>
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={onChangeText}
                    placeholder={'Digite um título para para sua moradia'}
                    placeholderTextColor={AppStyleHousin.colorSet[colorScheme].subText}
                    value={title}
                    maxLength={50}
                />
                <TextInput
                    style={styles.inputStyleAddress}
                    onChangeText={onChangeAddress}
                    placeholder={'Digite seu endereço completo (Rua, número, cidade, estado)'}
                    placeholderTextColor={AppStyleHousin.colorSet[colorScheme].subText}
                    value={address}
                    multiline={true}
                    maxLength={100}
                  />
                <TextInput
                    style={styles.inputStyleDescription}
                    onChangeText={onChangeDescription}
                    placeholder={'Escreva uma breve descrição da sua moradia'}
                    placeholderTextColor={AppStyleHousin.colorSet[colorScheme].subText}
                    value={description}
                    multiline={true}
                    maxLength={250}
                />
              </View>
              <View style={{position:"absolute", bottom:'2%', width:'100%', alignItems:'center'}}>
                <ButtonContinue text={'Próximo'} onPress={()=>navigation.navigate('Third Page',{title, address, description})} disabled={(title&&address&&description)?false:true} />
              </View>
          </View>
      </KeyboardAvoidingView>
    );
}
export default SecondPage;
