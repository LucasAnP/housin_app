import React, { useEffect, useRef, useState } from 'react';

import { Animated, ImageBackground, KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native';

import { useColorScheme } from 'react-native-appearance';
import { Input } from 'react-native-elements/dist/input/Input';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import AppStyleHousin from '../../../../AppStyleHousin';
import style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../services/api';
import LoadingComponent from '../../../components/LoadingComponent';

const UserCredentials = ({navigation, route}) => {
  const colorScheme = useColorScheme();
  const styles = style(colorScheme);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  let imageLocal = require('../../../assets/images/user-image.png');

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      useNativeDriver:true,
      toValue: 1,
      duration: 500
    }).start();
  };

  useEffect(()=> {
    if(route.params.username){
      setName(route.params.username);
      setEmail(route.params.email);
    }
  },[route.params])

  useEffect(()=> {
    fadeIn();
  },[]);

  const changingCredentials = async () => {
    try {
      const credentials = await AsyncStorage.getItem(
        '@HousinApp:userCredentials'
      );
      const UserCredentialsData = JSON.parse(credentials);
      console.log('UserCredentials', UserCredentialsData);
      setLoading(true);
      const response = await api.put(`/users/${UserCredentialsData.userid}`, {
        username:nameInput,
        email:emailInput,
      });
      if(response){
        setLoading(false);
        navigation.replace('UserProfile');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
  <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
      enabled={Platform.OS === 'ios' ? true : false}
      style={styles.containerSignIn}
      behavior={'height'}>
    <SafeAreaView style={styles.containerFlex}>
      <LoadingComponent visible={loading} textTitle={'Atualizando...'} descriptionLoading={'Aguarde um instante, estamos atualizando suas credenciais'} />
      <View style={styles.flex2Container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={()=>{
            navigation.goBack();
          }}>
            <MaterialIcons
                          name={'arrow-back-ios'}
                          color={
                            AppStyleHousin.colorSet[colorScheme]
                              .secondThemeBackgroundColor
                          }
                          size={AppStyleHousin.WINDOW_HEIGHT * 0.03}
                        />
          </TouchableOpacity>
        </View>
      </View>
        <Animated.View style={[styles.animatedContainer,{transform: [
              {
                translateY: fadeAnim.interpolate({
                  inputRange: [0,1],
                  outputRange: [600, 0]
                })
              }
            ]}]}>

          <View style={styles.imageContainer}>
            <View style={styles.imageBackground}>
              <ImageBackground
                    resizeMode='cover'
                    source={imageLocal}
                    style={styles.imageStyleFullRadius}
                  />
            </View>
            <View style={styles.nameAndAgeContainer}>
              <Text style={styles.h1TextGrayName}>{name}</Text>
              <Text style={[styles.subTextName, styles.ageText]}>{email}</Text>
            </View>
          </View>
          <View style={styles.spacingContainer}></View>
          <View style={styles.credentialsContainer}>

            {/* H1 Credentials */}
            <View style={styles.titleContainer}>
              <Text style={styles.h1TextGray}>Editar Credenciais</Text>
            </View>
            {/* /H1 Credentials */}

            {/* Inputs Container */}
            <View style={{height:'73%', width:'100%', paddingBottom:'7%'}}>
              <View style={{height:'25%', width:'100%', alignItems:'center', marginBottom:'2%'}}>
                <Text style={[{alignSelf:'flex-start'}, styles.subText]}>Nome</Text>
                <View style={styles.inputStyle}>
                  <Input inputContainerStyle={styles.inputContainerStyle}/>
                </View>
              </View>
              <View style={{height:'25%', width:'100%', alignItems:'center'}}>
                <Text style={[{alignSelf:'flex-start'}, styles.subText]}>E-Mail</Text>
                <View style={styles.inputStyle}>
                  <Input inputContainerStyle={styles.inputContainerStyle} onChangeText={setEmail}/>
                </View>
              </View>
              <View style={{height:'25%', width:'100%', alignItems:'center', marginBottom:'2%'}}>
              </View>
              <View style={{height:'25%', width:'100%', alignItems:'center', marginBottom:'2%'}}>
              </View>
            </View>
            {/* /Inputs Container */}

            <View style={{height:'15%', width:'100%', justifyContent:"center", alignItems:'flex-end'}}>
            <TouchableOpacity
                    style={{
                      width: '70%',
                      height: '60%',
                      marginRight:'2%'
                    }} onPress={()=> {
                      changingCredentials()
                    }}>
              <LinearGradient
              start={{x: 0.0, y: 1}} end={{x: 1, y: 1}}
          style={{height:'100%', width:'100%', justifyContent:'space-between', flexDirection:"row", alignItems:'center', paddingHorizontal:'2%', marginRight:'1%', borderRadius:50, marginBottom:'2%'}}
          colors={[
            AppStyleHousin.colorSet[colorScheme].mainThemeBackgroundColor,
            AppStyleHousin.colorSet[colorScheme].minLinearThemeBackground,
          ]}>
                  <Text style={[styles.saveText, {paddingLeft:'5%'}]}>Salvar</Text>
                  <View style={{width:AppStyleHousin.WINDOW_WIDTH * 0.08, height:AppStyleHousin.WINDOW_WIDTH * 0.08, backgroundColor:'white', borderRadius:30, alignItems:'center', justifyContent:'center'}}>
                    <MaterialCommunityIcons
                        name={'content-save-outline'}
                        color={
                          AppStyleHousin.colorSet[colorScheme]
                            .minLinearThemeBackground
                        }
                        size={AppStyleHousin.WINDOW_HEIGHT * 0.03}
                      />
                  </View>
                </LinearGradient>
            </TouchableOpacity>

            </View>
          </View>
        </Animated.View>
    </SafeAreaView>
  </KeyboardAvoidingView>
  );
};
export default UserCredentials;
