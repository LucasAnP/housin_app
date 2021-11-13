import AppStylesHousin from '../../../AppStyleHousin';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build();

const style = (colorTheme) => {
  return EStyleSheet.create({
    containerSignIn:{
      flex:1,
      backgroundColor:AppStylesHousin.colorSet[colorTheme].mainThemeBackgroundColor,
      alignItems:'center',
      justifyContent:'center'
    },

    registerContainer:{
      width:'100%',
      height:'10%',
      justifyContent:'center',
      alignItems:'flex-end',
      paddingRight: '5%',
    },

    textContainer:{
      width:'90%',
      height:'25%',
      justifyContent:'center'
    },

    h1Text:{
      fontFamily:'Poppins-Bold',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.xlarge,
    },

    textSubtitle:{
      fontFamily:'Poppins-Regular',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.small,
      textAlign:'justify',
    },

    registerText:{
      fontFamily:'Poppins-SemiBold',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.small,
      textAlign:'justify'
    },
    loginTextContainer:{
      width:"90%",
      height:'10%',
      justifyContent:'center'
    },
    loginText:{
      fontFamily:'Poppins-Bold',
      color:AppStylesHousin.colorSet[colorTheme].themeText,
      fontSize:AppStylesHousin.fontSet.normal,
    },

    containerLogin:{
      width:'100%',
      height:'65%',
      backgroundColor:AppStylesHousin.colorSet[colorTheme].secondThemeBackgroundColor,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      alignItems:'center',
      justifyContent:'flex-end',
    },

    containerInputs:{
      justifyContent:'flex-start',
      paddingTop:'5%',
      alignItems:'center',
      height: '95%',
      width: '100%'
    },
    emailContainer:{
      width:"90%",
      justifyContent:'center',
      alignItems:'flex-start',
      marginBottom:'0.5rem'
    },
    passwordContainer:{
      width:"90%",
      justifyContent:'center',
      alignItems:'flex-start',
      marginBottom:'0.5rem'
  },
    emailText:{
      color:AppStylesHousin.colorSet[colorTheme].subText,
      fontFamily:'Poppins-Bold',
    },
    emailPassword:{
      color:AppStylesHousin.colorSet[colorTheme].subText,
      fontFamily:'Poppins-Bold',
    },
    inputStyle:{
      width:'100%',
      height:'3.5rem',
      backgroundColor:AppStylesHousin.colorSet[colorTheme].grayBackground,
      borderRadius:10,
      justifyContent:'center',
    },

    buttonContainer:{
      width:"90%",
      height: '15%',
      alignItems:'center',
      justifyContent:'center',
      position:'absolute',
      bottom:'2%'
    },

    buttonStyle:{
      width:'80%',
      height:'3.5rem',
      backgroundColor:AppStylesHousin.colorSet[colorTheme].buttonColor,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
    },

    buttonStyleDisabled:{
      width:'80%',
      height:'3.5rem',
      backgroundColor:AppStylesHousin.colorSet[colorTheme].inputColor,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
    },

    inputContainerStyle:{
      borderBottomWidth: 0,
      width: '100%',
      height: '100%',

    },

    '@media (min-width: 320) and (max-width:400)':{
      inputStyle:{
        height:'2.5rem',
      },
    }
  });

};
export default style;
