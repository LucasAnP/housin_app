import React,{ useEffect} from 'react';
import {useWindowDimensions} from 'react-native';
import Routes from './routes';

//Dependencia para navegação entre telas
import {NavigationContainer} from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default ()=> {
  let width = useWindowDimensions().width;
  const useRem = () => {
    let rem = 14;
    if (width >= 640) {
      rem = 38;
    } else if (width >= 480) {
      rem = 26;
    }else if (width>380){
      rem = 16
    } else if (width > 321 && width<380) {
      rem = 14;
    }
    return rem;
  };
  useEffect(() => {
    const rem = useRem();
    EStyleSheet.build({
      $rem: rem
  });
  }, [width]);
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
