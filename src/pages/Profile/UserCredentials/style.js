import AppStylesHousin from '../../../../AppStyleHousin';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build();

const styles = (colorTheme) => {
  return EStyleSheet.create({

    inputStyle:{
      width:'100%',
      height:'60%',
      backgroundColor:AppStylesHousin.colorSet[colorTheme].inputColor,
      borderRadius:10,

      justifyContent:'center',
      alignItems:'center',
    },

    inputContainerStyle:{
      borderBottomWidth: 0,
      width: '100%',
      height: '100%',

    },

    containerSignIn:{
      flex:1,
      backgroundColor:AppStylesHousin.colorSet[colorTheme].mainThemeBackgroundColor,
    },


    //Text
    h1Text:{
      fontFamily:'Poppins-Bold',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.normal,
    },
    h1TextGray:{
      fontFamily:'Poppins-Bold',
      color:AppStylesHousin.colorSet[colorTheme].textDarkGray,
      fontSize:AppStylesHousin.fontSet.middle,
    },
    h1TextGrayName:{
      fontFamily:'Poppins-SemiBold',
      color:AppStylesHousin.colorSet[colorTheme].textDarkGray,
      fontSize:AppStylesHousin.fontSet.middle,
    },
    buttonText:{
      fontFamily:'Poppins-SemiBold',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.normal,
    },

    subText:{
      fontFamily:'Poppins-SemiBold',
      color:AppStylesHousin.colorSet[colorTheme].subTextGray,
      fontSize:AppStylesHousin.fontSet.small,
    },

    subTextName:{
      fontFamily:'Poppins-SemiBold',
      color:AppStylesHousin.colorSet[colorTheme].subTextGray,
      fontSize:AppStylesHousin.fontSet.xxsmall,
    },

    saveText:{
      fontFamily:'Poppins-SemiBold',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.normal,
      textAlign:'justify'
    },


    imageStyleFullRadius:{width:'100%', height:'100%', borderRadius:100, overflow: 'hidden'},

    imageBackground:{width:AppStylesHousin.WINDOW_WIDTH * 0.3, height:AppStylesHousin.WINDOW_WIDTH * 0.3, backgroundColor:'red', borderRadius:80, alignSelf:'center'},

    imageContainer:{
      width:'100%', height:'30%', alignItems:'center', justifyContent:"flex-start", position:'absolute', top:'-10%', alignSelf:'center'
    },

    //ContaienrFlex
    containerFlex:{flex:1, backgroundColor:AppStylesHousin.colorSet[colorTheme]
      .mainThemeBackgroundColor},

    flex2Container:{
      height:"12%", width:'100%'
    },
    buttonContainer:{
      width:'20%', height:'100%', alignItems:'center', justifyContent:'center'
    },

    //ContainerInfoWhite
    animatedContainer:{
      height:'88%', width:'100%', backgroundColor:AppStylesHousin.colorSet[colorTheme]
                        .secondThemeBackgroundColor,borderTopLeftRadius:20, borderTopRightRadius:20, paddingHorizontal:"5%"
    },

    //Name AGe Container

    nameAndAgeContainer:{
      width:'100%', height:'40%', alignItems:'center', justifyContent:"center"
    },
    ageText:{marginTop:'-2%'},
    spacingContainer:{height:'21%', width:'100%'},
    credentialsContainer:{height:'80%', width:'100%', alignItems:'center', justifyContent:"center"},
    titleContainer:{height:'12%', width:'100%', justifyContent:'center'},


    '@media (min-width: 320) and (max-width:380)':{
      imageContainer:{
       top:'-12%'
      },
      h1TextGrayName:{
        fontSize:AppStylesHousin.fontSet.normal,
      },
      subTextName:{

      }


    }

  });

};
export default styles;
