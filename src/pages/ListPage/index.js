import React from 'react';

import { StatusBar, View,
  Text,
  FlatList, ImageBackground} from 'react-native';
  import { useColorScheme } from 'react-native-appearance';

import AppStyleHousin from '../../../AppStyleHousin';
import style from './style';

import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SignUp = ({navigation}) =>{
    const colorScheme = useColorScheme();
    const styles = style(colorScheme);

    let imageLocal = require('../../assets/images/ednaldo_bandeira.png');

    const cardList = [
      {
        key:1,
        name:'Casa de São Viscente',
        address:'Casa de esquina ao lado do bar',
        match:'83%',
        info:'Eu sou Lucas, estudo na UFPB e curso Sistemas de Informação. Gosto de jogar jogos online. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere fringilla elit, non fermentum Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        key:2,
        name:'Casa de São Viscente',
        address:'Casa de esquina ao lado do bar',
        match:'56%',
        info:'Eu sou Lucas, estudo na UFPB e curso Sistemas de Informação. Gosto de jogar jogos online. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere fringilla elit, non fermentum Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
    ]

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={AppStyleHousin.colorSet[colorScheme].mainThemeBackgroundColor} />
        <LinearGradient style={styles.headerContainer} colors={[AppStyleHousin.colorSet[colorScheme].mainThemeBackgroundColor, AppStyleHousin.colorSet[colorScheme].minLinearThemeBackground]}>
          <View style={styles.leftIconContainer}>
            <Ionicons name={'chevron-back'} size={AppStyleHousin.WINDOW_WIDTH*0.07} color={AppStyleHousin.colorSet[colorScheme].secondThemeBackgroundColor}/>
          </View>
          <View style={styles.titleHeaderContainer}>
            <Text style={styles.h1Text}>
              Anúncios
            </Text>
          </View>
          <View style={styles.noneContainer}/>
        </LinearGradient>
        {/* Card */}
          <View style={styles.allCardContainer}>
          {/* //FLATLIST */}
            <FlatList showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} data={cardList} renderItem={({item})=>(
            <View style={styles.cardContainer}>
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
                  <Text style={styles.subTitle}>{item.name}</Text>
                  <Text style={styles.subTitleDescription}>{item.address}</Text>
                </View>
                <View style={styles.porcentContainer}>
                  <View style={styles.porcentInfo}>
                    <Text>{item.match}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                Eu sou Lucas, estudo na UFPB e curso Sistemas de Informação. Gosto de jogar jogos online.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere fringilla elit, non fermentum Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </View>
            </View>)} />
          </View>
      </SafeAreaView>
    );
}
export default SignUp;
