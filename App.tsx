/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  View,
} from 'react-native';
import Navigation from './src/route/Navigation';


function App(): React.JSX.Element {
 

  return (
  <View style={{flex:1}}>
     <NavigationContainer>
      <Navigation/>
     </NavigationContainer>
  </View>
  );
}



export default App;
