import React from 'react';

import { View } from 'react-native';
import { useColorScheme } from 'react-native-appearance';

import AppStylesHousin from '../../../AppStyleHousin';

const SliderStaticComponent = ({
  porcent}
) =>{
  const colorScheme = useColorScheme();

  const _renderPorcent = () =>{
    if (porcent == 100){
      return (
        <View style={{width:'100%', height:AppStylesHousin.WINDOW_HEIGHT * 0.03, alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          <View style={{width:'91%', height:AppStylesHousin.WINDOW_HEIGHT * 0.003, backgroundColor:AppStylesHousin.colorSet[colorScheme].subTextGray}}></View>
          <View style={{width:AppStylesHousin.WINDOW_HEIGHT * 0.02, height:AppStylesHousin.WINDOW_HEIGHT * 0.02, backgroundColor:AppStylesHousin.colorSet[colorScheme].minLinearThemeBackground, borderRadius:80}}></View>
        </View>
      )
    }else if (porcent == 0){
      return (
        <View style={{width:'100%', height:AppStylesHousin.WINDOW_HEIGHT * 0.03, alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          <View style={{width:AppStylesHousin.WINDOW_HEIGHT * 0.02, height:AppStylesHousin.WINDOW_HEIGHT * 0.02, backgroundColor: AppStylesHousin.colorSet[colorScheme].minLinearThemeBackground, borderRadius:80}}></View>
          <View style={{width:'91%', height:AppStylesHousin.WINDOW_HEIGHT * 0.003, backgroundColor:AppStylesHousin.colorSet[colorScheme].subTextGray}}></View>
        </View>
      )
    }
  }

    return (
      <>
        {_renderPorcent()}
      </>
    );
};
export default SliderStaticComponent;
