import AppStylesHousin from '../../../AppStyleHousin';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build();

const styles = (colorTheme) => {
  return EStyleSheet.create({
    buttonContainer:{
      width:'90%',
      height:'3.5rem',
      backgroundColor:AppStylesHousin.colorSet[colorTheme].minLinearThemeBackground,
      borderRadius:8,
      alignItems:'center',
      justifyContent:'center',
      padding:0
    },
    buttonContainerDisabled:{
      width:'90%',
      height:'3.5rem',
      backgroundColor:AppStylesHousin.colorSet[colorTheme].grayBackground,
      borderRadius:8,
      alignItems:'center',
      justifyContent:'center',
      padding:0
    },
    textButton:{
      color:AppStylesHousin.colorSet[colorTheme].secondThemeBackgroundColor,
      fontSize:AppStylesHousin.fontSet.normal,
      fontFamily:'Poppins-Bold',
    }
  });

};
export default styles;
