import AppStylesHousin from '../../../AppStyleHousin';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build();

const style = (colorTheme) => {
  return EStyleSheet.create({
    container:{
      width:'100%',
      height: '100%',
      alignItems:'center',
    },
    logoContainer:{
      width: '100%',
      height:'70%',
      alignItems:'center',
      justifyContent:'center'
    },
    sliderContainer:{
      position:'absolute',
      bottom:0,
      height: '40%',
      width: '100%',
    }
  });

};
export default style;

