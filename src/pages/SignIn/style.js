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
      paddingRight: '5%'
    },

    textContainer:{
      width:'90%',
      height:'40%',
      justifyContent:'space-around',
      paddingBottom:"5%"
    },

    h1Text:{
      fontFamily:'Poppins-Bold',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.xlarge,
    },

    textSubtitle:{
      fontFamily:'Poppins-Regular',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.normal,
      textAlign:'justify',
    },

    textSubtitleGray:{
      fontFamily:'Poppins-Regular',
      color:AppStylesHousin.colorSet[colorTheme].subText,
      fontSize:AppStylesHousin.fontSet.normal,
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
      height:'15%',
      justifyContent:'center'
    },
    loginText:{
      fontFamily:'Poppins-Bold',
      color:AppStylesHousin.colorSet[colorTheme].themeText,
      fontSize:AppStylesHousin.fontSet.normal,
    },

    containerLogin:{
      width:'100%',
      height:'50%',
      backgroundColor:"white",
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      alignItems:'center',
    },

    containerLoginOppened:{
      width:'100%',
      height:'70%',
      backgroundColor:"white",
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      alignItems:'center',
      bottom:'20%',
      zIndex:2,
      elevation:10
    },

    containerInputs:{
      width:"100%",
      height:'15rem',
      justifyContent:'center',
      alignItems:'center'
    },
    emailContainer:{
      width:"90%",
      height:'45%',
      justifyContent:'center',
      alignItems:'flex-start',
    },
    passwordContainer:{
      width:"90%",
      height:'45%',
      justifyContent:'center',
      alignItems:'flex-start',
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
      height:'60%',
      backgroundColor:AppStylesHousin.colorSet[colorTheme].grayBackground,
      borderRadius:10,

      justifyContent:'center',
    },

    buttonContainer:{
      width:"100%",
      height:'30%',
      alignItems:'center',
      justifyContent:'flex-end',
      position:'absolute',
      bottom:'3%',
    },

    buttonStyle:{
      width:'70%',
      height:'50%',
      backgroundColor:AppStylesHousin.colorSet[colorTheme].buttonColor,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
    },

    buttonStyleDisabled:{
      width:'70%',
      height:'50%',
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

    '@media (min-width: 320) and (max-width:380)':{
      containerInputs:{
        height:'13rem',
      },
          containerLoginOppened:{
      width:'100%',
      height:'70%',
      backgroundColor:"white",
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      alignItems:'center',
      bottom:'30%',
      zIndex:2,
      elevation:10
    },
    }
  });

};
export default style;
