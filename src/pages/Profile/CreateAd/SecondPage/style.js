import AppStylesHousin from '../../../../../AppStyleHousin';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build();

const styles = (colorTheme) => {
  return EStyleSheet.create({
    h1Text:{
      fontFamily:'Poppins-Bold',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.xlarge,
    },
    h1TextGray:{
      fontFamily:'Poppins-Bold',
      color:AppStylesHousin.colorSet[colorTheme].textDarkGray,
      fontSize:AppStylesHousin.fontSet.middle,
    },

    h1ThemeText:{
      fontFamily:'Poppins-Bold',
      color:AppStylesHousin.colorSet[colorTheme].themeText,
      fontSize:AppStylesHousin.fontSet.middle,
    },

    buttonText:{
      fontFamily:'Poppins-SemiBold',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.normal,
    },

    subText:{
      fontFamily:'Poppins-SemiBold',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.small,
    },

    subTextGray:{
      fontFamily:'Poppins-SemiBold',
      color:AppStylesHousin.colorSet[colorTheme].subText,
      fontSize:AppStylesHousin.fontSet.small
    },

    contentContainer:{
      width:'100%',
      height:'85%',
      justifyContent:'space-around',
      alignItems:'center',
    },

    imageStyleFullRadius:{width:'105%', height:'105%', overflow: 'hidden'},

    goBackAbsoluteContainer:{
      width: '100%', height: '10%',position:'absolute',
      top:'4%',
      zIndex:2,
      justifyContent:"center",
      paddingHorizontal:'5%',
      alignItems:'flex-start'
    },
    iconContainer:{
      width: '3rem',
      height: '3rem',
      backgroundColor:'white',
      borderRadius:'20rem',
      justifyContent:'center',
      alignItems:'center',
      paddingLeft:'1.5%'
    },

    inputStyle:{
      width:'90%',
      height:'10%',
      backgroundColor:AppStylesHousin.colorSet[colorTheme].secondThemeBackgroundColor,
      borderRadius:5,
      borderWidth:1,
      borderColor:AppStylesHousin.colorSet[colorTheme].inputColor,
      justifyContent:'center',
      padding: 5,
    },
    inputStyleDescription:{
      width:'90%',
      height:'50%',
      backgroundColor:AppStylesHousin.colorSet[colorTheme].secondThemeBackgroundColor,
      borderRadius:5,
      borderWidth:1,
      borderColor:AppStylesHousin.colorSet[colorTheme].inputColor,
      justifyContent:'center',
      padding: 10,
    },
    inputStyleAddress:{
      width:'90%',
      height:'20%',
      backgroundColor:AppStylesHousin.colorSet[colorTheme].secondThemeBackgroundColor,
      borderRadius:5,
      borderWidth:1,
      borderColor:AppStylesHousin.colorSet[colorTheme].inputColor,
      justifyContent:'center',
      padding: 10,
    }
  });

};
export default styles;
