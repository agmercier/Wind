import React, { useEffect} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import myTheme from './navigation/NavigationTheme';

export default function App() {
  
  return (

      <NavigationContainer theme={myTheme} >
          <AppNavigator/>
      </NavigationContainer>
    
  );
}

