import AppStylesHousin from '../../../AppStyleHousin';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build();

const styles = (colorScheme) => {
  return EStyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },

    modalContainer:{
      width:'100%',
      height:'100%',
      backgroundColor:AppStylesHousin.colorSet[colorScheme].mainThemeBackgroundColor,
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center'
    },

    titleStyle: {
      fontFamily: 'Poppins-Bold',
      color: AppStylesHousin.colorSet[colorScheme].whiteText,
      fontSize: AppStylesHousin.fontSet.normal,
      textAlign: 'justify',
      marginTop:'10%'
    },

    textSubtitleGray: {
      fontFamily: 'Poppins-Regular',
      color: AppStylesHousin.colorSet[colorScheme].whiteText,
      fontSize: AppStylesHousin.fontSet.small,
      textAlign: 'center',
      paddingHorizontal:'3rem'
    },
  });

};
export default styles;
