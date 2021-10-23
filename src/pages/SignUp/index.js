import React, { useEffect, useState } from 'react';

import { StatusBar, View,
  Text,
  TouchableOpacity, KeyboardAvoidingView} from 'react-native';
  import { useColorScheme } from 'react-native-appearance';
import { Input } from 'react-native-elements';
import AppStyleHousin from '../../../AppStyleHousin';
import style from './style';

import api from '../../services/api';

const SignUp = ({navigation}) =>{
    const colorScheme = useColorScheme();
    const styles = style(colorScheme);

    const [ username, setUsername] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ confirmPassword, setConfirmPassword] = useState('');
    const [ loginEffect, setLoginEffect] = useState(false);

    const signUp = async () => {
        try{
          const response = await api.post('/users',{
            username,
            email,
            password
          })
          console.log('responseSignUp', response);
          setLoginEffect(response);
        }catch(err){
          console.warn(err);
        }
    };

    useEffect(()=> {
      if(loginEffect){
        navigation.navigate('SignIn');
      }
    },[loginEffect])
    return (
      <KeyboardAvoidingView style={styles.containerSignIn} behavior={"height"}>
          <StatusBar backgroundColor={AppStyleHousin.colorSet[colorScheme].mainThemeBackgroundColor} />
          <View style={styles.registerContainer}>

            <TouchableOpacity onPress={()=>navigation.navigate('TabNavigator')}>
              <Text style={styles.registerText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.h1Text}>Se Inscreva,</Text>
            <Text style={styles.textSubtitle}>faça parte da nova forma de encontrar moradias e parceiros para dividir casa</Text>
          </View>
          <View style={styles.containerLogin}>
            <View style={styles.containerInputs}>
              <View style={styles.emailContainer}>
                <Text style={styles.emailText}>Nome</Text>
                <View style={styles.inputStyle}>
                  <Input onChangeText={setUsername} inputContainerStyle={styles.inputContainerStyle}/>
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
                  <Input onChangeText={setConfirmPassword} inputContainerStyle={styles.inputContainerStyle} secureTextEntry={true} errorMessage={(confirmPassword!=password && confirmPassword!='')&&'Senhas diferentes, por favor digitar a correta'} errorStyle={{marginTop:'-2%'}}/>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <View style={styles.buttonStyle}>
                  <TouchableOpacity onPress={()=>{signUp()}}>
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
