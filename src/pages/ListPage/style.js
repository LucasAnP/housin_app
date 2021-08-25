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
    subTitle:{
      fontFamily:'Poppins-Bold',
      color:AppStylesHousin.colorSet[colorTheme].subText,
      fontSize:AppStylesHousin.fontSet.xsmall,
    },
    subTitleDescription:{
      fontFamily:'Poppins-Regular',
      color:AppStylesHousin.colorSet[colorTheme].subText,
      fontSize:AppStylesHousin.fontSet.xxsmall,
    },
    descriptionText:{
      fontFamily:'Poppins-Regular',
      color:AppStylesHousin.colorSet[colorTheme].subText,
      fontSize:AppStylesHousin.fontSet.xsmall,
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
      position:'absolute',zIndex:3, top:  '12%',width:'95%', height:'100%', alignItems:'center', justifyContent:'flex-start', paddingBottom:AppStyleHousin.WINDOW_HEIGHT*0.12
    },
    cardContainer:{
      height:AppStyleHousin.WINDOW_HEIGHT*0.6, width:AppStyleHousin.WINDOW_WIDTH*0.9,backgroundColor:AppStyleHousin.colorSet[colorScheme].secondThemeBackgroundColor,borderRadius:10, marginBottom:AppStyleHousin.WINDOW_HEIGHT*0.02
    },
    imageContainer:{width:'95%', height:'40%', alignSelf:'center', marginTop:'3%', borderRadius:50, marginBottom:'2%'},
    imageStyle:{width:'100%', height:'100%', borderRadius:6, overflow: 'hidden'},

    infoOfHouse:{
      width:'90%', height:'15%', alignSelf:'center', flexDirection:'row', borderBottomWidth:1, borderBottomColor:AppStyleHousin.colorSet[colorScheme].inputColor
    },
    nameAndAge:{
      height:'100%', width:'70%', justifyContent:'center', alignItems:'flex-start'
    },
    porcentContainer:{
      height:'100%', width:'30%', justifyContent:'center', alignItems:'flex-end'
    },
    porcentInfo:{
      width:AppStyleHousin.WINDOW_WIDTH*0.12, height:AppStyleHousin.WINDOW_WIDTH*0.12,marginRight:'10%', borderRadius:80,borderWidth:2, borderColor:AppStyleHousin.colorSet[colorScheme].mainThemeBackgroundColor, alignItems:'center', justifyContent:'center'
    },
    descriptionContainer:{
      width:'95%', height:'50%',alignSelf:'center', justifyContent:'flex-start', paddingTop:'5%', paddingHorizontal:'2%'
    }




  });

};
export default style;
