import React from 'react';

import Routes from './routes';

//Dependencia para navegação entre telas
import {NavigationContainer} from '@react-navigation/native';

export default ()=> {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
