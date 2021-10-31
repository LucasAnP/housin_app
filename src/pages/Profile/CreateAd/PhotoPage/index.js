import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import AppStyleHousin from '../../../../../AppStyleHousin';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonContinue from '../../../../components/Button';
import ImagePicker from 'react-native-image-crop-picker';
import style from './style';
import api from '../../../../services/api';

const PhotoPage = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const styles = style(colorScheme);

  const [buttonAble, setButtonAble] = useState(false);
  const imagesData = new FormData();

  const [responseRequest, setResponseRequest] = useState();
  const createProperty = async () => {
    try {
      const response = await api.post('/properties', {
        title: 'Casa do Adonis',
        address: 'Perto da casa do React Native',
        description:
          'Casa bonita, um local bem arejado e com uma vizinhança incrível',
        compatibility: 0,
      });
      setResponseRequest(response);
      if(response){
        saveImage(response);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const saveImage = async (response) => {
    console.log('imagesData', imagesData);
    try {
      await api.post(
        `/properties/2/images`,
        imagesData
      );
    }catch (err) {
      console.warn(err);
    }
  }

  const openCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 400,
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      imagesData.append('image',{
        uri:image.uri,
        type: 'image/jpeg',
        name: `${responseRequest.data.title}_${1+1}.jpg`
      })
    });
  };

  const openPicker = () => {
    ImagePicker.openPicker({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      console.log(image);
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={true} backgroundColor={'rgba(0, 0, 0, .1)'} />
      <View
        style={{
          height: '25%',
          width: AppStyleHousin.WINDOW_WIDTH * 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor:
            AppStyleHousin.colorSet[colorScheme].mainThemeBackgroundColor,
        }}
      />
      <View
        style={{
          height: '80%',
          width: '100%',
          backgroundColor:
            AppStyleHousin.colorSet[colorScheme].secondThemeBackgroundColor,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingVertical: '2%',
          position: 'absolute',
          bottom: 0,
          elevation: 2,
        }}>
        <Text
          style={[
            styles.h1TextGray,
            {
              alignSelf: 'flex-start',
              paddingHorizontal: '5%',
              paddingRight: '25%',
              textAlign: 'left',
              top: 0,
            },
          ]}>
          Adicione a foto de sua moradia
        </Text>
        <View
          style={{
            height: '70%',
            width: '90%',
            backgroundColor:
              AppStyleHousin.colorSet[colorScheme].grayBackground,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {imagesData && (
            <TouchableOpacity
              style={{
                height: '15%',
                width: '15%',
                backgroundColor:
                  AppStyleHousin.colorSet[colorScheme]
                    .secondThemeBackgroundColor,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => openCamera()}>
              <MaterialCommunityIcons
                name={'image-plus'}
                style={{ alignSelf: 'center' }}
                color={
                  AppStyleHousin.colorSet[colorScheme].mainThemeBackgroundColor
                }
                size={AppStyleHousin.WINDOW_HEIGHT * 0.05}
              />
            </TouchableOpacity>
          )
          //  : (
          //   <ImageBackground
          //     resizeMode='cover'
          //     source={{uri: imagesData}}
          //     style={styles.imageStyleFullRadius}
          //     borderRadius={15}
          //   />
          // )
          }
        </View>
      </View>
      <TouchableOpacity
        style={styles.goBackAbsoluteContainer}
        onPress={() => {
          navigation.goBack();
        }}>
        <View style={styles.iconContainer}>
          <MaterialIcons
            name={'arrow-back-ios'}
            color={AppStyleHousin.colorSet[colorScheme].textDarkGray}
            size={AppStyleHousin.WINDOW_HEIGHT * 0.02}
          />
        </View>
      </TouchableOpacity>
      {/* ButtonView */}
      <View
        style={{
          position: 'absolute',
          bottom: '2%',
          width: '100%',
          alignItems: 'center',
          elevation: 3,
        }}>
        <ButtonContinue
          text={'Finalizar'}
          onPress={() => {
            createProperty();
            navigation.navigate('UserProfile');
          }}
          disabled={false}
        />
      </View>
    </SafeAreaView>
  );
};
export default PhotoPage;
