import React from 'react';

import { View, Text} from 'react-native';
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
      text: 'O housin é um aplicativo seguro e tem como objetivo facilitar a relação entre locador e locatário, evitando custo adicionais com corretores e intermediadores.',
    },
    {
      key: 'two',
      title: 'Ache a residência ideal',
      text: 'Dentro do aplicativo você consegue visualizar as moradias de acordo com os seus gostos, listando assim uma taxa de compatibilidade onde poderá se basear nas escolhas.',
    },
    {
      key: 'three',
      title: 'Com a pessoa ideal',
      text: 'Quando estiver procurando a pessoa ideal para morar com você, poderá definir a características que deseja para assim evitar problemas futuros com a pessoa escolhida',
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
