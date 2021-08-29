import AppStylesHousin from '../../../../AppStyleHousin';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build();

const styles = (colorTheme) => {
  return EStyleSheet.create({
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
    buttonText:{
      fontFamily:'Poppins-SemiBold',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.normal,
    },

    subText:{
      fontFamily:'Poppins-Regular ',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.xsmall,
    },

    exitText:{
      fontFamily:'Poppins-SemiBold',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.middle,
      textAlign:'justify'
    },

    imageBackground:{
      height:'10rem', width:'25rem', alignItems:'center', justifyContent:'center'
    },
    imageStyleFullRadius:{width:'100%', height:'100%', borderRadius:100, overflow: 'hidden'},

    '@media (min-width: 320) and (max-width:380)':{
      imageBackground:{
        height:'8rem', width:'21rem', alignItems:'center', justifyContent:'center'
      },
     }
  });

};
export default styles;
