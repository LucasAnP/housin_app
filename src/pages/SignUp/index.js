import React, { useEffect, useState } from 'react';

import { StatusBar, View,
  Text,
  AsyncStorage,
  TouchableOpacity, KeyboardAvoidingView} from 'react-native';
  import { useColorScheme } from 'react-native-appearance';
import { Input } from 'react-native-elements';
import AppStyleHousin from '../../../AppStyleHousin';
import style from './style';

import api from '../../services/api';

const SignUp = ({navigation}) =>{
    const colorScheme = useColorScheme();
    const styles = style(colorScheme);

    const [ name, setName] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ confirmPassword, setConfirmPassword] = useState('');


    return (
      <KeyboardAvoidingView style={styles.containerSignIn} behavior={"height"}>
          <StatusBar backgroundColor={AppStyleHousin.colorSet[colorScheme].mainThemeBackgroundColor} />
          <View style={styles.registerContainer}>

            <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
              <Text style={styles.registerText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.h1Text}>Se Inscreva,</Text>
            <Text style={styles.textSubtitle}>faça parte da nova forma de encontrar moradias e parceiros para dividir casa</Text>
          </View>
          <View style={styles.containerLogin}>
            <View style={styles.loginTextContainer}>
              <Text style={styles.loginText}>Login</Text>
            </View>
            <View style={styles.containerInputs}>
              <View style={styles.emailContainer}>
                <Text style={styles.emailText}>Nome</Text>
                <View style={styles.inputStyle}>
                  <Input onChangeText={setEmail} inputContainerStyle={styles.inputContainerStyle}/>
                </View>
              </View>
              <View style={styles.emailContainer}>
                <Text style={styles.emailText}>E-mail</Text>
                <View style={styles.inputStyle}>
                  <Input onChangeText={setEmail} inputContainerStyle={styles.inputContainerStyle}/>
                </View>
              </View>
              <View style={styles.passwordContainer}>
                <Text style={styles.emailPassword}>Senha</Text>
                <View style={styles.inputStyle}>
                  <Input onChangeText={setPassword} inputContainerStyle={styles.inputContainerStyle} secureTextEntry={true}/>
                </View>
              </View>
              <View style={styles.passwordContainer}>
                <Text style={styles.emailPassword}>Confirmar Senha</Text>
                <View style={styles.inputStyle}>
                  <Input onChangeText={setPassword} inputContainerStyle={styles.inputContainerStyle} secureTextEntry={true}/>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <View style={styles.buttonStyle}>
                  <TouchableOpacity onPress={()=>{login()}}>
                    <Text style={styles.textSubtitle}>Entrar</Text>
                  </TouchableOpacity>
                </View>
            </View>
            </View>

          </View>
      </KeyboardAvoidingView>
    );
}
export default SignUp;
