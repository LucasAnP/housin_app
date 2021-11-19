import React from 'react';

import { ActivityIndicator, StatusBar } from "react-native";
import { View, Text, Modal } from 'react-native';
import { useColorScheme } from 'react-native-appearance';

import AppStylesHousin from '../../../AppStyleHousin';
import style from './style';

const LoadingComponent = ({
  textTitle, descriptionLoading, visible}
) =>{
  const colorScheme = useColorScheme();
  const styles = style(colorScheme);

    return (
      <>
        <View style={styles.container}>
          <StatusBar
            backgroundColor={
              AppStylesHousin.colorSet[colorScheme].mainThemeBackgroundColor
            }
          />
          <Modal visible={visible} transparent={true} animationType={'slide'}>
            <View style={styles.modalContainer}>
              <ActivityIndicator animating={visible} size={AppStylesHousin.WINDOW_HEIGHT * 0.085} color={AppStylesHousin.colorSet[colorScheme].cardBackgroundColor} />
              <Text style={styles.titleStyle}>{textTitle}</Text>
              <Text style={styles.textSubtitleGray}>{descriptionLoading}</Text>
            </View>
          </Modal>
        </View>
      </>
    );
};
export default LoadingComponent;
