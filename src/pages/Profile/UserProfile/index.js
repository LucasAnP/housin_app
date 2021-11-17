import React, { useEffect, useState } from 'react';

import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import { useColorScheme } from 'react-native-appearance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import AppStyleHousin from '../../../../AppStyleHousin';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';
import { useIsFocused } from '@react-navigation/native';
import api from '../../../services/api';

const UserProfile = ({navigation}) => {
  const colorScheme = useColorScheme();
  const styles = style(colorScheme);

  const [user, setUser] = useState();
  const isFocused = useIsFocused();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  let imageLocal = require('../../../assets/images/user-image.png');

  async function getUser(){
    try {
      const credentials = await AsyncStorage.getItem('@HousinApp:userCredentials');
      const UserCredentials = JSON.parse(credentials);
      const response = await api.get(`/users/${UserCredentials.userId}`);
      setUsername(response.data[0].username);
      setEmail(response.data[0].email);

    } catch (err) {
      console.warn(err);
    }
  }


  useEffect(() => {
    getUser();
  }, [isFocused]);

  return (
    <>
      <LinearGradient
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        colors={[
          AppStyleHousin.colorSet[colorScheme].mainThemeBackgroundColor,
          AppStyleHousin.colorSet[colorScheme].minLinearThemeBackground,
        ]}>
        <View
          style={{
            height: '40%',
            width: AppStyleHousin.WINDOW_WIDTH * 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: '13%',
              width: '90%',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            {/* <Text style={styles.exitText}>Sair</Text> */}
          </View>
          <View style={styles.imageBackground}>
            <View
              style={{
                width: '36%',
                height: '90%',
                borderColor: 'white',
                borderWidth: 2,
                borderRadius: 80,
              }}>
              <ImageBackground
                resizeMode='cover'
                source={imageLocal}
                style={styles.imageStyleFullRadius}
              />
            </View>
          </View>
          <View
            style={{
              height: '17%',
              width: '90%',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Text style={styles.h1Text}>{username}</Text>
            <Text style={styles.subText}>{email}</Text>
          </View>
        </View>

        {/* WhiteView 67% */}
        <View
          style={{
            height: '60%',
            width: '100%',
            backgroundColor: 'white',
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            justifyContent: 'space-around',
          }}>
          {/* Title:Profile */}
          <View
            style={{ height: '15%', width: '100%', justifyContent: 'center' }}>
            <Text
              style={[
                styles.h1TextGray,
                { paddingLeft: '8%', paddingTop: '5%' },
              ]}>
              Profile
            </Text>
          </View>

          {/* Button 2 - Edit Profile Info */}
          <View
            style={{
              width: '100%',
              height: '20%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '88%',
                height: '70%',
                backgroundColor:
                  AppStyleHousin.colorSet[colorScheme].minLinearThemeBackground,
                borderRadius: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {/* IconContainer */}
              <View
                style={{
                  height: '80%',
                  width: '20%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: AppStyleHousin.WINDOW_WIDTH * 0.09,
                    height: AppStyleHousin.WINDOW_WIDTH * 0.09,
                    borderRadius: 80,
                    backgroundColor:
                      AppStyleHousin.colorSet[colorScheme]
                        .secondThemeBackgroundColor,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name={'account-edit'}
                    color={
                      AppStyleHousin.colorSet[colorScheme]
                        .minLinearThemeBackground
                    }
                    size={AppStyleHousin.WINDOW_HEIGHT * 0.04}
                  />
                </View>
              </View>
              {/* /IconContainer */}

              {/* EditProfile Button Container */}
              <View
                style={{
                  height: '80%',
                  width: '80%',
                  justifyContent: 'center',
                }}>
                <Text style={styles.buttonText}>Informações Pessoais</Text>
              </View>
              {/* /EditProfile Button Container */}
            </View>
          </View>
          {/* /Button 2 */}

          {/* Button 3 - My Matches*/}
          <View
            style={{
              width: '100%',
              height: '20%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: '88%',
                height: '70%',
                backgroundColor:
                  AppStyleHousin.colorSet[colorScheme].minLinearThemeBackground,
                borderRadius: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }} onPress={()=> navigation.navigate('CreateAd')} activeOpacity={0.8}>
              {/* IconContainer */}
              <View
                style={{
                  height: '80%',
                  width: '20%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: AppStyleHousin.WINDOW_WIDTH * 0.09,
                    height: AppStyleHousin.WINDOW_WIDTH * 0.09,
                    borderRadius: 80,
                    backgroundColor:
                      AppStyleHousin.colorSet[colorScheme]
                        .secondThemeBackgroundColor,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name={'home-plus'}
                    color={
                      AppStyleHousin.colorSet[colorScheme]
                        .minLinearThemeBackground
                    }
                    size={AppStyleHousin.WINDOW_HEIGHT * 0.035}
                  />
                </View>
              </View>
              {/* /IconContainer */}

              {/* EditProfile Button Container */}
              <View
                style={{
                  height: '80%',
                  width: '80%',
                  justifyContent: 'center',
                }}>
                <Text style={styles.buttonText}>Criar Anúncios</Text>
              </View>
              {/* /EditProfile Button Container */}
            </TouchableOpacity>
          </View>
          {/* /Button 3 */}

          {/* Button 1 - Credentials*/}
          <View
            style={{
              width: '100%',
              height: '20%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: '88%',
                height: '70%',
                backgroundColor:
                  AppStyleHousin.colorSet[colorScheme].minLinearThemeBackground,
                borderRadius: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }} activeOpacity={0.8} onPress={()=>navigation.navigate('UserCredentials',{username, email})}>
              {/* IconContainer */}
              <View
                style={{
                  height: '80%',
                  width: '20%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: AppStyleHousin.WINDOW_WIDTH * 0.09,
                    height: AppStyleHousin.WINDOW_WIDTH * 0.09,
                    borderRadius: 80,
                    backgroundColor:
                      AppStyleHousin.colorSet[colorScheme]
                        .secondThemeBackgroundColor,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name={'account-settings'}
                    color={
                      AppStyleHousin.colorSet[colorScheme]
                        .minLinearThemeBackground
                    }
                    size={AppStyleHousin.WINDOW_HEIGHT * 0.04}
                  />
                </View>
              </View>
              {/* /IconContainer */}

              {/* EditProfile Button Container */}
              <View
                style={{
                  height: '80%',
                  width: '80%',
                  justifyContent: 'center',
                }}>
                <Text style={styles.buttonText}>Credenciais</Text>
              </View>
              {/* /EditProfile Button Container */}
            </TouchableOpacity>
          </View>
          {/* /Button 1 */}

          {/* Button 4 - Terms*/}
          <View
            style={{
              width: '100%',
              height: '20%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '88%',
                height: '70%',
                backgroundColor:
                  AppStyleHousin.colorSet[colorScheme].minLinearThemeBackground,
                borderRadius: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {/* IconContainer */}
              <View
                style={{
                  height: '80%',
                  width: '20%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: AppStyleHousin.WINDOW_WIDTH * 0.09,
                    height: AppStyleHousin.WINDOW_WIDTH * 0.09,
                    borderRadius: 80,
                    backgroundColor:
                      AppStyleHousin.colorSet[colorScheme]
                        .secondThemeBackgroundColor,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name={'file-document-edit-outline'}
                    color={
                      AppStyleHousin.colorSet[colorScheme]
                        .minLinearThemeBackground
                    }
                    size={AppStyleHousin.WINDOW_HEIGHT * 0.04}
                  />
                </View>
              </View>
              {/* /IconContainer */}

              {/* EditProfile Button Container */}
              <View
                style={{
                  height: '80%',
                  width: '80%',
                  justifyContent: 'center',
                }}>
                <Text style={styles.buttonText}>Termos e Compromissos</Text>
              </View>
              {/* /EditProfile Button Container */}
            </View>
          </View>
          {/* /Button 4 */}
        </View>
      </LinearGradient>
    </>
  );
};
export default UserProfile;
