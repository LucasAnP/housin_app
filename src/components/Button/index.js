import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { useColorScheme } from 'react-native-appearance';

import AppStylesHousin from '../../../AppStyleHousin';
import style from './style';

const ButtonContinue = ({
  text, onPress, disabled}
) =>{
  const colorScheme = useColorScheme();
  const styles = style(colorScheme);

    return (
      <>
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress} disabled={disabled}>
          <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
      </>
    );
};
export default ButtonContinue;
