import React, { useEffect, useState } from 'react';

import { StatusBar, View,
  Text,
  AsyncStorage,
  TouchableOpacity} from 'react-native';
  import { useColorScheme } from 'react-native-appearance';
import { Input } from 'react-native-elements';
import AppStyleHousin from '../../../AppStyleHousin';
import style from './style';

import api from '../../services/api';

const SignIn = ({navigation}) =>{
    const colorScheme = useColorScheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginEffect, setLoginEffect] = useState(false);
    const styles = style(colorScheme);

    const login = async () => {
      try{
        const response = await api.post('/auth',{
          email,
          password
        })
        setLoginEffect(response);
        console.log(response)
        await AsyncStorage.setItem('@HousinApp:token', response.data.token);
      }catch(err){
        console.warn(err)
      }
    };

    useEffect(()=> {
      if(loginEffect){
        navigation.navigate('SignUp');
      }
    },[loginEffect])

    return (
      <View style={styles.containerSignIn}>
        <StatusBar backgroundColor={AppStyleHousin.colorSet[colorScheme].mainThemeBackgroundColor} />
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Registrar</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.h1Text}>Olá,</Text>
          <Text style={styles.textSubtitle}>Somos um aplicativo que facilita a procura de residencias e pares, deixando assim toda a relação de forma mais interativa.</Text>
        </View>
        <View style={styles.containerLogin}>
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>Login</Text>
          </View>
          <View style={styles.containerInputs}>
            <View style={styles.emailContainer}>
              <Text style={styles.emailText}>E-mail</Text>
              <View style={styles.inputStyle}>
                <Input autoFocus={true} onChangeText={setEmail} inputContainerStyle={styles.inputContainerStyle}/>
              </View>
            </View>
            <View style={styles.passwordContainer}>
              <Text style={styles.emailPassword}>Senha</Text>
              <View style={styles.inputStyle}>
                <Input onChangeText={setPassword} inputContainerStyle={styles.inputContainerStyle} secureTextEntry={true}/>
              </View>
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
    );
}
export default SignIn;
