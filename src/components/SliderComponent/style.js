import AppStylesHousin from '../../../AppStyleHousin';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build();

const styles = (colorTheme) => {
  return EStyleSheet.create({
    buttonCircle: {
      width: '2.5rem',
      height:'2.5rem',
      backgroundColor: 'rgba(0, 0, 0, .2)',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide:{
      height: '100%',
      width: '100%',
      backgroundColor:AppStylesHousin.colorSet[colorTheme].minLinearThemeBackground,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      paddingTop:'5%',
      paddingLeft:'5%',
    },
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'flex-end',
    },
    h1Text:{
      fontFamily:'Poppins-Bold',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.large,
    },

    textSubtitle:{
      fontFamily:'Poppins-Regular',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.small,
      textAlign:'justify',
      paddingRight:'2rem',
      marginTop:'1rem'
    },
    logoContainer:{
      width: '100%',
      height:'30%',
      alignItems:'center',
      justifyContent:'center'
    }
  });

};
export default styles;
