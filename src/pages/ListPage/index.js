import React, { useState, useEffect } from 'react';

import {
  StatusBar,
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Modal,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import { useColorScheme } from 'react-native-appearance';

import AppStyleHousin from '../../../AppStyleHousin';
import style from './style';

import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SliderStaticComponent from '../../components/SliderStatic';
import api from './../../services/api';
import Spinner from 'react-native-loading-spinner-overlay';
import { useIsFocused } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListPage = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const styles = style(colorScheme);

  let imageLocal = require('../../assets/images/house-simple-exemple.png');

  const [cardList, setCardList] = useState([]);

  const [modalOn, setModalOn] = useState(false);

  const [loading, setLoading] = useState(false);

  const [userClicked, setUserClicked] = useState();

  const isFocused = useIsFocused();

  const getProperties = async () => {
    setLoading(true);
    try {
      const properties = await api.get('/properties');
      setCardList(properties.data);
      setLoading(false);
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    getProperties();
  }, [isFocused]);

  const  matchOnProperty = async ()=>{
    setLoading(true)
    try{
      const credentials = await AsyncStorage.getItem('@HousinApp:userCredentials');
      const UserCredentials = JSON.parse(credentials);
      const response = await api.post(`/users/${UserCredentials.userId}/matches`,{
        property_id:userClicked.id
      })
      if(response){
        setLoading(false);
        setModalOn(false)
        navigation.navigate('HomeMatch');
      }
    }catch(err){
      console.warn(err);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
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
      {userClicked && (
        <Modal visible={modalOn} transparent={true} animationType={'slide'}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeaderContainer}>
              {/* IMAGE */}

              <View style={styles.modalImageContainer}>
                <View style={styles.modalImageStyle}>
                  <ImageBackground
                    resizeMode='cover'
                    source={imageLocal}
                    style={styles.imageStyleFullRadius}
                  />
                </View>
              </View>
              {/* Name and Age */}
              <View style={styles.modalInfoContainer}>
                <Text style={styles.h1Text}>{userClicked.title}</Text>
                <Text style={styles.subTitleDescriptionWite}>
                  {userClicked.address}
                </Text>
              </View>
            </View>
            <View
              style={{
                right: '10%',
                bottom: '77%',
                width: 60,
                height: 60,
                borderRadius: 80,
                marginTop: AppStyleHousin.WINDOW_HEIGHT * 0.5,
                borderColor: '#FF572D',
                borderWidth: 3,
                backgroundColor: '#F1F5F8',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                elevation: 10,
              }}>
              <Text style={{ color: '#FF572D' }}>
                {userClicked.compatibility}%
              </Text>
            </View>
            <View style={styles.modalContainerInfos}>
              <ScrollView>
                <View style={styles.modalDescriptionContainer}>
                  <Text style={styles.subTitleSmallRegular}>
                    {userClicked.description}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#E6E6F2',
                    height: AppStyleHousin.WINDOW_HEIGHT * 0.15,
                    width: '95%',
                    alignSelf: 'center',
                    marginTop: AppStyleHousin.WINDOW_HEIGHT * 0.03,
                    borderRadius: 10,
                    paddingTop: '3%',
                    paddingHorizontal: '5%',
                  }}>
                  <Text style={styles.h1TextGray}>Limpo e Organizado</Text>
                  <View
                    style={{
                      width: '100%',
                      height: '55%',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      alignSelf: 'center',
                    }}>
                    <View
                      style={{
                        width: '98.5%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom:'1%'
                      }}>
                      <MaterialCommunityIcons
                        name={'emoticon-sad-outline'}
                        color={'#FF8669'}
                        size={AppStyleHousin.WINDOW_HEIGHT * 0.035}
                      />

                      <MaterialCommunityIcons
                        name={'emoticon-neutral-outline'}
                        color={'#FF8669'}
                        size={AppStyleHousin.WINDOW_HEIGHT * 0.035}
                      />

                      <MaterialCommunityIcons
                        name={'emoticon-outline'}
                        color={'#FF8669'}
                        size={AppStyleHousin.WINDOW_HEIGHT * 0.035}
                      />
                    </View>
                    <SliderStaticComponent
                      porcent={userClicked.organized == 1 ? 100 : 0}

                    />
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: '#E6E6F2',
                    height: AppStyleHousin.WINDOW_HEIGHT * 0.15,
                    width: '95%',
                    alignSelf: 'center',
                    marginTop: AppStyleHousin.WINDOW_HEIGHT * 0.03,
                    borderRadius: 10,
                    paddingTop: '3%',
                    paddingHorizontal: '5%',
                  }}>
                  <Text style={styles.h1TextGray}>Fuma?</Text>
                  <View
                    style={{
                      width: '98%',
                      height: '50%',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      alignSelf: 'center',
                    }}>
                    <View
                      style={{
                        width: '98.5%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <MaterialCommunityIcons
                        name={'emoticon-sad-outline'}
                        color={'#FF8669'}
                        size={AppStyleHousin.WINDOW_HEIGHT * 0.035}
                      />

                      <MaterialCommunityIcons
                        name={'emoticon-neutral-outline'}
                        color={'#FF8669'}
                        size={AppStyleHousin.WINDOW_HEIGHT * 0.035}
                      />

                      <MaterialCommunityIcons
                        name={'emoticon-outline'}
                        color={'#FF8669'}
                        size={AppStyleHousin.WINDOW_HEIGHT * 0.035}
                      />
                    </View>
                    <SliderStaticComponent
                      porcent={userClicked.smoke == 1 ? 100 : 0}
                    />
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: '#E6E6F2',
                    height: AppStyleHousin.WINDOW_HEIGHT * 0.15,
                    width: '95%',
                    alignSelf: 'center',
                    marginTop: AppStyleHousin.WINDOW_HEIGHT * 0.03,
                    borderRadius: 10,
                    paddingTop: '3%',
                    paddingHorizontal: '5%',
                  }}>
                  <Text style={styles.h1TextGray}>Bebe?</Text>
                  <View
                    style={{
                      width: '98%',
                      height: '50%',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      alignSelf: 'center',
                    }}>
                    <View
                      style={{
                        width: '98.5%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <MaterialCommunityIcons
                        name={'emoticon-sad-outline'}
                        color={'#FF8669'}
                        size={AppStyleHousin.WINDOW_HEIGHT * 0.035}
                      />

                      <MaterialCommunityIcons
                        name={'emoticon-neutral-outline'}
                        color={'#FF8669'}
                        size={AppStyleHousin.WINDOW_HEIGHT * 0.035}
                      />

                      <MaterialCommunityIcons
                        name={'emoticon-outline'}
                        color={'#FF8669'}
                        size={AppStyleHousin.WINDOW_HEIGHT * 0.035}
                      />
                    </View>
                    <SliderStaticComponent
                      porcent={userClicked.drink == 1 ? 100 : 0}
                    />
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: '#E6E6F2',
                    height: AppStyleHousin.WINDOW_HEIGHT * 0.15,
                    width: '95%',
                    alignSelf: 'center',
                    marginTop: AppStyleHousin.WINDOW_HEIGHT * 0.03,
                    borderRadius: 10,
                    paddingTop: '3%',
                    paddingHorizontal: '5%',
                  }}>
                  <Text style={styles.h1TextGray}>Responsável?</Text>
                  <View
                    style={{
                      width: '98%',
                      height: '50%',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      alignSelf: 'center',
                    }}>
                    <View
                      style={{
                        width: '98.5%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <MaterialCommunityIcons
                        name={'emoticon-sad-outline'}
                        color={'#FF8669'}
                        size={AppStyleHousin.WINDOW_HEIGHT * 0.035}
                      />

                      <MaterialCommunityIcons
                        name={'emoticon-neutral-outline'}
                        color={'#FF8669'}
                        size={AppStyleHousin.WINDOW_HEIGHT * 0.035}
                      />

                      <MaterialCommunityIcons
                        name={'emoticon-outline'}
                        color={'#FF8669'}
                        size={AppStyleHousin.WINDOW_HEIGHT * 0.035}
                      />
                    </View>
                    <SliderStaticComponent
                      porcent={userClicked.responsable == 1 ? 100 : 0}
                    />
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: '#E6E6F2',
                    height: AppStyleHousin.WINDOW_HEIGHT * 0.15,
                    width: '95%',
                    alignSelf: 'center',
                    marginTop: AppStyleHousin.WINDOW_HEIGHT * 0.03,
                    borderRadius: 10,
                    paddingTop: '3%',
                    paddingHorizontal: '5%',
                  }}>
                  <Text style={styles.h1TextGray}>Tem animais?</Text>
                  <View
                    style={{
                      width: '98%',
                      height: '50%',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      alignSelf: 'center',
                    }}>
                    <View
                      style={{
                        width: '98.5%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <MaterialCommunityIcons
                        name={'emoticon-sad-outline'}
                        color={'#FF8669'}
                        size={AppStyleHousin.WINDOW_HEIGHT * 0.035}
                      />

                      <MaterialCommunityIcons
                        name={'emoticon-neutral-outline'}
                        color={'#FF8669'}
                        size={AppStyleHousin.WINDOW_HEIGHT * 0.035}
                      />

                      <MaterialCommunityIcons
                        name={'emoticon-outline'}
                        color={'#FF8669'}
                        size={AppStyleHousin.WINDOW_HEIGHT * 0.035}
                      />
                    </View>
                    <SliderStaticComponent
                      porcent={userClicked.animals == 1 ? 100 : 0}
                    />
                  </View>
                </View>

                <View
                  style={{
                    width: '100%',
                    height: '10%',
                    marginBottom: '20%',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                  }}>
                  <TouchableOpacity
                    style={{
                      width: '70%',
                      height: '50%',
                      marginRight:'2%'
                    }} onPress={()=> {
                      matchOnProperty()
                    }}>
                    <LinearGradient
                      start={{ x: 0.8, y: 1 }}
                      end={{ x: 1, y: 1 }}
                      colors={['#FF572D', '#FF8669']}
                      style={{
                        width:"100%", height:'100%', borderRadius: 80, flexDirection:'row', justifyContent: 'space-between',                       marginRight: '2%',
                      alignItems: 'center',
                      paddingHorizontal: '1%'
                      }}>
                      <Text style={[styles.h1Text, { paddingLeft: '2%' }]}>
                        Match
                      </Text>
                      <View
                        style={styles.headerContainer}
                        style={{
                          padding: '2.5%',
                          backgroundColor: 'white',
                          borderRadius: 120,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Ionicons
                          name={'heart'}
                          color={'#FF8669'}
                          size={AppStyleHousin.WINDOW_HEIGHT * 0.04}
                        />
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              setModalOn(false);
            }}
            style={{
              borderRadius: 80,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: '2%',
              right: '5%',
              padding: '1%',
            }}>
            <Ionicons
              name={'close-circle'}
              color={'#F1F5F8'}
              size={AppStyleHousin.WINDOW_HEIGHT * 0.04}
            />
          </TouchableOpacity>
        </Modal>
      )}
      <LinearGradient
        style={styles.headerContainer}
        colors={[
          AppStyleHousin.colorSet[colorScheme].mainThemeBackgroundColor,
          AppStyleHousin.colorSet[colorScheme].minLinearThemeBackground,
        ]}>
        <View style={styles.leftIconContainer}></View>
        <View style={styles.titleHeaderContainer}>
          <Text style={styles.h1Text}>Anúncios</Text>
        </View>
        <View style={styles.noneContainer} />
      </LinearGradient>

      {/* Card */}
      <View style={styles.allCardContainer}>
        {/* //FLATLIST */}
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={cardList}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  item.compatibility && setModalOn(true);
                  setUserClicked(item);
                }}>
                {/* Imagem */}
                <View style={styles.imageContainer}>
                  <ImageBackground
                    resizeMode='cover'
                    source={imageLocal}
                    style={styles.imageStyle}
                  />
                </View>
                <View style={styles.infoOfHouse}>
                  <View style={styles.nameAndAge}>
                    <Text style={styles.subTitle}>{item.title}</Text>
                    <Text style={styles.subTitleDescription}>
                      {item.address}
                    </Text>
                  </View>
                  {item.compatibility != 0 && (
                    <View style={styles.porcentContainer}>
                      <View style={styles.porcentInfo}>
                        <Text>{item.compatibility}%</Text>
                      </View>
                    </View>
                  )}
                </View>
                <View style={styles.descriptionContainer}>
                  <Text style={styles.descriptionText}>{item.description}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default ListPage;
