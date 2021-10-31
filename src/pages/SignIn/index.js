import React, { useEffect, useState } from 'react';

import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { useColorScheme } from 'react-native-appearance';

import AppStyleHousin from '../../../AppStyleHousin';
import style from './style';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import { Input } from 'react-native-elements';

const SignIn = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const styles = style(colorScheme);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (email && password) {
      setButtonDisabled(false);
    }
  }, [email, password]);

  const login = async () => {
    try {
      setLoading(true);
      const response = await api.post('/sessions', {
        email,
        password,
      });
      await AsyncStorage.setItem('@HousinApp:token', response.data.token);
      setLoading(false);
      navigation.replace('TabNavigator', {
        screen: 'Home',
      });
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
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        color={AppStyleHousin.colorSet[colorScheme].cardBackgroundColor}
        textStyle={styles.textSubtitleGray}
      />
      <StatusBar
        backgroundColor={
          AppStyleHousin.colorSet[colorScheme].mainThemeBackgroundColor
        }
      />
      <View style={styles.registerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.registerText}>Registrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.h1Text}>Olá,</Text>
        <Text style={styles.textSubtitle}>
          Somos um aplicativo que facilita a procura de residencias e pares,
          deixando assim toda a relação de forma mais interativa.
        </Text>
      </View>
      <View style={styles.containerLogin}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Login</Text>
        </View>
        <View style={styles.containerInputs}>
          <View style={styles.emailContainer}>
            <Text style={styles.emailText}>E-mail</Text>
            <View style={styles.inputStyle}>
              <Input
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
                inputContainerStyle={styles.inputContainerStyle}
              />
            </View>
          </View>
          <View style={styles.passwordContainer}>
            <Text style={styles.emailPassword}>Senha</Text>
            <View style={styles.inputStyle}>
              <Input
                onChangeText={setPassword}
                inputContainerStyle={styles.inputContainerStyle}
                secureTextEntry={true}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View
            style={
              buttonDisabled ? styles.buttonStyleDisabled : styles.buttonStyle
            }>
            <TouchableOpacity
              disabled={buttonDisabled}
              onPress={() => {
                login();
              }}>
              <Text style={styles.textSubtitle}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default SignIn;
