import AppStylesHousin from '../../../AppStyleHousin';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build();

const style = (colorTheme) => {
  return EStyleSheet.create({
    h1Text:{
      fontFamily:'Poppins-Bold',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.normal,
    },
    h1TextGray:{
      fontFamily:'Poppins-Bold',
      color:AppStylesHousin.colorSet[colorTheme].subTextGray,
      fontSize:AppStylesHousin.fontSet.normal,
    },
    subTitle:{
      fontFamily:'Poppins-Bold',
      color:AppStylesHousin.colorSet[colorTheme].subText,
      fontSize:AppStylesHousin.fontSet.xsmall,
    },
    subTitleSmallRegular:{
      fontFamily:'Poppins-Regular',
      color:AppStylesHousin.colorSet[colorTheme].subText,
      fontSize:AppStylesHousin.fontSet.normal
    },
    subTitleDescription:{
      fontFamily:'Poppins-Regular',
      color:AppStylesHousin.colorSet[colorTheme].subText,
      fontSize:AppStylesHousin.fontSet.xxsmall,
    },
    subTitleDescriptionWite:{
      fontFamily:'Poppins-Regular',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.xxsmall,
    },
    descriptionText:{
      fontFamily:'Poppins-Regular',
      color:AppStylesHousin.colorSet[colorTheme].subText,
      fontSize:AppStylesHousin.fontSet.xsmall,
      textAlign:'justify',
    },

    textSubtitleGray:{
      fontFamily:'Poppins-Regular',
      color:AppStylesHousin.colorSet[colorTheme].subText,
      fontSize:AppStylesHousin.fontSet.normal,
      textAlign:'justify',
    },

    //Container
    container:{
      flex:1, alignItems:'center', backgroundColor:AppStylesHousin.colorSet[colorTheme].grayBackground
    },


    //header
    headerContainer:{
      zIndex:2, height:'20%', width:'100%', borderBottomLeftRadius:20, borderBottomRightRadius:20, justifyContent:'center', flexDirection:'row', paddingTop:'6%'
    },
    leftIconContainer:{
      width:'20%',alignItems:'center', justifyContent:'flex-start', paddingRight:'4%'
    },
    titleHeaderContainer:{
      width:'60%', alignItems:'center', justifyContent:'flex-start'
    },
    noneContainer:{
      width:'20%'
    },

    //Card
    allCardContainer:{
      position:'absolute',zIndex:3, top:  '12%',width:'95%', height:'100%', alignItems:'center', justifyContent:'flex-start', paddingBottom:AppStylesHousin.WINDOW_HEIGHT*0.12
    },
    cardContainer:{
      height:AppStylesHousin.WINDOW_HEIGHT*0.6, width:AppStylesHousin.WINDOW_WIDTH*0.9,backgroundColor:AppStylesHousin.colorSet[colorTheme].secondThemeBackgroundColor,borderRadius:10, marginBottom:AppStylesHousin.WINDOW_HEIGHT*0.02
    },
    imageContainer:{width:'95%', height:'40%', alignSelf:'center', marginTop:'3%', borderRadius:50, marginBottom:'2%'},
    imageStyle:{width:'100%', height:'100%', borderRadius:6, overflow: 'hidden'},
    imageStyleFullRadius:{width:'100%', height:'100%', borderRadius:80, overflow: 'hidden'},

    infoOfHouse:{
      width:'90%', height:'15%', alignSelf:'center', flexDirection:'row', borderBottomWidth:1, borderBottomColor:AppStylesHousin.colorSet[colorTheme].inputColor
    },
    nameAndAge:{
      height:'100%', width:'70%', justifyContent:'center', alignItems:'flex-start'
    },
    porcentContainer:{
      height:'100%', width:'30%', justifyContent:'center', alignItems:'flex-end'
    },
    porcentInfo:{
      width:AppStylesHousin.WINDOW_WIDTH*0.12, height:AppStylesHousin.WINDOW_WIDTH*0.12,marginRight:'10%', borderRadius:80,borderWidth:2, borderColor:AppStylesHousin.colorSet[colorTheme].mainThemeBackgroundColor, alignItems:'center', justifyContent:'center'
    },
    descriptionContainer:{
      width:'95%', height:'50%',alignSelf:'center', justifyContent:'flex-start', paddingTop:'5%', paddingHorizontal:'2%'
    },

    //Modal
    modalContainer:{backgroundColor:AppStylesHousin.colorSet[colorTheme].secondThemeBackgroundColor,justifyContent:'center', alignItems:'center', width:'100%', height:'100%', paddingBottom:'3%'},
    modalHeaderContainer:{backgroundColor:AppStylesHousin.colorSet[colorTheme].mainThemeBackgroundColor, width:'100%', height:AppStylesHousin.WINDOW_HEIGHT * 0.2, alignItems:'center', justifyContent:'center', flexDirection:'row', borderBottomLeftRadius:20, borderBottomRightRadius:20},
    nullModalContainer:{width:'30%', height:'100%', justifyContent:'center', alignItems:'center'},

    modalImageContainer:{width:'30%', height:'100%', justifyContent:'center', alignItems:'center'},
    modalImageStyle:{height:AppStylesHousin.WINDOW_HEIGHT * 0.13, width:AppStylesHousin.WINDOW_HEIGHT * 0.13},

    modalInfoContainer:{width:'40%', height:'100%', justifyContent:'center'},

    modalContainerInfos:{width:'100%', height:'80%',justifyContent:'flex-start'},
    modalDescriptionContainer:{backgroundColor:AppStylesHousin.colorSet[colorTheme].cardBackgroundColor, height:AppStylesHousin.WINDOW_HEIGHT * 0.4, width:'90%', alignSelf:'center',justifyContent:'center', marginTop:AppStylesHousin.WINDOW_HEIGHT * 0.06, borderRadius:10, paddingHorizontal:'5%'}




  });

};
export default style;
