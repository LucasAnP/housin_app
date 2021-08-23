import React from 'react';

import { View, Text, Touchable, TouchableOpacity} from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';

import AppIntroSlider from 'react-native-app-intro-slider';

const SliderComponent = ({
  onPress}
) =>{
  const colorScheme = useColorScheme();
  const styles = style(colorScheme);
  const slides = [
    {
      key: 'one',
      title: 'Seja bem vindo',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere fringilla elit, non fermentum nisi semper non. Fusce sem ex, fermentum vitae ultricies vel',
      backgroundColor: '#59b2ab',
    },
    {
      key: 'two',
      title: 'Ache a residência ideal',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere fringilla elit, non fermentum nisi semper non. Fusce sem ex, fermentum vitae ultricies vel',
      backgroundColor: '#febe29',
    },
    {
      key: 'three',
      title: 'Com a pessoa ideal',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere fringilla elit, non fermentum nisi semper non. Fusce sem ex, fermentum vitae ultricies vel',
      backgroundColor: '#22bcb5'
    }
  ];

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.h1Text}>{item.title}</Text>
        <Text style={styles.textSubtitle}>{item.text}</Text>
      </View>
    );
  }
  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name={"arrow-forward-circle-outline"}
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name={"checkmark"}
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
    return (
      <AppIntroSlider
        data={slides}
        renderItem={_renderItem}
        renderNextButton={_renderNextButton}
        renderDoneButton={_renderDoneButton}
        onDone={onPress}
      />
    );
};
export default SliderComponent;
