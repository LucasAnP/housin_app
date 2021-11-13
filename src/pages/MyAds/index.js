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
} from 'react-native';
import { useColorScheme } from 'react-native-appearance';

import AppStyleHousin from '../../../AppStyleHousin';
import style from './style';

import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SliderStaticComponent from '../../components/SliderStatic';
import api from '../../services/api';
import { useIsFocused } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';

const MyAds = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const styles = style(colorScheme);

  const isFocused = useIsFocused();

  let imageLocal = require('../../assets/images/ednaldo_bandeira.png');

  const [cardList, setCardList] = useState();

  const [loading, setLoading] = useState(false);

  async function getMyAds() {
    setLoading(true);
    try {
      const credentials = await AsyncStorage.getItem(
        '@HousinApp:userCredentials'
      );
      const UserCredentials = JSON.parse(credentials);
      const response = await api.get(`/users/${UserCredentials.userId}`);
      setLoading(false);
      setCardList(response.data);
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    getMyAds();
  }, [isFocused]);

  const [modalOn, setModalOn] = useState(false);

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
              <Text style={styles.h1Text}>Rua do Juca</Text>
              <Text style={styles.subTitleDescriptionWite}>
                Casa de Esquina
              </Text>
            </View>
            <View style={styles.nullModalContainer}>
              <TouchableOpacity onPress={() => {}}>
                <View
                  style={{
                    width: AppStyleHousin.WINDOW_HEIGHT * 0.05,
                    height: AppStyleHousin.WINDOW_HEIGHT * 0.05,
                    backgroundColor: 'red',
                    borderRadius: 80,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Ionicons
                    name={'close'}
                    color={'#F1F5F8'}
                    size={AppStyleHousin.WINDOW_HEIGHT * 0.04}
                  />
                </View>
              </TouchableOpacity>
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
            <Text style={{ color: '#FF572D' }}>87%</Text>
          </View>
          <View style={styles.modalContainerInfos}>
            <ScrollView>
              <View style={styles.modalDescriptionContainer}>
                <Text style={styles.subTitleSmallRegular}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Suspendisse
                  posuere fringilla elit, non fermentum Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.{' '}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#E6E6F2',
                  height: AppStyleHousin.WINDOW_HEIGHT * 0.15,
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: AppStyleHousin.WINDOW_HEIGHT * 0.03,
                  borderRadius: 10,
                  paddingTop: '3%',
                  paddingHorizontal: '5%',
                }}>
                <Text style={styles.h1TextGray}>Limpo e Organizado</Text>
                <View
                  style={{
                    width: '98%',
                    height: '50%',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <SliderStaticComponent porcent={100} />
                </View>
              </View>

              <View
                style={{
                  backgroundColor: '#E6E6F2',
                  height: AppStyleHousin.WINDOW_HEIGHT * 0.15,
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: AppStyleHousin.WINDOW_HEIGHT * 0.03,
                  borderRadius: 10,
                  paddingTop: '3%',
                  paddingHorizontal: '5%',
                }}>
                <Text style={styles.h1TextGray}>Limpo e Organizado</Text>
                <View
                  style={{
                    width: '98%',
                    height: '50%',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <SliderStaticComponent porcent={100} />
                </View>
              </View>

              <View
                style={{
                  backgroundColor: '#E6E6F2',
                  height: AppStyleHousin.WINDOW_HEIGHT * 0.15,
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: AppStyleHousin.WINDOW_HEIGHT * 0.03,
                  borderRadius: 10,
                  paddingTop: '3%',
                  paddingHorizontal: '5%',
                }}>
                <Text style={styles.h1TextGray}>Limpo e Organizado</Text>
                <View
                  style={{
                    width: '98%',
                    height: '50%',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <SliderStaticComponent porcent={100} />
                </View>
              </View>

              <View
                style={{
                  backgroundColor: '#E6E6F2',
                  height: AppStyleHousin.WINDOW_HEIGHT * 0.15,
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: AppStyleHousin.WINDOW_HEIGHT * 0.03,
                  borderRadius: 10,
                  paddingTop: '3%',
                  paddingHorizontal: '5%',
                }}>
                <Text style={styles.h1TextGray}>Limpo e Organizado</Text>
                <View
                  style={{
                    width: '98%',
                    height: '50%',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <SliderStaticComponent porcent={100} />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <LinearGradient
        style={styles.headerContainer}
        colors={[
          AppStyleHousin.colorSet[colorScheme].mainThemeBackgroundColor,
          AppStyleHousin.colorSet[colorScheme].minLinearThemeBackground,
        ]}>
        <View style={styles.leftIconContainer}>
          <Ionicons
            name={'chevron-back'}
            size={AppStyleHousin.WINDOW_WIDTH * 0.07}
            color={
              AppStyleHousin.colorSet[colorScheme].secondThemeBackgroundColor
            }
          />
        </View>
        <View style={styles.titleHeaderContainer}>
          <Text style={styles.h1Text}>Meus Anuncios</Text>
        </View>
        <View style={styles.noneContainer} />
      </LinearGradient>

      {/* Card */}
      <View style={styles.allCardContainer}>
        {/* LATLIST */}
        {cardList && (
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={cardList}
            renderItem={({ item, index }) =>
              item.properties[index] && (
                <View style={styles.cardContainer}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setModalOn(true)}>
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
                        <Text style={styles.subTitle}>
                          {item.properties[index].title}
                        </Text>
                        <Text style={styles.subTitleDescription}>
                          {item.properties[index].address}
                        </Text>
                      </View>
                      <View style={styles.porcentContainer}>
                        <View style={styles.porcentInfo}>
                          <Text>{item.properties[index].compatibility}%</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.descriptionContainer}>
                      <Text style={styles.descriptionText}>
                        {item.properties[index].description}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
};
export default MyAds;
