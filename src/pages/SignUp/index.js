import React, { useEffect, useState } from 'react';

import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard
} from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import { Input } from 'react-native-elements';
import AppStyleHousin from '../../../AppStyleHousin';
import style from './style';

import api from '../../services/api';
import Spinner from 'react-native-loading-spinner-overlay';

const SignUp = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const styles = style(colorScheme);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginEffect, setLoginEffect] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const signUp = async () => {
    try {
      setLoading(true);
      const response = await api.post('/users', {
        username,
        email,
        password,
      });
      if(response.data){
        setLoading(false);
        setLoginEffect(response);
      }else{
        alert('Já existe alguém com esses dados, por favor, digitar novamente')
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
  const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
    setKeyboardVisible(true);
  });
  const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
    setKeyboardVisible(false);
  });

  return () => {
    showSubscription.remove();
    hideSubscription.remove();
  };
}, []);

  useEffect(() => {
    if (username && email && password && confirmPassword) {
      setButtonDisabled(false);
    }
  }, [username, email, password, confirmPassword]);
  useEffect(() => {
    if (loginEffect) {
      navigation.replace('SignUpQualities',{userInfo:loginEffect});
    }
  }, [loginEffect]);

  return (
    <KeyboardAvoidingView
      style={styles.containerSignIn}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
      enabled={Platform.OS === 'ios' ? true : false}>
      <StatusBar
        backgroundColor={
          AppStyleHousin.colorSet[colorScheme].mainThemeBackgroundColor
        }
      />
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        color={AppStyleHousin.colorSet[colorScheme].cardBackgroundColor}
        textStyle={styles.textSubtitleGray}
      />
      <View style={styles.registerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.registerText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.h1Text}>Se Inscreva,</Text>
        <Text style={styles.textSubtitle}>
          faça parte da nova forma de encontrar moradias e parceiros para
          dividir casa
        </Text>
      </View>
        <View style={isKeyboardVisible?styles.containerLoginOppened:styles.containerLogin}>
      <ScrollView
          contentContainerStyle={{ flex: 1}}
          scrollEnabled={true}
        >
            <View style={styles.containerInputs}>
              <View style={styles.emailContainer}>
                <Text style={styles.emailText}>Nome</Text>
                <View style={styles.inputStyle}>
                  <Input
                    onChangeText={setUsername}
                    inputContainerStyle={styles.inputContainerStyle}
                  />
                </View>
              </View>
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
              <View style={styles.passwordContainer}>
                <Text style={styles.emailPassword}>Confirmar Senha</Text>
                <View style={styles.inputStyle}>
                  <Input
                    onChangeText={setConfirmPassword}
                    inputContainerStyle={styles.inputContainerStyle}
                    secureTextEntry={true}
                    errorMessage={
                      confirmPassword != password &&
                      confirmPassword != '' &&
                      'Senhas diferentes, por favor digitar a correta'
                    }
                    errorStyle={{ marginTop: '-2%' }}
                  />
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={
                    !buttonDisabled
                      ? styles.buttonStyle
                      : styles.buttonStyleDisabled

                  }
                    onPress={() => {
                      signUp();
                    }}
                  >
                    <Text style={styles.textSubtitle}>Registrar</Text>
                </TouchableOpacity>
              </View>
            </View>
         </ScrollView>
        </View>
    </KeyboardAvoidingView>
  );
};
export default SignUp;
